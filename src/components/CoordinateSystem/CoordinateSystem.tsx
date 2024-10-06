import React, { useEffect, useState } from "react";
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
import Card from "../../ui/Card/Card";

interface CoordinateSystemProps {
  userCoordinate: { x: number; y: number };
}

const partiesData = [{ name: "Union", x: 6, y: 2, fill: "#FFA500" }];
/*
const partiesData = [
  { name: "Ich", x: 0, y: 0, fill: "#000000" }, // User position
  { name: "Union", x: 6, y: 2, fill: "#FFA500" }, // Example party positions
  { name: "SPD", x: 2, y: -1, fill: "#FF0000" },
  { name: "FDP", x: 5, y: 3, fill: "#FFFF00" },
  { name: "Grüne", x: 1, y: -2, fill: "#00FF00" },
  { name: "Linke", x: -2, y: -3, fill: "#800080" },
  { name: "AFD", x: 7, y: 1, fill: "#0000FF" },
  { name: "BSW", x: -1, y: 0, fill: "#FFC0CB" }, // BSW position
];*/

const CoordinateSystem: React.FC<CoordinateSystemProps> = ({
  userCoordinate,
}) => {
  const [chartSize, setChartSize] = useState(550); // Kleinere Initialgröße

  // Funktion zum Aktualisieren der Größe
  const updateChartSize = () => {
    const containerWidth = window.innerWidth * 0.7;
    const containerHeight = window.innerHeight * 0.7;
    const newSize = Math.min(containerWidth, containerHeight, 900); // Maximalgröße von 500px
    setChartSize(Math.max(newSize, 200)); // Mindestgröße von 200px
  };

  useEffect(() => {
    updateChartSize(); // Setze die Größe beim ersten Rendern
    window.addEventListener("resize", updateChartSize); // Füge einen Event Listener hinzu

    return () => {
      window.removeEventListener("resize", updateChartSize); // Entferne den Event Listener beim Unmount
    };
  }, []);

  return (
    <Card style={{height: "40vh", display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "3vw",paddingBottom: "3vw" }}>
      <div style={{ width: chartSize, height: chartSize, position: "relative" }}>
        <ScatterChart
          width={chartSize}
          height={chartSize}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" domain={[-10, 10]}>
            <Label
              value="sozialistisch | kapitalistisch"
              offset={-5}
              position="insideBottom"
            />
          </XAxis>
          <YAxis type="number" dataKey="y" domain={[-10, 10]}>
            <Label
              value="liberal | konservativ"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          {partiesData.map((party) => (
            <React.Fragment key={party.name}>
              <Scatter name={party.name} data={[party]} fill={party.fill} />
              <Label
                value={party.name}
                position={{ x: party.x * (chartSize / 20), y: party.y * -(chartSize / 20) }}
                fill={party.fill}
                fontSize={12}
                offset={10}
              />
            </React.Fragment>
          ))}
          <Scatter
            name="Meine Position"
            data={[userCoordinate]}
            fill="#000000"
          />
        </ScatterChart>
      </div>
      <br/>
    </Card>
  );
};

export default CoordinateSystem;