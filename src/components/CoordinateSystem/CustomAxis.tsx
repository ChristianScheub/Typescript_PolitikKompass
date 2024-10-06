import React from "react";
import { XAxis, YAxis, Label } from "recharts";

const Axes: React.FC = () => {
  return (
    <>
      <XAxis type="number" dataKey="x" domain={[-20, 20]}>
        <Label
          value="sozialistisch | kapitalistisch"
          offset={-5}
          position="insideBottomRight"
        />
      </XAxis>
      <YAxis type="number" dataKey="y" domain={[-20, 20]}>
        <Label
          value="liberal | konservativ"
          angle={-90}
          offset={-5}
          position="insideLeft"
        />
      </YAxis>
    </>
  );
};

export default Axes;