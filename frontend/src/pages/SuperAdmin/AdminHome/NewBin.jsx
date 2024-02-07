import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axiosClient from "@/utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewBin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    district: "",
    location: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.post("bin", formData);

      if (response) {
        console.log("Bin created successfully");
        toast.success("Bin Created Succesfully");
        navigate("/");
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.error("Failed to create bin");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Waste Management System
          </h1>
          <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Request a new waste basket placement in your area.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="district">District</Label>
            <Input
              id="district"
              placeholder="Enter your district"
              value={formData.district}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              id="pincode"
              placeholder="Enter your pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewBin;
