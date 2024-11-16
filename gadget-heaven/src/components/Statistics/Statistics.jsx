import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = "Gadget Heaven | Statistics";
  }, []);

  return (
    <div>
      <div className="bg-primary py-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center">
            Statistics
          </h2>
          <p className="text-white text-center py-5 mx-5">
            Welcome to Statistics. Here you can see our product chart. You can
            explore these. You can learn a lot from these.Welcome to Statistics.
            Here <br /> you can see our product chart. You can explore these. You can
            learn a lot from these.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold pt-10 pl-10">Statistics</h2>
      <div className="mt-20 lg:mx-20 mx-3">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis dataKey="price" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <Bar dataKey="" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
