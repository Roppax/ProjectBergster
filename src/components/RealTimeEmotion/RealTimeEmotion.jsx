import { ResponsiveBar } from "@nivo/bar";
import { useDashboardContext } from "../Dashboard";
import Spinner from "../Spinner/Spinner";
import "./RealTimeEmotion.css";

const RealTimeEmotion = () => {
  const { currentExpression, mountedVideoComponent } = useDashboardContext();

  const getTooltip = (data) => {
    return (
      <span className="tooltip bg-bg-4 rounded-md text-xs p-1 border-solid border-gray-500 border-2">{`${data.data.expression}: ${Math.round(data.data.percent)}%`}</span>
    );
  };

  const theme = {
    axis: {
      ticks: {
        text: {
          fill: '#ffffff'
        }
      },
      legend: {
        text: {
          fill: '#ffffff'
        }
      }
    }
  };

  return(
    currentExpression !== null && currentExpression !== undefined && mountedVideoComponent
    ? <ResponsiveBar
        data={currentExpression}
        keys={["percent"]}
        indexBy={"expression"}
        layout={"vertical"}
        margin={{ top: 50, right: 130, bottom: 50, left: 100 }} // Increased the left margin
        borderRadius={7}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#90C2E7"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Percentage",
          legendPosition: "middle",
          legendOffset: -40
        }}
        axisBottom={{
          legend: "Expression",
          legendPosition: "middle",
          legendOffset: 40
        }}
        tooltip={(data) => getTooltip(data)}
        theme={theme}
      />
    : <Spinner  text={"Waiting for Input"} />
  );
};

export default RealTimeEmotion;
  