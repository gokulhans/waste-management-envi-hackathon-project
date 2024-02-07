import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const SubscribePage = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800">
        <div className="container w-full space-y-12 px-4 md:px-6">
          <div className="flex w-full flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm text-white">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-gray-200">
                Choose Your Plan
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer flexible pricing options to suit your waste management
                needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            <div className="grid gap-1 p-4 border-2 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                Monthly Plan
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ideal for short-term projects or one-off needs.
              </p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-4">
                $49.99/month
              </p>
            </div>
            <div className="grid gap-1 p-4 border-2 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                Yearly Plan
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Perfect for ongoing waste management needs.
              </p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-4">
                $499.99/year
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button className="px-8 py-2 text-lg font-semibold text-white bg-green-500 hover:bg-green-600">
              <Link to="/subscribe">Subscribe</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscribePage;
