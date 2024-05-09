//import D3Example from "./components/D3Example";
import Head from "next/head"
import Header from "./components/Header"
import ChartSketch from "./components/ChartSketch"
import Footer from "./components/Footer"
import SkeletonCard from "./components/SkeletonCard"
import { Suspense } from "react"
import React from "react"
import dynamic from "next/dynamic"

export default function IndexPage() {
	const D3Example = dynamic(() => import("./components/D3Example"), {
		loading: () => (
			<div className="flex justify-center">
				<SkeletonCard />{" "}
			</div>
		),
		ssr: false,
	})
	return (
		<>
			<Head>
				<title>Dataviz Project</title>
				<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
				<script type="module"></script>
			</Head>
			<div className="container">
				<Header />
				<div className="mb-[60px] md:mb-[120px] text-white">
					<D3Example />
					<ChartSketch />
				</div>
				<Footer />
			</div>
		</>
	)
}
