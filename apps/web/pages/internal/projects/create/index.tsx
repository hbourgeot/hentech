import { Nav } from "@/components/Nav";
import { ProjectForm } from "@/components/Project";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Form } from "react-hook-form";
import { z } from "zod";



export default function Create() {
  return (
    <>
      <Nav />
      <section className="h-screenav">
        <h2 className="text-3xl font-semibold text-center py-3">Create a project</h2>
        <ProjectForm/>
      </section>
    </>
  )

}