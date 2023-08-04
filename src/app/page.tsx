import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

type Props = {};

export default async function Home({}: Props) {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 items-center">
      <Card className="w-[400px] flex-row items-center justify-between" 
      // style={{ backgroundColor: "#fff8f3" }}
      >
        <CardHeader>
          <CardTitle >Hello stranger! Welcome to Quiz-It 🔥!</CardTitle>
          <CardDescription>
            Quiz-It is a platform for creating quizzes using AI!  Get started
            by logging in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
}
