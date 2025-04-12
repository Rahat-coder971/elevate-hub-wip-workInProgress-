import React from "react"
function HomeCards(){

    const cardsdata=[
        {
            heading:'Personalized Learning Paths',
            para:'Our mentors design personalized learning plans that cater to your unique goals, helping you stay focused and motivated throughout your journey.'
        },
        {
            heading:'Affordable and Flexible',
            para:'ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.'
        },
        {
            heading:'Affordable and Flexible',
            para:'ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.'
        },
        {
            heading:'Build Valuable Networks',
            para:'ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.'
        },
        {
            heading:'Affordable and Flexible',
            para:'ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.'
        },
        {
            heading:'Affordable and Flexible',
            para:'ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.'
        },
    ]
    return(
        <div className="flex flex-wrap py-10 justify-center gap-5">
            {cardsdata.map((ele,ind)=>(
                 <div key={ind} className="w-[90%] md:w-[30%]  flex justify-between gap-y-4 flex-col py-5  px-4 shadow-2xl hover:scale-105  rounded-3xl">
            <h1 className="text-center text-2xl font-bold">{ele.heading}</h1>
            <p className="text-center text-gray-600">{ele.para}</p>
            <button className="text-blue-500">learn MOre</button>

        </div>
            ))}
        </div>
        // <div className="w-[30%] flex flex-col py-5 gap-4 px-4 shadow-2xl  rounded-3xl">
        //     <h1 className="text-center text-2xl font-bold">Expert Career Guidance</h1>
        //     <p className="text-center text-gray-600">Gain career insights and advice from seasoned mentors. Receive support for resume building, job interviews, and navigating your professional growth.</p>
        //     <button className="text-blue-500">learn MOre</button>

        // </div>
    )
}
export default HomeCards;