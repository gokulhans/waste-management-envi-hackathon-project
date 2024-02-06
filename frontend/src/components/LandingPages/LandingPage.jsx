import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 mt-10 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-gray-800 dark:text-gray-200">
                  Making Waste Management Easy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  We provide comprehensive waste management services, ensuring a cleaner, greener future for all.
                </p>
                <button className='bottom-auto bg-black mt-4 p-4 rounded-lg' style={{ "color": "white" }}>Get Started</button>
                <button className='bottom-auto bg-gray-50 mt-4 p-4 rounded-lg border ml-3' style={{ "color": "black" }}>Learn more</button>
              </div>
              <div className="flex flex-col p-3 mb-10 items-start space-y-4">
                <img
                  alt="Waste Management"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="https://images.pexels.com/photos/17869493/pexels-photo-17869493/free-photo-of-a-row-of-colorful-trash-cans-with-labels-on-them.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm text-white">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-gray-200">
                  Who We Are
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are a dedicated team of professionals committed to making waste management easy and efficient.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm text-white">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-gray-200">
                  What We Do
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a range of waste management services tailored to your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Residential Waste Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide residential waste collection and recycling services, ensuring your home stays clean and
                  green.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Commercial Waste Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our commercial waste management solutions help businesses reduce their environmental impact.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Waste Disposal and Recycling</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We offer responsible waste disposal and comprehensive recycling services to minimize landfill waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm text-white">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-gray-200">
                  Choose Your Plan
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer flexible pricing options to suit your waste management needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
              <div className="grid gap-1 p-4 border-2 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Monthly Plan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ideal for short-term projects or one-off needs.
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-4">$49.99/month</p>
              </div>
              <div className="grid gap-1 p-4 border-2 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Yearly Plan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for ongoing waste management needs.</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-4">$499.99/year</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm text-white">Newsletter</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-gray-200">
                  Stay Updated
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Subscribe to our newsletter for the latest updates and offers.
                </p>
                <div className="mt-4 flex justify-center">
                  <input
                    className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button className="px-4 py-2 bg-green-500 text-white rounded-r-md">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Waste Management Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="#">
            Site Map
          </Link>
        </nav>
      </footer>
    </div>

  )
}



export default LandingPage
