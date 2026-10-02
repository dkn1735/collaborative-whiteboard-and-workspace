import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
      <h1 className="text-2xl font-bold">Welcome to your app</h1>
      <Show when="signed-out">
        <div className="flex gap-4">
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      </Show>
      <Show when="signed-in">
        <div className="flex items-center gap-4">
          <span>You are signed in!</span>
        </div>
      </Show>
    </div>
  );
}
