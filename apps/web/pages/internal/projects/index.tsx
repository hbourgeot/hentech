import { Bars } from "@/components/Bars";
import { Nav } from "@/components/Nav";
import { client } from "@/lib/axios";
import { Project } from "@/lib/types";
import { GetServerSideProps } from 'next';
import { NextResponse } from "next/server";
import { Pie, PieChart, ResponsiveContainer } from "recharts";


const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

export default function ProjectsResume() {
  return (
    <main className="">
      <Nav />
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          </PieChart>
        </ResponsiveContainer
        >

      </div>
    </main>

  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data, status }: { data: Project[], status: number } = await client.get('/api/projects');
  if (status > 400) {
    ctx.res.statusCode = 400;
  }
  return {
    props: {
      projects: data
    }
  }
}
