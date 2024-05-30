/**
 * v0 by Vercel.
 * @see https://v0.dev/t/d0yrSZ9SlmS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"



export default function Component() {
  return (
    <>
    <div className="">
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
          <div className="text-sm font-medium text-gray-50">Not a user ?</div>
          <a
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300"
            href="http://localhost:5173"

          >
            Sign Up
          </a>
        </div>
      </header>
      <br></br><br></br>
    <Card className="mx-auto max-w-sm  shadow-2xl shadow-[#6366F1]/50">
      <CardHeader>
        <CardTitle className="text-5xl text-center">Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" required type="password" />
        </div>
        <button className="  rounded-lg bg-gradient-to-r from-[#6366F1] to-[#EC4899]  w-full py-3 text-center font-medium text-white shadow-lg shadow-[#6366F1]/50 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 dark:shadow-[#EC4899]/50">
          Sign In
        </button>
        <Separator className="my-4" />
        <div className="space-y-2">
          <Button className="w-full" variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            Sign in with GitHub
          </Button>
          <Button className="w-full" variant="outline">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <a className="text-sm underline" href="http://localhost:5173/forgot-password">
          Forgot password?
        </a>
      </CardFooter>
      
    </Card>
    </div>
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