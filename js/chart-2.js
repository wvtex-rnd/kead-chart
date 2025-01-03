document.addEventListener('DOMContentLoaded', function () {
    const infoCloseBtns = document.querySelectorAll('.btn-info-close');
    const infoOpenBtns = document.querySelectorAll('.btn--info');

    // 정보 닫기 버튼 이벤트
    infoCloseBtns.forEach((infoCloseBtn) => {
        infoCloseBtn.addEventListener('click', function () {
            let chartInfo = infoCloseBtn.closest('.chart-info');
            let chartBox = chartInfo.closest('.chart-card-item');

            chartInfo.classList.remove('show');
            chartBox.querySelector('.btn--info').classList.remove('active');
        });
    });

    // 정보 열기 버튼 이벤트
    infoOpenBtns.forEach((infoOpenBtn) => {
        infoOpenBtn.addEventListener('click', function () {
            let chartBox = infoOpenBtn.closest('.chart-card-item');
            let chartInfo = chartBox.querySelector('.chart-info');

            infoOpenBtn.classList.toggle('active');
            chartInfo.classList.toggle('show');
        });
    });
});

// 차트 전역 기본 스타일
Chart.register(ChartDataLabels);
Chart.defaults.color = '#575757';
Chart.defaults.font.family = 'Pretendard';
Chart.defaults.layout.padding.top = 15;

Chart.defaults.set('plugins.datalabels', {
    align: 'top',
    anchor: 'end',
    font: {
        size: 11,
    },
    padding: {
        bottom: -10,
    },
    formatter: function (value) {
        return value.toFixed(1);
    },
});

Chart.defaults.set('plugins.tooltip', {
    callbacks: {
        label: function (context) {
            // 숫자를 소수점 1자리로 포맷팅
            let value = context.raw; // 현재 데이터 값
            return `${value.toFixed(1)}`; // 소수점 1자리로 표시
        },
    },
});

const clearTooltip = (tooltipItems) => {
    return tooltipItems[0].label.replaceAll(',', '');
};

Chart.defaults.set('plugins.tooltip', {
    callbacks: {
        title: clearTooltip,
    },
});

// 플러그인 정의
const backgroundColorPlugin = {
    id: 'backgroundColor', // 플러그인 ID
    beforeDraw(chart) {
        const { ctx, chartArea } = chart; // 차트의 2D 컨텍스트와 차트 영역 가져오기
        ctx.save(); // 현재 상태 저장
        ctx.fillStyle = 'white'; // 배경색 설정
        ctx.fillRect(0, 0, chart.width, chart.height); // 캔버스 전체 배경색 설정
        ctx.restore(); // 상태 복원
    },
};

const scalesFalse = {
    x: {
        beginAtZero: true,
        grid: {
            display: false,
        },
    },
    y: {
        beginAtZero: true,
        display: false,
    },
};

const chartConfigs = {
    chart_201: {
        type: 'bar',
        data: chartDataSet.chart_201,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_202: {
        type: 'bar',
        data: chartDataSet.chart_202,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let value = context.raw; // 현재 데이터 값
                            return `${value.toFixed(2)}`; // 소수점 1자리로 표시
                        },
                    },
                },
                datalabels: {
                    formatter: function (value) {
                        return value.toFixed(2);
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_203: {
        type: 'bar',
        data: chartDataSet.chart_203,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                bar: {
                    width: 2,
                },
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Pretendard',
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
            },
            maxBarThickness: 40,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    grid: {
                        color: 'transparent',
                    },
                    ticks: {
                        display: false,
                    },
                    beginAtZero: true,
                },
            },
        },
    },
    chart_204: {
        type: 'bar',
        data: chartDataSet.chart_204,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_205: {
        type: 'bar',
        data: chartDataSet.chart_205,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_206: {
        type: 'bar',
        data: chartDataSet.chart_206,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_207: {
        type: 'bar',
        data: chartDataSet.chart_207,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_208: {
        type: 'bar',
        data: chartDataSet.chart_208,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 30,
            scales: scalesFalse,
        },
    },
    chart_209: {
        type: 'bar',
        data: chartDataSet.chart_209,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 50,
            scales: scalesFalse,
        },
    },
    chart_210: {
        type: 'bar',
        data: chartDataSet.chart_210,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_211: {
        type: 'bar',
        data: chartDataSet.chart_211,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_212: {
        type: 'bar',
        data: chartDataSet.chart_212,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_213: {
        type: 'bar',
        data: chartDataSet.chart_213,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_214: {
        type: 'bar',
        data: chartDataSet.chart_214,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_215: {
        type: 'bar',
        data: chartDataSet.chart_215,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_216: {
        type: 'bar',
        data: chartDataSet.chart_216,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                bar: {
                    width: 2,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
};
