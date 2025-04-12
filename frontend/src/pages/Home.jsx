import React from "react"
import Navbar from "../components/Navbar";
import mentor from '../assets/mentor.png'
import mentorship from '../assets/mentorship.jpg'
import { NavLink } from "react-router-dom";
import HomeCards from "../components/HomeCards";
function Home() {

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-green-100 py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 ">
              <span className="text-5xl md:text-7xl text-green-900">Elevate Hub:</span>
              <br />Your journey, our guidance
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-green-700">
              Every great achiever was inspired by a great mentor. Find yours today!
            </p>
            <div className="mt-8 mb-8">
              <NavLink to="/mentors">
                <button className="px-8 py-3 text-white text-lg font-medium bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300">
                  Match with a Mentor
                </button>
              </NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className=" flex justify-center">
            <div className="relative">
              <img
                className="w-full max-w-lg rounded-lg shadow-lg"
                src='https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                alt="Mentorship Hub"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ABout SEction */}
      <section className="bg-[#F9F9F9]">
        <div className="px-6 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-10 lg:py-24">
          <div className="flex flex-col max-w-screen-xl  bg-white  border-gray-200 rounded-lg shadow-md lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src={mentor}
                alt="ElevateHub Mentoring"
                className=" w-full lg:absolute h-80 lg:h-full"
              />
              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>

            </div>
            <div className="p-12 bg-[#F1F1F1] lg:p-16  lg:w-1/2 rounded-lg shadow-lg">
              <h5 className="mb-4 text-4xl font-bold  text-gray-800 sm:text-5xl">
                Elevate Your Career with ElevateHub
              </h5>
              <p className="mb-6 text-lg text-gray-600">
                <span className="font-semibold text-gray-900">ElevateHub</span> is the ultimate platform designed to connect you with experienced mentors who can help you unlock your potential. Whether you're seeking career advice, skill development, or personal growth, ElevateHub is here to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 mb-4 sm:mb-0 font-medium tracking-wide text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300" disabled
                >
                  Join ElevateHub
                </button>
                <a
                  href="/learn-more"
                  aria-label="Learn more about ElevateHub"
                  className="inline-flex items-center justify-center font-semibold text-blue-600  hover:text-blue-700"
                >
                  Discover More
                  <svg
                    className="inline-block w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414 8 8 0 0 1 2.448 2.447l3.181 3.181a1 1 0 1 0 1.415-1.414l-3.182-3.181a8 8 0 0 1-2.448-2.447zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature section */}

      <section>
        <div className="w-[95%] mx-auto">
          <h1 className="text-center font-extrabold text-2xl sm:text-3xl m-5">Unlock Your Growth Journey with ElevateHub</h1>
          <p className="text-center text-gray-600  sm:text-2xl mb-5">ElevateHub is designed to connect you with the right mentors, guiding you to success. Whether it's enhancing your skills or reaching career goals, we’re here to help you thrive.</p>
          {/* here insted of repeting the crads we hav credate seperate components, in which we hav lopped a arrya */}
          <HomeCards />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-10 bg-[#f3f4f6]">
        <div className="container mx-auto text-center max-w-screen-xl">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Start Your Mentorship Journey with ElevateHub
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Join ElevateHub today and connect with mentors who can guide you towards your goals. Follow our easy steps to start achieving more with personalized mentorship.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src={mentorship} // Use your preferred image here
                alt="Mentorship Journey"
                className="rounded-lg shadow-lg h-full w-full object-cover"
              />
            </div>
            <div>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-teal-500 rounded-full">
                    1
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800">Create Your Profile</h3>
                    <p className="text-gray-600">
                      Start your ElevateHub journey by creating a personalized profile. Share your goals, interests, and areas for growth to help us match you with the right mentor.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-blue-500 rounded-full">
                    2
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800">Browse Mentor Profiles</h3>
                    <p className="text-gray-600">
                      Explore a wide variety of mentors from diverse fields. Use filters to find experts with the skills and experience that match your goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-green-500 rounded-full">
                    3
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800">Select Your Ideal Mentor</h3>
                    <p className="text-gray-600">
                      Review mentor profiles, read testimonials, and choose someone who aligns with your personal or professional growth journey.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className=" w-15 h-10 text-center text-lg font-bold text-white bg-red-500 rounded-full">
                    4
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800">Schedule Your First Session</h3>
                    <p className="text-gray-600">
                      Find a time that works for you and your mentor. Schedule your first session and kickstart your growth with expert guidance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className=" w-15 h-10 text-center text-lg font-bold text-white bg-yellow-500 rounded-full">
                    5
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800">Achieve Milestones Together</h3>
                    <p className="text-gray-600">
                      Work closely with your mentor to develop key skills, stay motivated, and hit your personal or professional milestones.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>


  )
}

export default Home;