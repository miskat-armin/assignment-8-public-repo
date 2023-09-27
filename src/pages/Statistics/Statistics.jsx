import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

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
                value: ((donated / categories.length) * 100.0),
                color: '#00C49F'
            },
            {
                name: "Total Donation",
                value: (((categories.length - donated) / categories.length) * 100.0),
                color: '#FF444A'
            },
        ]);
    }, []);

    console.log(data)

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text style={{color: '#FFF', fontWeight:'bold'}} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };
    return (
        <div className="h-[400px] w-full flex justify-center items-center">
            {
                data.length > 0 &&
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width='60%' height='60%'>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius='90%'
                            fill="#8884d8"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Legend iconType="plainline" align="center"  iconSize={70}  marginTop='20px' verticalAlign="bottom" width={'100%'} />
                    </PieChart>
                </ResponsiveContainer>
            }
        </div>
    );
};

export default Statistics;