import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/undraw_social_update_re_xhjr.svg";
import topicImage from "../assets/undraw_online_messaging_re_qft3.svg";
import eventImage from "../assets/undraw_events_re_98ue.svg";
import newsImage from "../assets/undraw_social_update_re_xhjr.svg";

const Features = () => {
  AOS.init();

  return (
    <div
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-delay="10"
      data-aos-duration="100"
      data-aos-easing="ease-in"
      data-aos-mirror="true"
      data-aos-once="false"
      className="h-fit "
    >
      <div className="flex flex-col space-y-10 pt-16">
        <div className=" flex py-2 md:px-10 space-y-6 flex-col md:flex-row items-center justify-center">
          <img src={profileImg} alt="image" className="w-4/5 md:w-96" />
          <div className="px-4 flex flex-col space-y-2 pb-1">
            <h2 className="font-bold">Showcase Your Anime Preferences</h2>
            <p>
              Showcase your favorite anime series, characters, and episodes on
              your profile. Add a cool avatar to let others know what you're
              into.
            </p>
          </div>
        </div>
        <div className="flex py-6 md:px-10  space-y-6 bg-gray-100 md:flex-row-reverse flex-col items-center justify-center">
          <img src={topicImage} alt="image" className="w-3/5 md:w-96" />
          <div className="px-4 flex flex-col space-y-2 pb-1">
            <h2 className="font-bold">Join the Conversation</h2>
            <p>
              Dive into topic-based discussions without the chaos of group
              chats. Engage, share, and geek out about anime with like-minded
              fans.
            </p>
          </div>
        </div>
        <div className="flex py-2 md:px-10 space-y-6 flex-col md:flex-row items-center justify-center">
          <img src={eventImage} alt="image" className="w-3/5 md:w-96" />
          <div className="px-4 flex flex-col space-y-2 pb-1">
            <h2 className="font-bold">Stay in the Loop</h2>
            <p>
              Keep track of upcoming anime events, releases, and conventions
              with our user-friendly event calendar. No more missing out on
              exciting anime happenings.
            </p>
          </div>
        </div>
        <div className="flex py-6 md:px-10  space-y-6 bg-gray-100 flex-col ">
         <div className="flex flex-col md:flex-row-reverse items-center justify-center">
         <img src={newsImage} alt="image" className="w-4/5 md:w-96" />
          <div className="px-4 flex flex-col space-y-2 pb-1">
            <h2 className="font-bold">Connect and Share</h2>
            <p>
              Stay connected with fellow anime fans. Post, share, and discuss
              your latest anime interests in a laid-back News Feed.
            </p>
          </div>
         </div>
          <div className="flex justify-center items-center flex-col pt-8 gap-4">
            <h3 className="text-2xl font-bold">Ready to start your journey?</h3>
            <button className="px-8 py-2 bg-primary rounded-xl shadow-md hover:scale-105 duration-500 text-white font-semibold hover:bg-opacity-90">Get Started</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
