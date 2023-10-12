import { Bars } from "@/components/Bars";
import { Nav } from "@/components/Nav";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { client } from "@/lib/axios";
import { Project } from "@/lib/types";
import { PieChart } from "lucide-react";
import { GetServerSideProps } from "next";

interface Props {
  projects: Project[];
}

export default function ProjectsResume(props: Props) {
  const projectCount = [
    {
      name: "Active",
      value:
        props.projects.filter((project) => project.status === "Active")
          ?.length ?? 0,
    },
    {
      name: "Inactive",
      value:
        props.projects.filter((project) => project.status === "Inactive")
          ?.length ?? 0,
    },
    {
      name: "Abandoned",
      value:
        props.projects.filter((project) => project.status === "Abandoned")
          ?.length ?? 0,
    },
    {
      name: "Finished",
      value:
        props.projects.filter((project) => project.status === "Finished")
          ?.length ?? 0,
    },
    {
      name: "Pending",
      value:
        props.projects.filter((project) => project.status === "Pending")
          ?.length ?? 0,
    },
  ];

  const projectsCard = [
    {
      name: "Active",
      value:
        props.projects.filter((project) => project.status === "Active")
          ?.length ?? 0,
      projects: props.projects
        .filter((project) => project.status === "Active")
        .map((project) => project.comercialDesignation)
        .slice(0, 2),
    },
    {
      name: "Inactive",
      value:
        props.projects.filter((project) => project.status === "Inactive")
          ?.length ?? 0,
      projects: props.projects
        .filter((project) => project.status === "Inactive")
        .map((project) => project.comercialDesignation)
        .slice(0, 2),
    },
    {
      name: "Abandoned",
      value:
        props.projects.filter((project) => project.status === "Abandoned")
          ?.length ?? 0,
      projects: props.projects
        .filter((project) => project.status === "Abandoned")
        .map((project) => project.comercialDesignation)
        .slice(0, 2),
    },
    {
      name: "Finished",
      value:
        props.projects.filter((project) => project.status === "Finished")
          ?.length ?? 0,
      projects: props.projects
        .filter((project) => project.status === "Finished")
        .map((project) => project.comercialDesignation)
        .slice(0, 2),
    },
    {
      name: "Pending",
      value:
        props.projects.filter((project) => project.status === "Pending")
          ?.length ?? 0,
      projects: props.projects
        .filter((project) => project.status === "Pending")
        .map((project) => project.comercialDesignation)
        .slice(0, 2),
    },
  ];

  return (
    <main className="w-screen">
      <Nav />
      <div className="w-[99%] h-screenav grid place-content-center">
        <h2 className="text-4xl font-bold text-center my-5">Projects resume</h2>
        <section className="flex justify-center">
          <Bars
            inner={projectCount}
            innerRadius={80}
            fillInner="#004c97"
            className="max-w-[600px] max-h-[600px] w-[600px] block mx-auto"
          />
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 w-1/2">
            {projectsCard.map((co, key) => (
              <Card key={key} className="w-[45%]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {co.name} projects
                  </CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{co.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {co.projects.join(", ")}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Card className="w-[45%]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total projects
                </CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {props.projects.length}
                </div>
                <p className="text-xs text-muted-foreground">
                  {props.projects
                    .slice(0, 3)
                    .map((pro) => pro.comercialDesignation)
                    .join(", ")}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data, status }: { data: Project[]; status: number } =
    await client.get("/api/projects");
  if (status > 400) {
    ctx.res.statusCode = 400;
  }
  return {
    props: {
      projects: data,
    },
  };
};
