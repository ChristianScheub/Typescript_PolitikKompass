import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
  Label,
} from "recharts";

interface CoordinateSystemProps {
  userCoordinate: { x: number; y: number };
}

const partiesData = [
  { name: "Ich", x: 0, y: 0, fill: "#000000" }, // User position
  { name: "Union", x: 6, y: 2, fill: "#FFA500" }, // Example party positions
  { name: "SPD", x: 2, y: -1, fill: "#FF0000" },
  { name: "FDP", x: 5, y: 3, fill: "#FFFF00" },
  { name: "Grüne", x: 1, y: -2, fill: "#00FF00" },
  { name: "Linke", x: -2, y: -3, fill: "#800080" },
  { name: "AFD", x: 7, y: 1, fill: "#0000FF" },
  { name: "BSW", x: -1, y: 0, fill: "#FFC0CB" }, // BSW position
];

const CoordinateSystem: React.FC<CoordinateSystemProps> = ({ userCoordinate }) => {
  return (
    <div style={{ width: "90%", height: "400px" }}>
      <ScatterChart
        width={600}
        height={600}
        margin={{ right: 20, bottom: 5, left: 10 }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" domain={[-10, 10]}>
          <Label value="sozialistisch | kapitalistisch" offset={-5} position="insideBottomRight" />
        </XAxis>
        <YAxis type="number" dataKey="y" domain={[-10, 10]}>
          <Label value="liberal | konservativ" angle={-90} offset={-5} position="insideLeft" />
        </YAxis>
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        {partiesData.map((party) => (
          <React.Fragment key={party.name}>
            <Scatter name={party.name} data={[party]} fill={party.fill} />
            <Label
              value={party.name}
              position={{ x: party.x * 40, y: party.y * -40 }}
              fill={party.fill}
              fontSize={12}
              offset={10}
            />
          </React.Fragment>
        ))}
        <Scatter name="Meine Position" data={[userCoordinate]} fill="#000000" />
      </ScatterChart>
    </div>
  );
};

export default CoordinateSystem;