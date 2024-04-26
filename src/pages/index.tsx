//import D3Example from "./components/D3Example";
import Head from "next/head";
import Header from "./components/Header";
import ChartSketch from "./components/ChartSketch";
import Footer from "./components/Footer";
import SkeletonCard from "./components/SkeletonCard";
import { Suspense } from "react";
import React from "react";
import dynamic from "next/dynamic";

export default function IndexPage() {
  const D3Example = dynamic(() => import("./components/D3Example"), {
    loading: () => (
      <div className="flex justify-center">
        <SkeletonCard />{" "}
      </div>
    ),
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Dataviz Project</title>
        <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
        <script type="module"></script>
      </Head>
      <div>
        <Header />
        <div className="mb-[60px] md:mb-[120px] text-white">
          <div className="ml-20">
            <h1 className="text-4xl  font-bold">Main visualization</h1>
            <p className="text-[20px] italic mt-3 text-zinc-300">
              Currently a simple D3 skeleton
            </p>
          </div>

          <D3Example width="200" height="200" />

          <div className="ml-20">
            <h1 className="text-4xl  font-bold">Charts and statistics</h1>
            <p className="text-[20px] mt-3 italic text-zinc-300">
              Currently a sketch of the charts we will produce
            </p>
          </div>
          <ChartSketch />
        </div>
        <Footer />
      </div>
    </>
  );
}
