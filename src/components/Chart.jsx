import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import './Chart.css'
import { useSidebarStore } from '../store/useSidebarStore'

const ChartComponent = ({ type, data, title }) => {
  const { isSidebarCollapsed } = useSidebarStore()
  const [chartKey, setChartKey] = useState(0)

  useEffect(() => {
    // 사이드바 상태 변경 시 차트 강제 업데이트
    const timer = setTimeout(() => {
      setChartKey(prev => prev + 1)
    }, 300) // 사이드바 애니메이션 완료 후 업데이트

    return () => clearTimeout(timer)
  }, [isSidebarCollapsed])

  // 도넛 차트 옵션
  const getDonutOptions = () => ({
    chart: {
      type: 'donut',
      height: 300,
      toolbar: {
        show: false
      }
    },
    labels: data.labels,
    colors: data.colors,
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              fontSize: '14px',
              fontWeight: 600,
              color: '#333'
            }
          }
        }
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 250
        }
      }
    }]
  })

  // 막대 차트 옵션
  const getBarOptions = () => ({
    chart: {
      type: 'bar',
      height: 300,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '28%',
        borderRadius: 5,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: data.categories,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        }
      }
    },
    fill: {
      opacity: 1
    },
    colors: data.colors,
    grid: {
      borderColor: '#e9ecef',
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 250
        }
      }
    }]
  })

  // 선형 차트 옵션
  const getLineOptions = () => ({
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    xaxis: {
      categories: data.categories,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        }
      }
    },
    colors: data.colors,
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100]
      }
    },
    grid: {
      borderColor: '#e9ecef',
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      floating: true,
      offsetY: -10,
      fontSize: '12px',
      markers: {
        width: 8,
        height: 8,
        radius: 4
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 250
        }
      }
    }]
  })

  // 타입별 옵션 선택
  const getChartOptions = () => {
    switch (type) {
      case 'donut':
        return getDonutOptions()
      case 'bar':
        return getBarOptions()
      case 'line':
        return getLineOptions()
      default:
        return getDonutOptions()
    }
  }

  // 도넛 차트 전용 렌더링
  const renderDonutChart = () => (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        <button className="chart-refresh">
          <span>Refresh</span>
        </button>
      </div>
      
      <div className="chart-content">
        <Chart
          key={`donut-${chartKey}`}
          options={getChartOptions()}
          series={data.series}
          type="donut"
          height={300}
        />
        
      </div>
    </div>
  )

  // 막대/선형 차트 렌더링
  const renderOtherChart = () => (
    <div className="chart-container">
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
        {type === 'line' ? (
          <div className="chart-filters">
            <button className="filter-btn active">1M</button>
            <button className="filter-btn">3M</button>
            <button className="filter-btn">6M</button>
            <button className="filter-btn">1Y</button>
          </div>
        ) : (
          <button className="chart-menu">
            <span className="dots">⋮</span>
          </button>
        )}
      </div>
      
      <div className="chart-content">
        <Chart
          key={`${type}-${chartKey}`}
          options={getChartOptions()}
          series={data.series}
          type={type}
          height={300}
        />
      </div>
    </div>
  )

  return type === 'donut' ? renderDonutChart() : renderOtherChart()
}

export default ChartComponent 