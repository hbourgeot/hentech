import { Nav } from "@/components/Nav";
import { ProjectForm } from "@/components/Project";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { client } from "@/lib/axios";
import { Employee } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetServerSideProps } from "next";
import { useForm, Form } from "react-hook-form";
import { z } from "zod";

export default function Create({ employees }: { employees: any }) {
  console.log(employees)
  return (
    <>
      <Nav />
      <section className="h-screenav">
        <h2 className="text-3xl font-semibold text-center py-3">
          Create a project
        </h2>
        <ProjectForm
          className="w-full p-3 md:w-1/3 mx-auto"
          employees={employees}
        />
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
      value: item.id.toString(),
    }));
    return {
      props: {
        employees: employees,
      },
    };
  } catch (e) {
    return {
      props: {
        employees: [],
      },
    };
  }
};
