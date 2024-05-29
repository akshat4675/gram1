/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k4EwL9xUYyW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function Component() {
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
        
      </header>
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>Enter your email to reset your password.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <Button className="w-full" type="submit">
          Reset Password
        </Button>
      </CardContent>
      <CardFooter className="text-center">
        <a className="text-sm underline" href="http://localhost:5173/sign-up">
          Back to Sign In
        </a>
      </CardFooter>
    </Card>
  </>
  )
}