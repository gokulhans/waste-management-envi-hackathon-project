import LandingPage from "@/components/LandingPages/LandingPage";
import LeaderBoardCard from "@/components/LeaderBoardCard/LeaderBoardCard";
import UserButtons from "@/components/UserComponents/UserButtons";
import UserStats from "@/components/UserStats/UserStats";
import React from "react";

const UserHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <UserStats />
        <UserButtons/>
        <LeaderBoardCard />
        {/* <LandingPage/> */}
      </main>
    </div>
  );
};

export default UserHome;
