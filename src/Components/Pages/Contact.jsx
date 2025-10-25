import React from "react";
import Container from "../../Container";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Container>
          <div className="py-20 px-10 bg-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white font-kamrul">
              Contact Me
            </h2>
            <form className="max-w-md mx-auto flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-gray-700 text-white"
              />
              <textarea
                placeholder="Message"
                className="p-3 rounded bg-gray-700 text-white"></textarea>
              <button className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-[#16476A]">
                Send
              </button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
