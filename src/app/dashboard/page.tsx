import DetailsDialog from "@/components/DetailsDialog";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";
// re-deployment commit
type Props = {};

export const metadata = {
  title: "Dashboard",
  description: "Your own quiz AI bot!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-8 mx-auto max-w-7xl" 
    style={{ backgroundColor: "#fff8f3" }}
    >
      <div className="flex-column items-space items-center">
        <h2 className="mr-2 mb-4 text-3xl font-bold tracking-tight">Hi {session.user.name?.split(' ')[0]}! Accelerate your learning journey with Quiz-It</h2>
        <DetailsDialog />
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dasboard;
