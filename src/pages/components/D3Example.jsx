import { useEffect } from "react"
import stateData from "../data/states.json"
import airports from "../data/airports.json"

import { ToastContainer, toast } from "react-toastify"
// example based on https://gnithyanantham.medium.com/creating-maps-using-d3-js-in-react-f42b8a292580

const mapRatio = 0.5

export default function D3Example() {
	useEffect(() => {
		const width = parseInt(d3.select(".viz").style("width"))
		const height = width * mapRatio

		const airport_data = {
			type: "FeatureCollection",
			features: airports.map((airport) => {
				return {
					type: "Feature",
					// properties: airport,
					geometry: {
						type: "Point",
						coordinates: [
							parseFloat(airport.LONGITUDE),
							parseFloat(airport.LATITUDE),
						],
					},
				}
			}),
		}

		const svg = d3
			.select(".viz")
			.append("svg")
			.attr("height", height)
			.attr("width", width)

		const projection_map = d3
			.geoAlbersUsa()
			.translate([width / 2, height / 2])
			.scale(width)

		// Creating path generator fromt the projecttion created above.
		const pathGenerator = d3.geoPath().projection(projection_map)

		// Creating the container
		const svg_group = svg
			.append("g")
			.attr("width", width)
			.attr("height", height)

		svg_group
			.append("g")
			.attr("id", "states")
			.selectAll("path")
			.data(stateData.features)
			.enter()
			.append("path")
			.attr("key", (feature) => {
				return feature.properties.NAME
			})
			.attr("d", pathGenerator)
			.attr("fill", "#ffffff")

		svg_group
			.append("g")
			.selectAll("path")
			.data(airport_data.features)
			.enter()
			.append("path")
			.attr("d", pathGenerator)
			.attr("fill", "red")
	}, [])

	return (
		<div>
			<h1 className="text-4xl  font-bold">Main visualization</h1>
			<p className="text-[20px] italic mt-3 text-zinc-300"></p>
			<div className="viz"></div>
		</div>
	)
}
