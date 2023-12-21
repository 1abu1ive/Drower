import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MyLIne() {
  return (
    <Line
      datasetIdKey="lineChart"
      data={{
        labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May ", "Iyun"],
        datasets: [
          {
            id: 1,
            label: " ",
            data: [20, 33, 75, 52, 40, 38],
            borderColor: "#FB896B",
          },
          {
            id: 2,
            label: " ",
            data: [40, 80, 56, 45, 64, 70],
            borderColor: "#6956E5            ",
          },
        ],
      }}
    ></Line>
  );
}
