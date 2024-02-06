import React from 'react'
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SingleBasket = () => {
    return (
        <div className="container mx-auto px-4 py-6">
          <Card className="max-w-md p-4 mx-auto">
            <CardHeader>
              <CardTitle>Basket Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label className="text-base" htmlFor="basket-number">
                    Basket Number
                  </Label>
                  <Input disabled id="basket-number" value="123456" />
                </div>
                <div className="grid gap-1">
                  <Label className="text-base" htmlFor="location">
                    Location
                  </Label>
                  <Input disabled id="location" value="Street 123, City, Country" />
                </div>
                <div className="grid gap-1">
                  <Label className="text-base" htmlFor="date-picking">
                    Date of Picking
                  </Label>
                  <Input disabled id="date-picking" value="2024-02-06" />
                </div>
                <div className="grid gap-1">
                  <Label className="text-base" htmlFor="admin-number">
                    Regional Admin Number
                  </Label>
                  <Input disabled id="admin-number" value="987654" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
            <button className='bottom-auto bg-green-600 font-bold mt-4 p-4 rounded-lg' style={{ "color": "white" }}>Request Pickup</button>

            </CardFooter>
          </Card>
        </div>
      )
    }
    
    

export default SingleBasket
