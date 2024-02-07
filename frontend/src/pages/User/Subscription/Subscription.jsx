import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axiosClient from "@/utils/axios";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  const districts = [
    "Thiruvananthapuram",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Idukki",
    "Ernakulam",
    "Thrissur",
    "Palakkad",
    "Malappuram",
    "Kozhikode",
    "Wayanad",
    "Kannur",
    "Kasargod",
  ];

  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
    district: "",
    phone: "",
    isSubscribed: true,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let response = axiosClient.post(
      `user/subscribe/${localStorage.getItem("id")}`,
      formData
    );
    localStorage.setItem("isSubscribed", true);
    if (response) {
      navigate("/");
    }
    console.log(formData);
  };

  return (
    <form className="mx-auto max-w-md space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Waste Management Subscription</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to subscribe
        </p>
      </div>
      <div className="space-y-4">
        {/* ... other form fields ... */}

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="123 Main St"
            required
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pincode">Pincode</Label>
          <Input
            id="pincode"
            placeholder="123456"
            required
            onChange={handleChange}
          />
        </div>
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
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="1234567890"
            required
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="plan">Plan</Label>
          <Select>
            <SelectTrigger id="plan">
              <SelectValue placeholder="Select your plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" type="submit">
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default Subscription;
