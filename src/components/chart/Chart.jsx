import "./charts.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({ title, data, dataKey, grid }) {
    

        

        return (
            <div className="Chart">
                <h3 className="chartTitle">{title }</h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {grid && <CartesianGrid strokeDasharray="3 3" />}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  
                    </LineChart>
              
                </ResponsiveContainer>
            </div>
        )
    }

