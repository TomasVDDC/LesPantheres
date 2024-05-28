import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import D3Example from "./components/D3Example";
import GeneralStatistics from "./components/GeneralStatistics";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Dataviz Project</title>
        <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
        <script type="module"></script>
      </Head>
      <div>
        <Header />
        <div className="mb-[60px] md:mb-[120px] text-white container">
          <div className="mb-[30px]">
            <h1 className="text-4xl text-white  font-bold">
              Select an airport
            </h1>
            <p className="text-lg text-white mt-2">
              Pick an airport on the map to see the biggest connections between
              that airport and others.
            </p>
          </div>
          <D3Example />

          <div className="mt-[50px] mb-[50px] text-white ">
            <h1 className="text-4xl  font-bold">
              General Statistics on all Airports{" "}
            </h1>
            <p className="text-[20px] mt-3 italic text-zinc-300">
              Here are some general statistics on all the airports in the
              dataset.
            </p>
          </div>
          <div>
            <GeneralStatistics />
          </div>
          {/* <ChartSketch /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
