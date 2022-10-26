import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';



const chartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
    item1: [50, 110, 130, 100, 70, 110, 160, 210, 180],
    item2: [140, 150, 170, 160, 190, 160, 180, 230, 250]
}


const data = {
    labels: ['', ...chartData.labels, ''],
    datasets: [
        {
            label: "item 1",
            data: [undefined, ...chartData.item1, undefined],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: .3,

        },
        {
            label: "item 2",
            data: [undefined, ...chartData.item2, undefined],
            fill: true,
            backgroundColor: 'rgba(117, 75, 117,.2)',
            borderColor: "#742774",
            lineTension: .3
        }
    ]
};


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const options = {
    scales: {
        y: {
            max: 300,
            min: 0,
            ticks: {
                autoSkip: false,

            },
            grid: {
                display: true,
                drawBorder: false,
                borderDash: [5, 5],
                tickColor: 'transparent',
                offset: false
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    size: 8
                }
            }
        }
    },
    elements: {
        point: { radius: 0 }
    },
}

const Chart = () => {

    return (
        <div className="md:px-[35px] w-full py-[20px] px-[10px] md:py-[60px] md:w-[65%] ">{/*El width de este div iria en su componente padre*/}
            <div className="w-full flex justify-between items-center">
                <span className="font-semibold md:text-[1.5rem]">Performance</span>
                <div className="flex justify-center items-center">
                    <select className="px-[10px] py-[5px] rounded-[10px] md:w-[200px] bg-white border-[2px] text-[#666666] font-semibold border-[#666666]"> 
                        <option value="none">Filtrar por</option>
                    </select>

                </div>
            </div>
            <div>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default Chart