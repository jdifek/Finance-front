import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [30, 50, 40, 60, 70, 80],
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
      tension: 0.1,
    },
    {
      label: "Sales",
      data: [50, 30, 10, 50, 60, 60],
      fill: false,
      borderColor: "red",
      tension: 0.1,
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Sales Data",
    },
  },
};

const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Votes Distribution",
    },
  },
};

export const HomePage = () => {
  const [schedule, setSchedule] = useState<"Pie" | "Line">("Line");

  return (
    <>
      <h1>Home page</h1>

      <img src="Finance-front/img/Logo(Nav).svg" alt="img" />
      <img style={{opacity: "40%"}} src="Finance-front/img/Logo(Nav).svg" alt="img" />
      <button>Filter</button>

      {schedule === "Line" ? (
        <div style={{ width: "100%", margin: '0 auto' }}>
          <Line data={lineData} options={lineOptions} />
        </div>
      ) : (
        <div style={{ width: "500px", margin: '0 auto' }}>
          <Pie data={pieData} options={pieOptions} />
        </div>
      )}

      <div className="home__change">
        <img
          onClick={() => setSchedule("Pie")}
          src="Finance-front/img/change-pie.svg"
          alt="img"
        />
        <img
          onClick={() => setSchedule("Line")}
          src="Finance-front/img/change-line.svg"
          alt="img"
        />
      </div>
    </>
  );
};
