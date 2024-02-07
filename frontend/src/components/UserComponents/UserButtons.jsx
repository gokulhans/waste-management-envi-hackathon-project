import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "@/utils/axios";

const UserButtons = () => {
  const navigate = useNavigate();
  const [filled, setFilled] = useState(
    localStorage.getItem("isFilled") || false
  );
  const handleReportFilledBin = async () => {
    try {
      if (!localStorage.getItem("isSubscribed")) {
        navigate("/plans");
      }
      // Replace 'your-backend-url' with the actual URL of your backend endpoint
      const response = await axiosClient.put(
        `bin/report/${localStorage.getItem("id")}`,
        {
          isFilled: true,
        }
      );

      if (response) {
        console.log("Successfully reported filled bin");
        localStorage.setItem("isFilled", true);
        setFilled(true);

        // Optionally, you can perform other actins after reporting filled bin
      } else {
        console.error("Failed to report filled bin");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-full">
          <Button
            className="bg-red-500 text-white py-12 text-xl font-bold rounded-xl"
            variant="outline"
            onClick={handleReportFilledBin}
            disabled={filled}
          >
            <BinaryIcon className="mr-2 text-xl" />
            {!filled ? "Report Filled Bin" : "Bin Reported"}
          </Button>
          <Button
            className="bg-blue-500 text-white py-12 text-xl font-bold rounded-xl"
            variant="outline"
          >
            <BookIcon className="mr-2 h-4 w-4" />
            <Link to="book-wm-service">Book Waste Management Service</Link>
          </Button>
          <Button
            className="bg-green-500 text-white py-12 text-xl font-bold rounded-xl"
            variant="outline"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <Link to="/events">Events</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserButtons;

function BinaryIcon(props) {
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
      <rect x="14" y="14" width="4" height="6" rx="2" />
      <rect x="6" y="4" width="4" height="6" rx="2" />
      <path d="M6 20h4" />
      <path d="M14 10h4" />
      <path d="M6 14h2v6" />
      <path d="M14 4h2v6" />
    </svg>
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
