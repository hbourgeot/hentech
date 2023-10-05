import { Nav } from "@/components/Nav";
import { client } from "@/lib/axios";
import { Project } from "@/lib/types";
import { GetServerSideProps } from 'next';
import { NextResponse } from "next/server";

export default function ProjectsResume() {
  return (
    <main className="">
      <Nav/>
    </main>
    
  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data, status }: { data: Project[], status: number } = await client.get('/api/projects');
  if (status > 400) {
    ctx.res.statusCode = 400;
  }
  return {
    props:{
      projects: data
    }
  }
}
