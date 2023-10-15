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
          <form className="max-w-[70vw] mx-auto flex flex-wrap w-full place-content-center">
            <span className="w-1/3 p-4">
              <label htmlFor="id">Project ID</label>
              <Input name="id" />
            </span>
            <span className="w-1/3 p-4">
              <label htmlFor="name">Project Name</label>
              <Input name="name" />
            </span>
            <span className="w-1/3 p-4">
              <label htmlFor="comercialDesignation">
                Commercial Designation
              </label>
              <Input name="comercialDesignation" />
            </span>
            <span className="w-1/3 p-4">
              <label htmlFor="status">Project Status</label>
              <SelectInput
                data={stateOptions}
                label="Select a status"
                placeholder=""
                className="!w-full"
              />
            </span>
            <span className="w-1/3 p-4 flex flex-col">
              <label htmlFor="leader">Leader</label>
              <Combobox
                data={employees}
                label="Search a leader"
                placeholder="Leader..."
                className="w-full"
              />
            </span>
            <span className="w-1/3 p-4">
              <label htmlFor="type">Project Type</label>
              <Input name="type" />
            </span>
            <div className='my-4 flex flex-col md:flex-row gap-4'>
              <Button variant={'secondary'}>Clear filters</Button>
              <Button variant={'default'} >Search</Button>
            </div>
          </form>
          <div className="mx-auto w-[80vw] my-4">
          <DataTable columns={columns} data={projects}/>
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