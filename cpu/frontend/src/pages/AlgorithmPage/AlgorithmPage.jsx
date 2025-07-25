import "./AlgorithmPage.css";
import React, { Suspense } from "react";
import OutputCard from "../../components/OutputCard/OutputCard";

import SRTF from "../../algorithms/SRTF.js";
import RR from "../../algorithms/RR.js";
import SJF from "../../algorithms/SJF.js";
import Priority from "../../algorithms/priority.js";
import FCFS from "../../algorithms/FCFS.js";
import InfoPopup from "../../components/InfoPopup/InfoPopup.jsx";

function selectAlgorithm(algorithmName) {
  const algorithms = {
    SRTF: SRTF,
    RR: RR,
    SJF: SJF,
    Priority: Priority,
    FCFS: FCFS,
    RoundRobin: RR, // Alias for RR
  };
  return algorithms[algorithmName];
}

function AlgorithmPage({ algorithmName }) {
  return (
    <div className="container">
    <Suspense fallback={<div>Loading...</div>}>
      <InfoPopup algorithmName={algorithmName} />
      <OutputCard
        algorithm={algorithmName}
        calculateAlgorithm={selectAlgorithm(algorithmName)} // Pass the loaded algorithm function
      />
    </Suspense>
    </div>
  );
}

export default AlgorithmPage;
