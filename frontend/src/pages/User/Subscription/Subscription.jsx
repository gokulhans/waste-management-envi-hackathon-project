import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const Subscription = () => {
    return (
        <div className="mx-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Waste Management Subscription</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to subscribe</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input id="pincode" placeholder="123456" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Select>
                <SelectTrigger id="district">
                  <SelectValue placeholder="Select your district" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="district1">District 1</SelectItem>
                  <SelectItem value="district2">District 2</SelectItem>
                  <SelectItem value="district3">District 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="1234567890" required />
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
        </div>
      )
    }
    
    

export default Subscription
