import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axiosClient from "@/utils/axios";
import toast from "react-hot-toast";

const SignIn = ({ setIsUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Please fill email"),
    password: yup.string().required("Please fill the password"),
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
      return axiosClient.post("/user/login", data);
    },
    onSuccess: (data) => {
      toast.success("SignIn Success!");
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

  const onSubmit = async (data) => {
    setIsLoading(true);
    mutateAsync(data);
  };

  return (
    <>
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="john@example.com"
                required
                type="email"
                {...register("email")}
              />
              <p className="text-xs text-red-600 dark:text-red-500 mt-2">
                {errors.email?.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="********"
                required
                type="password"
                {...register("password")}
              />
              <p className="text-xs text-red-600 dark:text-red-500 mt-2">
                {errors.password?.message}
              </p>
            </div>
            <Button className="w-full" type="submit" disabled={isLoading}>
              Sign In
            </Button>
            {showError && (
              <p className="text-xs text-red-600 dark:text-red-500 mt-2">
                {showError}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center mt-5">
            <Link
              className="text-sm underline text-gray-500 dark:text-gray-400"
              to={"/forgot-password"}
            >
              Forgot Password?
            </Link>
            <Link
              className="text-sm underline text-gray-500 dark:text-gray-400"
              to={"/signup"}
            >
              New User? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
