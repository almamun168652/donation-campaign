import { PieChart, Pie, Cell } from "recharts";

const PaiChart = () => {

    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
    ];

    const COLORS = ["#0088FE", "#00C49F"];

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default PaiChart;