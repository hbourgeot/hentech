import { UserAuthForm } from "@/components/Login";
import { Nav } from "@/components/Nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import login from "@/public/login.jpg";

export default function Login() {
  return (
    <main className="text-5xl h-screen">
      <Nav />
      <div className="md:hidden">
        <Image
          src={login}
          width={1280}
          height={843}
          alt="Authentication"
          className="block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="login-bg relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900/60" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6">
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            HenTech Corp.
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The work environment is quite pleasant and warm, and
                carrying out the assigned projects has helped me a lot to grow
                professionally and personally.&rdquo;
              </p>
              <footer className="text-sm">John Doe</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign in
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to sign in to our internal system.
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </main>
  );
}
