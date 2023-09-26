import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Legend, Line, Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
    const categories = useLoaderData();
    const [data, setData] = useState([]);
    console.log(categories)
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('donation'));
        const donated = storedData === null ? 0 : storedData.length;


        setData([
            {
                name: "Your Donation",
                value: (donated / categories.length).toFixed(2) * 100,
            },
            {
                name: "Total Donation",
                value: ((categories.length - donated) / categories.length).toFixed(2) * 100,
            },
        ]);
    }, []);

    return (
        <div>
            {
                data.length > 0 &&
                <PieChart width={730} height={250}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={50}
                        fill="#8884d8"
                    />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line
                        name="pv of pages"
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                    />
                    <Line
                        name="uv of pages"
                        type="monotone"
                        dataKey="uv"
                        stroke="#82ca9d"
                    />
                </PieChart>
            }
        </div>
    );
};

export default Statistics;