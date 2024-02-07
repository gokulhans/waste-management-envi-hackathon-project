import React, { useState, useEffect } from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axiosClient from "@/utils/axios"; // Assuming you have an axiosClient for API requests

const RegionalOccasions = () => {
  const [bins, setBins] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axiosClient
      .get("/occasion/regional/:calicut")
      .then((response) => {
        setBins(response.data.data);
        //   console.log(response);; // Assuming the response.data contains an array of bin objects
      })
      .catch((error) => {
        console.error("Error fetching bins:", error);
      });
  }, []);

  return (
    <>
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="lg:hidden" to="#">
          {/* Assuming you have a suitable icon for the home link */}
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex-1">
          <h1 className="font-semibold text-lg">Occasions</h1>
        </div>
        {/* <Button size="sm"><Link to="/new-bin">New Bin</Link></Button> */}
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SI</TableHead>
                <TableHead className="min-w-[150px]">District</TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
                <TableHead className="hidden md:table-cell">Pin Code</TableHead>
                <TableHead className="text-right">Occasion</TableHead>
                <TableHead className="text-right">Guest No</TableHead>
                <TableHead className="text-right">Days</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bins.map((bin, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{bin.district}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {bin.address}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {bin.pincode}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {bin.occasion}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {bin.guests}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {bin.days}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
};

export default RegionalOccasions;

function FileEditIcon(props) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
