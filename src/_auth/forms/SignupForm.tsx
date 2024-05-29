
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"



const SignupForm = () => {
  

    return (
      <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-between bg-gray-950 px-4 md:px-6">
      <img 
        src="assets/images/logo.svg"
        alt = "logo"
        
        />
        <a hrefLang="#" className="flex items-center">
          <h1 className="h-6 w-6 text-gray-50" />
          <span className="sr-only">Social</span>
        </a>
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium text-gray-50">Already a user ?</div>
          <a
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300"
            href="http://localhost:5173/sign-in"

          >
            Sign In
          </a>
        </div>
      </header>
      <main className="pt-16" />
     <Card className="mx-auto max-w-md shadow-lg shadow-gray-200/50 dark:shadow-gray-800/50 rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl align-"><h1>Sign Up</h1></CardTitle>
        <CardDescription>Create your account to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter a password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Create Account
          </Button>
          <div className="flex items-center justify-center space-x-2">
            <Button className="w-full" variant="outline">
              <ChromeIcon className="h-5 w-5 mr-2" />
              Sign up with Google
            </Button>
            <Button className="w-full" variant="outline">
              <GithubIcon className="h-5 w-5 mr-2" />
              Sign up with GitHub
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </>
    )
}
function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default SignupForm
