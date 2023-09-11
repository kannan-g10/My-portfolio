import React from "react";

function Contact() {
  return (
    <div id="contact" className="mt-52 transition-all duration-500">
      <div>
        <h1 className="dark:text-white text-[#021F34] text-3xl text-center font-bold">
          Contact Me
        </h1>
        <div className="border-2 w-20 mx-auto mt-5 border-cyan-500"></div>
      </div>
      <div className="flex flex-col items-end mx-44">
        <h2 className="dark:text-[#98C0C6] text-slate-500 font-bold text-2xl m-10 mr-36">
          Get in touch
        </h2>
        <div className="m-2">
          <form>
            <input
              required
              type="text"
              placeholder="Name"
              className="dark:bg-[#01162A] border px-6 py-4 m-2 text-white placeholder:font-light shadow-lg"
              size={40}
            />
            <br />
            <input
              required
              type="email"
              placeholder="Email"
              className="dark:bg-[#01162A] border px-6 py-4 m-2 text-white placeholder:font-light shadow-lg"
              size={40}
            />
            <br />
            <input
              required
              type="text"
              placeholder="Subject"
              className="dark:bg-[#01162A] border px-6 py-4 m-2 text-white placeholder:font-light shadow-lg"
              size={40}
            />
            <br />
            <textarea
              required
              name="message"
              cols="42"
              rows="10"
              placeholder="Message"
              className="dark:bg-[#01162A] border placeholder:font-light m-2 px-6 py-4 text-white shadow-lg"
            ></textarea>
            <br />
            <button
              type="submit"
              className="m-2 px-6 py-4 w-56 bg-[#00AAF2] font-bold hover:bg-[#FF4A57] hover:text-white rounded-md transition-all duration-500 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
