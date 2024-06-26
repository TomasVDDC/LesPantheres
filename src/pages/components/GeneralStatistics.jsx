import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import departure_delays from "@/data/departure_delays.json";
import diverted_flights from "@/data/diverted_flights.json";

import { Colors } from "chart.js";

const GeneralStatistics = () => {
  const [currentData, setCurrentData] = useState(diverted_flights);
  const [chartTitle, setChartTitle] = useState(
    "Airports with the most diverted flights"
  );
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.defaults.color = "#FFFFFF"; // Set default text color to white
    Chart.register(Colors);

    const ctx = document.getElementById("dimensions").getContext("2d");
    const initialData = {
      labels: currentData.labels,
      datasets: [
        {
          label: "Number of diverted flights",
          data: currentData.data,
          backgroundColor: "rgba(255, 99, 132, 0.8)",
        },
      ],
    };

    //If we want to add extra information in the tooltip
    const footer = (tooltipItems) => {
      console.log(tooltipItems);
      return " ";
    };

    const config = {
      type: "bar",
      data: initialData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              footer: footer,
            },
          },
        },
      },
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      chartRef.current.destroy();
    };
  }, []);

  const updateChart = () => {
    const newData =
      currentData === diverted_flights ? departure_delays : diverted_flights;
    setCurrentData(newData);

    chartRef.current.data.labels = newData.labels;
    chartRef.current.data.datasets[0].data = newData.data;
    chartRef.current.data.datasets[0].label =
      newData === diverted_flights
        ? "Number of diverted flights"
        : "Number of departure delays over 15 minutes";
    chartRef.current.data.datasets[0].backgroundColor =
      newData === diverted_flights
        ? "rgba(255, 99, 132, 0.8)"
        : "rgba(54, 162, 235, 0.8)"; // Change color
    const newTitle =
      currentData === diverted_flights
        ? "Airports with the most diverted flights"
        : "Airports with the most departure delays over 15 minutes";
    setChartTitle(newTitle);
    chartRef.current.update();
  };

  return (
    <div>
      {/* <h1 className="text-3xl font-semibold ">{chartTitle}</h1> */}
      <div className="w-[500px] flex justify-center" onClick={updateChart}>
        <canvas id="dimensions" className="canvas-clickable"></canvas>
      </div>
    </div>
  );
};

export default GeneralStatistics;
