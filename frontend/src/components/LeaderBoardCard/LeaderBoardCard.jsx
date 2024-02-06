import React from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const LeaderBoardCard = () => {
  return (
    <section className="w-full py-12 border shadow-md rounded">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="px-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recycling Leaderboard
            </h1>
            <p className="py-5 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Check out the top performers in our recycling competition. Every
              bin collected makes a difference!
            </p>
          </div>
          <div className="w-full max-w-3xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Bins Collected</TableHead>
                  <TableHead>Total Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>@GreenGuru</TableCell>
                  <TableCell>150</TableCell>
                  <TableCell>3000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>@EcoWarrior</TableCell>
                  <TableCell>145</TableCell>
                  <TableCell>2900</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>@RecycleRanger</TableCell>
                  <TableCell>140</TableCell>
                  <TableCell>2800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>@WasteWizard</TableCell>
                  <TableCell>135</TableCell>
                  <TableCell>2700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>@TrashTitan</TableCell>
                  <TableCell>130</TableCell>
                  <TableCell>2600</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex justify-center mt-6">
              <Button className="px-8 py-2 text-lg font-semibold text-white bg-green-500 hover:bg-green-600">
                Show All Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardCard;
