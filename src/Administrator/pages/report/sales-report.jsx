import CardReport from "../../components/card-report/card-report";
import Dashboard from "../../components/dashboard/dashboard";
import "./sales-report.css";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import Axios from "axios";
const SalesReport = () => {

  const [valueCategories,setValueCategories]=useState([])
  const categories = [
    { title: "Productos", value:valueCategories.product , icon: "fa-solid fa-clipboard-list" },
    { title: "Ventas", value: valueCategories.order, icon: "fa-solid fa-burger" },
    { title: "Ganancias", value: 50000, icon: "fa-solid fa-sack-dollar" },
    { title: "Usuarios", value: valueCategories.user, icon: "fa-solid fa-users" },
  ];

  useEffect(()=>{

    Axios.get("https://host-bodegoon.herokuapp.com/report")
    .then(response=>setValueCategories(response.data))
  },[])

  const chart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["P. bodegon","P. hawainaa","L. mediterranea","L. de Pollo","E. CESAR"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49],
      },
    ],
  };
  return (
    <>
      <Dashboard>
        <div className="cards-report">
          {categories.map((category) => {
            return (
              <CardReport
                title={category.title}
                value={category.value}
                icon={category.icon}
              />
            );
          })}
        </div>

        <div className="charts-container">
          <Chart
            options={chart.options}
            series={chart.series}
            type="line"
            width="500"
          />
          <Chart
            options={chart.options}
            series={chart.series}
            type="bar"
            width="500"
          />
        </div>
      </Dashboard>
    </>
  );
};

export default SalesReport;
