import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";

const dataChart = [
  {
    id: "japan",
    color: "hsl(32, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 195,
      },
      {
        x: "helicopter",
        y: 258,
      },
      {
        x: "boat",
        y: 296,
      },
      {
        x: "train",
        y: 237,
      },
      {
        x: "subway",
        y: 263,
      },
      {
        x: "bus",
        y: 53,
      },
      {
        x: "car",
        y: 294,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 224,
      },
      {
        x: "horse",
        y: 125,
      },
      {
        x: "skateboard",
        y: 101,
      },
      {
        x: "others",
        y: 199,
      },
    ],
  },
];

const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();
  return (
    <ResponsiveLine
      data={dataChart}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.primary[200],
            },
          },
          legend: {
            text: {
              fill: theme.palette.primary[200],
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.primary[200],
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.primary[200],
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.primary[200],
          },
        },
        tooltip: {
          container: {
            color: theme.palette.primary.main,
          },
        },
      }}
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      enableArea={isDashboard}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDashboard) return v.slice(0, 3);
          return v;
        },
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "" : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard
          ? ""
          : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
        legendOffset: -60,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default OverviewChart;
