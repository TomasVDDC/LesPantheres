import { useEffect, useState, useRef } from "react";
import stateData from "@/data/states.json";
import airports from "@/data/airports.json";
import connections from "@/data/connections.json";
import airport_scores from "@/data/airport_scores.json";
import delayed_flights from "@/data/delayed_flights.json";
import delay_types from "@/data/delay_types.json";
import Chart from "chart.js/auto";

const mapRatio = 0.4;

export default function D3Example() {
  const [selectedAirportId, setSelectedAirportId] = useState(11292);
  const delaysChartRef = useRef(null);
  const scoresChartRef = useRef(null);
  const delayTypesChartRef = useRef(null);

  useEffect(() => {
    const width = parseInt(d3.select(".viz").style("width"));
    const height = width * mapRatio;

    const airport_data = {
      type: "FeatureCollection",
      features: airports.map((airport) => {
        return {
          type: "Feature",
          properties: {
            name: airport.DISPLAY_AIRPORT_NAME,
            id: airport.AIRPORT_ID,
            city: airport.DISPLAY_AIRPORT_CITY_NAME_FULL,
          },
          geometry: {
            type: "Point",
            coordinates: [
              parseFloat(airport.LONGITUDE),
              parseFloat(airport.LATITUDE),
            ],
          },
        };
      }),
    };

    const connection_data = {
      type: "FeatureCollection",
      features: connections.map((d) => {
        return {
          type: "Feature",
          properties: {
            id: d.ORIGIN_AIRPORT_ID,
            dest_id: d.DEST_AIRPORT_ID,
          },
          geometry: {
            type: "LineString",
            coordinates: [
              [
                parseFloat(d.ORIGIN_AIRPORT_LONGITUDE),
                parseFloat(d.ORIGIN_AIRPORT_LAT),
              ],
              [
                parseFloat(d.DEST_AIRPORT_LONGITUDE),
                parseFloat(d.DEST_AIRPORT_LAT),
              ],
            ],
          },
        };
      }),
    };

    const svg = d3
      .select(".viz")
      .append("svg")
      .attr("height", height)
      .attr("width", width);

    const projection_map = d3
      .geoOrthographic()
      .scale(800)
      .translate([width / 2, height / 2])
      .rotate([100, -40])
      .clipAngle(90);

    // const projection_map = d3
    // 	.geoAlbersUsa()
    // 	.scale(1000)
    // 	.translate([width / 2, height / 2])

    // Creating path generator fromt the projection created above.
    const pathGenerator = d3.geoPath().projection(projection_map);

    const svg_group = svg
      .append("g")
      .attr("width", width)
      .attr("height", height);

    var tooltip = d3
      .select(".viz")
      .append("div")
      .style("position", "absolute")
      .style("opacity", 0)
      .style("color", "black")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "15px");

    function onHoverAirport(e, d) {
      console.log("hover");

      tooltip
        .style("opacity", 1)
        .style("z-index", 1)
        .text(d.properties.name)
        .style("top", e.pageY - 300 + "px")
        .style("left", e.pageX - 300 + "px");

      svg_group
        .select("#airports")
        .selectAll("path")
        .attr("fill", "#FF6384")
        .attr("stroke-width", 0);

      d3.select(e.target).attr("fill", "#9966FF");
      //.attr("stroke", "#9966FF")
      //.attr("stroke-width", 20);

      setSelectedAirportId(d.properties.id);

      const airportId = d.properties.id;
      console.log(airportId);

      const connectedLines = svg_group.select("#connections").selectAll("path");

      connectedLines.style("opacity", function (lineData) {
        return lineData.properties.id == airportId ||
          lineData.properties.dest_id == airportId
          ? 1
          : 0;
      });
    }

    function onHoverExitAirport(e, d) {
      tooltip.style("opacity", 0).style("z-index", -10);
    }

    function addAirports(svg_group, pathGenerator, airport_data) {
      const airports = svg_group
        .append("g")
        .attr("id", "airports")
        .selectAll("g")
        .data(airport_data.features)
        .enter()
        .append("g");

      // Add the actual airport paths
      airports
        .append("path")
        .attr("d", pathGenerator.pointRadius(6))
        .attr("fill", "#FF6384")

        .on("mousemove", onHoverAirport)
        .on("mouseout", onHoverExitAirport);
    }

    createMap(svg_group, pathGenerator, stateData);
    addAirports(svg_group, pathGenerator, airport_data);
    createConnectionLines(svg_group, pathGenerator, connection_data);
  }, []);

  useEffect(() => {
    Chart.defaults.color = "#FFFFFF"; // Set default text color to white
    const data = {
      labels: airport_scores[selectedAirportId].labels,
      datasets: [
        {
          label: "Scores of the airport",
          data: airport_scores[selectedAirportId].data,
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
      ],
    };

    const options = {
      scales: {
        r: {
          angleLines: {
            color: "#666", // Dark gray color for angle lines
          },
          grid: {
            color: "#444", // Darker gray color for grid lines
          },
          pointLabels: {
            color: "#fff", // White color for point labels
          },
          ticks: {
            backdropColor: "#2c2c2c", // Dark background for ticks
            color: "#fff", // White color for tick values
            beginAtZero: true, // Start scale at 0
            min: 0, // Minimum value of the scale
            max: 100, // Maximum value of the scale
            stepSize: 20, // Steps of the scale
          },
          suggestedMin: 0, // Suggested minimum value of the scale
          suggestedMax: 100,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#fff", // White color for legend text
          },
        },
      },
    };

    const config = {
      type: "radar",
      data: data,
      options: options,
    };

    // Destroy existing chart instance if it exists
    if (scoresChartRef.current) {
      scoresChartRef.current.destroy();
    }

    // Create new chart instance
    const ctx = document.getElementById("airport-score-canva").getContext("2d");
    scoresChartRef.current = new Chart(ctx, config);
  }, [selectedAirportId]);

  useEffect(() => {
    Chart.defaults.color = "#FFFFFF"; // Set default text color to white
    const data = {
      labels: delay_types[selectedAirportId].labels,
      datasets: [
        {
          label: "Percentage delay types",
          data: delay_types[selectedAirportId].data,
          fill: true,
          tension: 0.3,
        },
      ],
    };

    const config = {
      type: "doughnut",
      data: data,
    };

    // Destroy existing chart instance if it exists
    if (delayTypesChartRef.current) {
      delayTypesChartRef.current.destroy();
    }

    // Create new chart instance
    const ctx = document.getElementById("delay-types-canva").getContext("2d");
    delayTypesChartRef.current = new Chart(ctx, config);
  }, [selectedAirportId]);

  useEffect(() => {
    Chart.defaults.color = "#FFFFFF"; // Set default text color to white
    const data = {
      labels: delayed_flights[selectedAirportId].labels,
      datasets: [
        {
          label: "Number of minutes delayed",
          data: delayed_flights[selectedAirportId].data,
          fill: true,
          tension: 0.3,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    };

    // Destroy existing chart instance if it exists
    if (delaysChartRef.current) {
      delaysChartRef.current.destroy();
    }

    // Create new chart instance
    const ctx = document.getElementById("delays-canva").getContext("2d");
    delaysChartRef.current = new Chart(ctx, config);
  }, [selectedAirportId]);

  return (
    <div>
      <div className="viz">
        {selectedAirportId && (
          <div className="airport-select">
            <h2 className="font-bold">Currently Selected Airport</h2>
            <p className="text-xl mt-3">
              {"Name: "}
              {
                airports.filter((a) => a.AIRPORT_ID == selectedAirportId)[0]
                  .DISPLAY_AIRPORT_NAME
              }
            </p>
            <p className="text-xl mt-3">
              {"ID: "}
              {
                airports.filter((a) => a.AIRPORT_ID == selectedAirportId)[0]
                  .AIRPORT
              }
            </p>
            <p className="text-xl mt-3">
              {"City: "}
              {
                airports.filter((a) => a.AIRPORT_ID == selectedAirportId)[0]
                  .DISPLAY_AIRPORT_CITY_NAME_FULL
              }
            </p>
          </div>
        )}
      </div>
      <div className="mb-[30px]">
        <h1 className="text-4xl text-white  font-bold">
          Statistics for{" "}
          {
            airports.filter((a) => a.AIRPORT_ID == selectedAirportId)[0]
              .DISPLAY_AIRPORT_NAME
          }
        </h1>
        <div className="canvas-position">
          <div className="canvas-radar">
            <canvas
              id="delay-types-canva"
              style={{
                border: "1px solid white",
                borderRadius: "20px",
                padding: "10px",
              }}
            ></canvas>
            <h2 className="canvas-title"> Delay Types</h2>
          </div>

          <div className="canvas-radar">
            <canvas
              id="airport-score-canva"
              style={{
                border: "1px solid white",
                borderRadius: "20px",
                padding: "10px",
              }}
            ></canvas>
            <h2 className="canvas-title">Airport Score</h2>
          </div>
        </div>
        <div className="canvas-position">
          <div className="canvas-delayed">
            <canvas
              id="delays-canva"
              style={{
                border: "1px solid white",
                borderRadius: "20px",
                padding: "10px",
              }}
            ></canvas>
            <h2 className="canvas-title">Delay Duration</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function createConnectionLines(svg_group, pathGenerator, connection_data) {
  svg_group
    .append("g")
    .attr("id", "connections")
    .selectAll("g")
    .data(connection_data.features)
    .enter()
    .append("path")
    .attr("d", pathGenerator)
    .attr("stroke", "#9966FF")
    .attr("stroke-width", 1.5)
    .attr("fill", "none")
    .style("opacity", 0) // Initially hidden
    .style("pointer-events", "none");
}

function createMap(svg_group, pathGenerator, stateData) {
  svg_group
    .append("g")
    .attr("id", "states")
    .selectAll("path")
    .data(stateData.features)
    .enter()
    .append("path")
    .attr("stroke-width", 0.5)
    .attr("stroke", "grey")
    .attr("key", (feature) => {
      return feature.properties.NAME;
    })
    .attr("d", pathGenerator)
    .attr("fill", "#ffffff");
}
