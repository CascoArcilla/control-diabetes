import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const registersGlucosaDefault = [100, 90, 150, 180];
const timeAtMetricDefault = ["08:00", "21:00", "12:00", "16:00"];
const colorsDefault = [
  "rgba(75, 192, 192, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(255, 99, 132, 0.6)",
  "rgba(75, 192, 192, 0.6)",
];

export default function GraphicBar({ registersGlucosa, timeAtMetric, colors }) {
  const optionsLocal = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const dataLocal = {
    labels: timeAtMetric ?? timeAtMetricDefault,
    datasets: [
      {
        label: "Glucosa",
        data: registersGlucosa ?? registersGlucosaDefault,
        backgroundColor: colors ?? colorsDefault,
      },
    ],
  };

  return (
    <Bar data={dataLocal} options={optionsLocal} className="flex-grow-1 " />
  );
}
