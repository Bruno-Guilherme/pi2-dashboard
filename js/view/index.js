import { getDependencias } from '../controller/controller.js'

const abrirSidebar = () => {
  const aside = document.querySelector("aside");

  // Verifica se a barra lateral está atualmente visível ou oculta
  if (aside.style.display === 'none' || aside.style.display === '') {
    // Se estiver oculta, torna-a visível
    aside.style.display = "block";
    console.log("block");
  } else {
    // Se estiver visível, oculta-a
    aside.style.display = "none";
    console.log('none');
  }
};

// ---------- CHARTS ----------


getDependencias().then(
  (result) => {
    //console.log("Resultado: "+ result)
    const barChartOptions = {
      series: [
        {
          data: result,
          name: "Dependencias"
        }
      ],
      chart: {
        type: "bar",
        background: "transparent",
        toolbar: {
          show: false
        }
      },
      colors: ["#2962ff", "#d50000", "#2e7d32", "#ff6d00", "#583cb3"],
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
          horizontal: false,
          columnWidth: "40%"
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      grid: {
        borderColor: "#55596e",
        yaxis: {
          lines: {
            show: true
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        labels: {
          colors: "#f5f7ff"
        },
        show: true,
        position: "top"
      },
      stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
      },
      tooltip: {
        shared: true,
        intersect: false,
        theme: "dark"
      },
      xaxis: {
        categories: ["Federal", "Estadual", "Munincipal", "Privada"],
        title: {
          style: {
            color: "#FFFFFF"
          }
        },
        axisBorder: {
          show: true,
          color: "#55596e"
        },
        axisTicks: {
          show: true,
          color: "#55596e"
        },
        labels: {
          style: {
            colors: "#f5f7ff"
          }
        }
      },
      yaxis: {
        title: {
          text: "Quantidade",
          style: {
            color: "#f5f7ff"
          }
        },
        axisBorder: {
          color: "#55596e",
          show: true
        },
        axisTicks: {
          color: "#55596e",
          show: true
        },
        labels: {
          style: {
            colors: "#f5f7ff"
          }
        }
      }
    };

    const barChart = new ApexCharts(
      document.querySelector("#bar-chart"),
      barChartOptions
    );
    barChart.render();
  }
).catch((erro) => {
  console.log("Deu erro: " + erro);
});

// BAR CHART



var optionDonut = {
  chart: {
    type: 'donut',
    width: '95%',
    height: '85%'
  },
  plotOptions: {
    pie: {
      customScale: 1,
      donut: {
        size: '65%',
      }
    },
    stroke: {
      colors: undefined
    }
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark"
  },
  colors: ["#2962ff", "#d50000", "#2e7d32", "#ff6d00", "#583cb3"],
  series: [21, 29],
  labels: ['Urbana', 'Rural'],
  legend: {
    labels: {
      colors: "#FFFFFF",
      horizontalAlign: 'right', // Alinha os rótulos à direita
    },
    verticalAlign: 'middle', // Alinha os rótulos verticalmente ao centro
    
  }
};



var donut = new ApexCharts(
  document.querySelector("#donut"),
  optionDonut
);

donut.render();
