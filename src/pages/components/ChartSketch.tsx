import React from "react"
import Image from "next/image"

const ChartSketch = () => {
	return (
		<>
			<h1 className="text-4xl  font-bold">Charts and statistics</h1>
			<p className="text-[20px] mt-3 italic text-zinc-300">
				Currently a sketch of the charts we will produce
			</p>
			<div className="flex justify-center mt-10">
				<Image
					src="/sketch_charts.jpg" // no need to specify public folder next automatically searches for it
					width={900}
					height={900}
					alt="sketch of the charts we will produce"
				/>
			</div>
		</>
	)
}

export default ChartSketch
