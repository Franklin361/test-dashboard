import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.defaults.borderColor = "rgba(255,255,255,0.1)";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

export const WalletActivityGraphic = () => {
  return (
    <div className="">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "BTC",
              borderColor: "#F7931A",
              data: [10123, 27654, 40587, 30214, 51783, 14786, 58924, 6332, 38009, 22397],
              pointStyle: "circle",
              pointRadius: 5,
              pointBackgroundColor: "#F7931A",
              tension: 0.3,
            },
            {
              label: "ETH",
              borderColor: "#627EEA",
              data: [41905, 57722, 14762, 33067, 26653, 53371, 12547, 48964, 36408, 20579],
              pointRadius: 5,
              pointBackgroundColor: "#627EEA",
              tension: 0.3,
            },
            {
              label: "LTC",
              borderColor: "#BEBEBE",
              data: [20568, 39742, 51896, 63479, 11124, 46908, 57832, 28215, 49937, 36371],
              pointRadius: 5,
              pointBackgroundColor: "#BEBEBE",
              tension: 0.3,
            },
          ],
        }}
        options={{
          interaction: {
            intersect: false,
            mode: "index",
          },
          responsive: true,
          maintainAspectRatio: false,
          color: "white",
          plugins: {
            legend: {
              labels: {
                font: {
                  weight: "bold",
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
