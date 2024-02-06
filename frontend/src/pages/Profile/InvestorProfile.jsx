import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import axiosClient from "@/utils/axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const InvestorProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    fullname: yup.string().required("Full Name is required"),
    linkedInUrl: yup.string().url("Enter a valid LinkedIn URL").nullable(),
    mobileNumber: yup
      .string()
      .matches(/^\d{10}$/, "Enter a valid 10-digit mobile number")
      .nullable(),
    description: yup.string().nullable(),
    country: yup.string().required("Country is required"),
    gender: yup.string().required("Gender is required"),
    location: yup.string().nullable(),
    website: yup.string().url("Enter a valid website URL").nullable(),
    alternativeMobileNumber: yup
      .string()
      .matches(/^\d{10}$/, "Enter a valid 10-digit mobile number")
      .nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync } = useMutation({
    mutationFn: (data) => {
      return axiosClient.post("/user/register", data);
    },
    onSuccess: (data) => {
      toast.success("SignUp Success!");
      const { username, id, token, email } = data.data;
      localStorage.setItem("isUser", true);
      localStorage.setItem("id", id);
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      setIsUser(true);
      setIsLoading(false);
      navigate("/");
    },
    onError: (error) => {
      setShowError(error.response.data.message);
      setIsLoading(false);
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    mutateAsync(data);
  };

  return (
    <div className="flex w-full max-w-xl my-5 mb-12 flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form className="w-full max-w-xl mx-auto space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-md p-8">
        {/* Existing fields */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Investor Profile</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to complete Investor Profile
          </p>
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="picture">Profile Picture</Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="picture"
            type="file"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        {/* Additional fields */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="fullname"
            placeholder="Enter your full name"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="linkedInUrl">LinkedIn URL</Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="linkedInUrl"
            placeholder="Enter your LinkedIn URL"
          />
        </div>
        {/* Add more fields based on your JSON data */}
        {/* For example: */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="mobileNumber"
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="bg-gray-100 dark:bg-gray-700"
            id="description"
            placeholder="Enter description"
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="country">Country</Label>
          <Select className="bg-gray-100 dark:bg-gray-700" id="country">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="gender">Gender</Label>
          <Select className="bg-gray-100 dark:bg-gray-700" id="gender">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="location">Location</Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="location"
            placeholder="Enter your location"
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="website">Website Link</Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="website"
            type="url"
            placeholder="Enter your website link"
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="alternativeMobileNumber">
            Alternative Mobile Number
          </Label>
          <Input
            className="bg-gray-100 dark:bg-gray-700"
            id="alternativeMobileNumber"
            placeholder="Enter alternative mobile number"
          />
        </div>

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default InvestorProfile;
