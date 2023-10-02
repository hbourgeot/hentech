import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useRouter } from "next/router"
import { NavigationMenuViewport } from "@radix-ui/react-navigation-menu"
import Link from "next/link"

let projectLinks: { title: string; href: string; description: string }[] =
  [
    { title: 'Projects Resume', href: '/projects', description: 'Resume of the projects' },
    { title: 'Create project', href: '/projects/create', description: 'Create a new project' },
    { title: 'Search projects', href: '/projects/search', description: 'Search one/many projects' }
  ]

let employeeLinks: { title: string; href: string; description: string }[] = [
  { title: 'Employees Resume', href: '/employees', description: 'Resume of the employees' },
  { title: 'Register Employee', href: '/employees/register', description: 'Create a new employee' },
  { title: 'Search Employees', href: '/employees/search', description: 'Search one/many employees' }
]

let taskLinks: { title: string; href: string; description: string }[] = [
  { title: 'Tasks Resume', href: '/tasks', description: 'Resume of the tasks' },
  { title: 'Add Task', href: '/tasks/add', description: 'Add a new task' },
  { title: 'Search Tasks', href: '/tasks/search', description: 'Search one/many tasks' }
]

let userLinks: { title: string; href: string; description: string; }[] = [
  { title: 'Projects resume', href: '/user_info/projects', description: 'Resume of the projects' },
  { title: 'Search projects', href: '/user_info/projects/search', description: 'Search one/many projects' },
  { title: 'Tasks resume', href: '/user_info/tasks', description: 'Resume of the tasks' },
  { title: 'Search tasks', href: '/user_info/tasks/search', description: 'Search one/many tasks' }
]

export function Nav() {
  const [colorChange, setColorChange] = React.useState(false);
  const router = useRouter()
  const route = router.route

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) { setColorChange(true); } else { setColorChange(false); }
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeNavbarColor);
  }

  if (route.includes('internal')) {
    return (
      <section className={colorChange ? 'bg-primary w-full flex justify-between items-center p-3 sticky top-0' : 'bg-transparent w-full flex justify-between items-center p-3 sticky top-0'} >
        <h1 className="text-2xl font-bold"><a href="/" className="text-primary">HenTech</a></h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                  {projectLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tasks</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                  {taskLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Employees</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                  {employeeLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>User</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                  {userLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    )
  } else {
    return (
      <section className={colorChange ? 'bg-secondary w-full flex justify-between items-center p-3 sticky top-0' : 'bg-transparent w-full flex justify-between items-center px-3 sticky top-0'}>
        <h1 className="text-2xl font-bold"><a href="/" className="text-primary">HenTech</a></h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/login" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Login</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </section>
    )
  }
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
