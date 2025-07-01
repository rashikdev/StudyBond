import React from "react";
import Marquee from "react-fast-marquee";
import { MdOutlineMessage } from "react-icons/md";

const testimonials = [
  {
    text: "Study Bond helped me stay organized and never miss deadlines again!",
    author: "Ahsan, CSE Student",
  },
  {
    text: "Our group chat and assignment sync made study life so much easier.",
    author: "Nafisa, SSC Candidate",
  },
  {
    text: "I love how easy it is to join study groups and submit tasks!",
    author: "Imran, HSC Student",
  },
  {
    text: "Clean UI, smooth performance, and just what I needed for remote study.",
    author: "Tanisha, BBA Student",
  },
  {
    text: "Assignment creation and grading is super simple. Love it!",
    author: "Sajid, English Medium Teacher",
  },
  {
    text: "It actually made online study fun. Highly recommended!",
    author: "Rima, Job Seeker",
  },
];

const Testimonials = () => {
  return (
    <section className="w-10/12 mx-auto lg:py-30">
      <h2 className="flex items-center justify-center gap-2 text-3xl font-bold text-center mb-20 text-green-500">
        <span className="inline-block">
          <MdOutlineMessage color="green" />
        </span>{" "}
        What Our Users Say
      </h2>

      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex gap-6 px-4">
          {testimonials.map((review, index) => (
            <blockquote
              key={index}
              className="bg-base-300 w-[300px] p-6 rounded-xl shadow text-gray-400"
            >
              <p className="italic">“{review.text}”</p>
              <footer className="mt-4 text-sm font-semibold text-right">
                – {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
