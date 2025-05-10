import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AirQualityChart = ({data, param="pm25"}) => {
    return ( 
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="timestamp"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line type="monotone" dataKey={param} stroke="#388e3c" strokeWidth={2}></Line>
            </LineChart>
        </ResponsiveContainer>
     );
}
 
export default AirQualityChart;