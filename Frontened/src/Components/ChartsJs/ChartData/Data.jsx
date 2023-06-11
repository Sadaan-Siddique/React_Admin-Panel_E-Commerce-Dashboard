const ChartJsData = [
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
    },
    {
        product: 'Shirt',
        sale_p: `${320800}$`,
        cost_p: 61,
        stock: 45,
        // date: new Date().toLocaleDateString(),
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
