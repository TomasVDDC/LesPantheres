import React, { useEffect } from "react"
import Chart from "chart.js/auto"
import diverted_flights from "@/data/diverted_flights.json"
import { Colors } from "chart.js"

const GeneralStatistics = () => {
	useEffect(() => {
		Chart.defaults.color = "#FFFFFF" // Set default text color to white
		Chart.register(Colors)

		const data = {
			labels: diverted_flights.labels,
			datasets: [
				{
					label: "Number of diverted flights",
					data: diverted_flights.data,
					backgroundColor: "rgba(255, 99, 132, 0.8)",
				},
			],
		}

		const config = {
			type: "bar",
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
		}

		new Chart(document.getElementById("dimensions"), config)
	}, [])

	return (
		<div>
			<div className="w-[500px]">
				<canvas id="dimensions"></canvas>
			</div>
		</div>
	)
}

export default GeneralStatistics
