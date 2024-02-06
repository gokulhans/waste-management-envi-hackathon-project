import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const BookWMS = () => {
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
                Please fill out the form below to request waste management assistance for your special occasion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-32 xl:py-12">
        <div className="container px-4 md:px-6">
          <form className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Input id="district" placeholder="Enter your district" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter your address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input id="pincode" placeholder="Enter your pincode" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="occasion">Occasion Type</Label>
              <Input id="occasion" placeholder="Enter occasion type" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Input id="guests" placeholder="Enter number of guests" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="days">Number of Days</Label>
              <Input id="days" placeholder="Enter number of days" required />
            </div>
            <Button className="w-full" type="submit">
              Submit Request
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

export default BookWMS
