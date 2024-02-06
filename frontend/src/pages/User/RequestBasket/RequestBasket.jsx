import React from 'react'
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const RequestBasket = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Waste Management System</h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Request a new waste basket placement in your area.
              </p>
            </div>
            <div className="mt-12 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Select>
                  <SelectTrigger id="district">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="district1">District 1</SelectItem>
                    <SelectItem value="district2">District 2</SelectItem>
                    <SelectItem value="district3">District 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter your location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" placeholder="Enter your pincode" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Attach Image</Label>
                <Input id="image" type="file" />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </section>
      )
    }
    

export default RequestBasket
