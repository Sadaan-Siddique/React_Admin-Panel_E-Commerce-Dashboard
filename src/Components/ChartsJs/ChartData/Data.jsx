const ChartJsData = [
    {
        id: 1,
        name: 'Swiss',
        orders: 60,
        profit: -20,
        saling:10
    },
    {
        id: 2,
        name: 'Gucci',
        orders: 50,
        profit: 10,
        saling:30
    },
    {
        id: 1,
        name: 'Nikki',
        orders: 70,
        profit: 50,
        saling:50
    },
    {
        id: 4,
        name: 'Gul Ahmed',
        orders: 40,
        profit: -10,
        saling:10
    },
]

const currentDate = new Date().toLocaleDateString();

const updatedChartJsData = ChartJsData.map(obj => {
    return {
        ...obj,
        date: currentDate,
    };
});

export default updatedChartJsData;
