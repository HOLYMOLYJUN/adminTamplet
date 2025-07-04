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
      height: 200,
      toolbar: {
        show: false
      },
      fontFamily: 'Pretendard',
    },
    labels: data.labels,
    colors: data.colors,
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: true,
            total: {
              show: true,
              label: '전체',
              fontSize: '14px',
              fontWeight: 600,
              color: '#333'
            },
          },
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '12px',
      fontWeight: 500,
      color: '#666',
      labels: {
        colors: '#666',
      }
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
    }],
    tooltip: {
      y: {
        formatter: (val) => {
          return val.toLocaleString() + '대'
        }
      },
    },
  })

  // 막대 차트 옵션
  const getBarOptions = () => ({
    chart: {
      type: 'bar',
      height: 300,
      toolbar: {
        show: false
      },
      fontFamily: 'Pretendard',
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
        },
        formatter: function (value) {
          return value + '월'
        }
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        },
        formatter: (val) => {
          if (val >= 1000) return (val / 1000).toLocaleString() + 'k'
          return val
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
    }],
    tooltip: {
      y: {
        formatter: (val) => {
          return val.toLocaleString() + '원'
        }
      },
      x: {
        formatter: (val) => '2025년 ' + val + '월'
      }
    },
  })

  // 선형 차트 옵션
  const getLineOptions = () => ({
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false
      },
      fontFamily: 'Pretendard',
    },
    stroke: {
      width: 3,
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
        },
        formatter: (val) => val + '월'
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        },
        formatter: (val) => {
          if (val >= 1000) return (val / 1000).toLocaleString() + 'k'
          return val
        }
      }
    },
    colors: data.colors,
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
      position: 'bottom',
      horizontalAlign: 'center',
      floating: true,
      offsetY: 30,
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
    }],
    tooltip: {
      
      x: {
        formatter: (val) => '2025년 ' + val + '월'
      },
      y: {
        formatter: (val) => {
          return val.toLocaleString() + '명'
        }
      },
    },
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
  const renderOtherChart = () => {
    // bar 차트일 때만 footer 계산
    let footer = null
    if (type === 'bar' && data && data.series && data.series[0] && Array.isArray(data.series[0].data)) {
      const arr = data.series[0].data
      const max = Math.max(...arr)
      const min = Math.min(...arr)
      const avg = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
      footer = (
        <div className="chart-footer">
          <div className="chart-footer-content">
            <div className="chart-footer-item">
              <div className="chart-footer-label">월간 최대</div>
              <div className="chart-footer-value">{max.toLocaleString()}원</div>
            </div>
            <div className="chart-footer-item">
              <div className="chart-footer-label">월간 최저</div>
              <div className="chart-footer-value">{min.toLocaleString()}원</div>
            </div>
            <div className="chart-footer-item">
              <div className="chart-footer-label">평균 매출</div>
              <div className="chart-footer-value">{avg.toLocaleString()}원</div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="chart-container">
        <div className="chart-header">
          <h3 className="chart-title">{title}</h3>
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
        {footer}
      </div>
    )
  }

  return type === 'donut' ? renderDonutChart() : renderOtherChart()
}

export default ChartComponent 