import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


const LandingPage = () => {
    return (
        <div
          className="flex  h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://a7b8m3r3.rocketcdn.me/wp-content/uploads/2020/06/How-to-Get-Investor-Funding.png')",
          }}
        >
          <div className="flex w-1/2 flex-col justify-center px-16">
            <h1 className="text-5xl font-bold text-white">Startup Fundraising Platform</h1>
            <p className="mt-4 text-lg text-gray-300">
              Start and manage a professional fundraise to attract quality accredited investors.
            </p>
            <Button className="mt-8 bg-purple-500 text-white hover:bg-purple-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 px-4 py-2 rounded-full w-1/3">
                <Link to='/choose-category'>

              Get Started
                </Link>
            </Button>
          </div>
          <div className="w-1/2" />
        </div>
      )
    }
    


export default LandingPage
