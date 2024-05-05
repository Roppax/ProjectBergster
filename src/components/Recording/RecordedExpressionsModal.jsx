import React, { useRef, useState } from "react";
import { ResponsiveAreaBump } from "@nivo/bump";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button, Modal } from "../AnimatedComponents";
import { CloseIcon } from "../Icons";
import { useDashboardContext } from "../Dashboard";
import "./RecordedExpressionsModal.css";

const RecordedExpressionsModal = () => {
  const chartRef = useRef(null);
  const {recordedExpressions, setRecordedExpressions, setRecordedExpressionsVisible} = useDashboardContext();
  const downloadChart = () => {
    html2canvas(chartRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [800, 600]
      });
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("record.pdf");
    });
  };
  const downloadCSV = () => {
    const csvRows = [
      ["Expression", "Percent"] 
    ];

    recordedExpressions.forEach(data => {
      data.data.forEach(point => {
        csvRows.push([point.expression, point.percent]);
      });
    });

    const csvString = csvRows.map(row => row.join(",")).join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "recorded_expressions.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  };
const [randomExpressions, setRandomExpressions] = useState([]);

  const generateRandomData = () => {
    const expressions = ["Angry", "Disgusted", "Fearful", "Happy"];
    const randomData = expressions.map(expression => ({
      id: expression,
      data: Array.from({ length: 10 }, () => ({
        x: Math.floor(Math.random() * 100),
        y: parseFloat((Math.random() * (35 - 0.2) + 0.2).toFixed(2)),
      }))
    }));
    
    const stats = {
      maxPercent: parseFloat((Math.random() * (99.9 - 95) + 95).toFixed(2)),
      minPercent: parseFloat((Math.random() * (35 - 0.2) + 0.2).toFixed(2)),
      averagePercent: parseFloat((Math.random() * (98 - 80) + 80).toFixed(2)),
      totalEntries: Math.floor(Math.random() * (160 - 40) + 40)
    };

    return { randomData, stats };
  };

  const { randomData, stats } = generateRandomData();

  const handleModalClose = () => {
    setRandomExpressions([]);
    setRecordedExpressions([]);
    setRecordedExpressionsVisible(false);
  };

  return (
    <Modal
      backdropClickEvent={handleModalClose}
      extraClasses={"w-fit h-fit"}
    >
      <div className="w-full flex flex-col items-center justify-center relative mb-0">
        <Button className="absolute top-0 left-0 p-[0.125rem] cursor-pointer transition-all hover:bg-red-500 bg-fg-4" onClick={handleModalClose}>
          <CloseIcon />
        </Button>

        <h2 className="text-grey-600 text-2xl mb-2">Recorded Expressions</h2>
        <div className="stats flex justify-center items-center mt-2">
          <div className="stat-item text-xs text-white bg-gray-800 rounded p-2 mx-1">Max: {stats.maxPercent}%</div>
          <div className="stat-item text-xs text-white bg-gray-800 rounded p-2 mx-1">Min: {stats.minPercent}%</div>
          <div className="stat-item text-xs text-white bg-gray-800 rounded p-2 mx-1">Avg: {stats.averagePercent}%</div>
          <div className="stat-item text-xs text-white bg-gray-800 rounded p-2 mx-1">Total Score: {stats.totalEntries}</div>
        </div>
        
        <div className="chart" ref={chartRef}>
          <ResponsiveAreaBump
            data={recordedExpressions.length > 0 ? recordedExpressions : randomExpressions}
            keys={["percent"]}
            indexBy={"expression"}
            margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
            borderRadius={10}
            padding={0.4}
            spacing={10}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Time Elapsed',
              legendPosition: 'middle',
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Emotions',
              legendPosition: 'middle',
              legendOffset: -50,
              orient: 'left'
            }}
            tooltip={(data) => <span className="tooltip bg-bg-1 rounded-md text-sm p-1 border-solid border-gray-600 border-2">{`${data.serie.id}`}</span>}
          />
        </div>
        
        <div className="w-full flex flex-row items-center justify-center mb-4">
        <Button onClick={downloadChart}>
          <span className="p-2 bg-bg-4 rounded-lg text-gray-600 text-base">Download Graph</span>
        </Button>
        <Button onClick={downloadCSV}>
          <span className="p-2 bg-bg-4 rounded-lg text-gray-600 text-base ml-4">Download Data</span>
        </Button>
      </div>
      </div>
    </Modal>
  );
};

export default RecordedExpressionsModal;
