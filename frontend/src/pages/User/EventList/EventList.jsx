import React from 'react'

const EventList = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us for our next event.
              </p>
            </div>
          </div>
        
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 shadow-md border rounded-xl px-8 my-8">
            <img
              alt="Event"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1 ">
                    <h3 className="text-xl font-bold">Event Title</h3>
                    <p className="text-gray-500 dark:text-gray-400">Kozhikode</p>
                    <p className="text-gray-700 dark:text-gray-400">9.00 am</p>
                    <p className="text-gray-500 dark:text-gray-400">Event Description</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 shadow-lg border rounded-xl px-8 ">
            <img
              alt="Event"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="500"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1 ">
                    <h3 className="text-xl font-bold">Event Title</h3>
                    <p className="text-gray-500 dark:text-gray-400">Kozhikode</p>
                    <p className="text-gray-700 dark:text-gray-400">9.00 am</p>
                    <p className="text-gray-500 dark:text-gray-400">Event Description</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
    </main>
    </div>
  )
}

export default EventList
