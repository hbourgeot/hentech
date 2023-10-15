import { Combobox } from '@/components/Combobox';
import { Nav } from '@/components/Nav'
import { SelectInput } from '@/components/Select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { client } from '@/lib/axios';
import { Employee, Project } from '@/lib/types';
import { NextPage, GetServerSideProps } from 'next'
import * as z from "zod"
import { DataTable } from './data-table';
import { columns } from './columns';

interface Props {
  employees: { label: string, value: number }[],
  projects: Project[]
}

const stateOptions = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Pending", value: "Pending" },
  { label: "Finished", value: "Finished" },
  { label: "Abandoned", value: "Abandoned" },
];

function Index({employees, projects}: Props) {
  return (
    <>
      <Nav />
      <section className="h-screenav">
        <h2 className="text-3xl font-semibold text-center py-3">
          Search projects
        </h2>
        <div className="mx-auto pb-16 pt-4 max-w-[85vw]">
          
          <div className="mx-auto w-[80vw] my-4">
            <DataTable columns={columns} data={projects} employees={employees} stateOptions={stateOptions} />
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { data }: { data: Employee[] } = await client.get("/api/employees");
    console.log(data);

    const employees = data.map((item) => ({
      label: `${item.name} ${item.lastName}`,
      value: item.id,
    }));

    const { data: projects }: { data: Project[] } = await client.get("/api/projects")
    return {
      props: {
        employees: employees,
        projects: projects
      },
    };
  } catch (e) {
    return {
      props: {
        employees: [],
      },
    };
  }
}

export default Index