import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import axiosClient from "@/utils/axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = ({ setIsUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
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
    <>
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="John"
                {...register("firstname")}
                required
              />
              <p className="text-xs text-red-600 dark:text-red-500 mt-2">
                {errors.firstname?.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Doe"
                {...register("lastname")}
                required
              />
              <p className="text-xs text-red-600 dark:text-red-500 mt-2">
                {errors.lastname?.message}
              </p>
            </div>
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              placeholder="********"
              required
              type="password"
              {...register("confirmPassword")}
            />
            <p className="text-xs text-red-600 dark:text-red-500 mt-2">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            Sign Up
          </Button>
          {showError && (
            <p className="text-xs text-red-600 dark:text-red-500 mt-2">
              {showError}
            </p>
          )}
        </form>
        <div className="flex justify-center items-center">
          <Link
            className="text-sm underline text-gray-500 dark:text-gray-400"
            to={"/signin"}
          >
            Already a User? Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
