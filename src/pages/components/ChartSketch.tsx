import React from "react";
import Image from "next/image";

const ChartSketch = () => {
  return (
    <div className="flex justify-center mt-10">
      <Image
        src="/sketch_charts.jpg" // no need to specify public folder next automatically searches for it
        width={900}
        height={900}
        alt="sketch of the charts we will produce"
      />
    </div>
  );
};

export default ChartSketch;
