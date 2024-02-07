import React, { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axiosClient from "@/utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookWMS = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    district: "",
    address: "",
    pincode: "",
    occasion: "",
    guests: "",
    days: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'your-backend-url' with the actual URL of your backend endpoint
      const response = await axiosClient.post(
        `occasion/book-service/${localStorage.getItem("id")}`,
        formData
      );

      if (response) {
        console.log("Request submitted successfully");
        toast.success("Occasion Booked Succesfully");
        navigate("/")
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.error("Failed to submit request");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Request Waste Management Assistance
              </h1>
              <p className="mx-auto pt-5 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Please fill out the form below to request waste management
                assistance for your special occasion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-32 xl:py-12">
        <div className="container px-4 md:px-6">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                placeholder="Enter your district"
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter your address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                id="pincode"
                placeholder="Enter your pincode"
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="occasion">Occasion Type</Label>
              <Input
                id="occasion"
                placeholder="Enter occasion type"
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Input
                id="guests"
                placeholder="Enter number of guests"
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="days">Number of Days</Label>
              <Input
                id="days"
                placeholder="Enter number of days"
                onChange={handleChange}
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Submit Request
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookWMS;
