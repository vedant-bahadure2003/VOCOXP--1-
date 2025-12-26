import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane, FaRocket, FaGlobe, FaHeadset } from "react-icons/fa";

const VocoXpVidForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_4gagddb",
        "template_c98kod8",
        formData,
        "2eY-LCN2x0F5TUJn-"
      )
      .then(() => {
        toast.success("Message sent!");
        setFormData({ name: "", title: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        toast.error("Failed to send.");
        setIsSubmitting(false);
      });
  };

  const inputs = [
    {
      name: "name",
      type: "text",
      label: "Full Name",
      placeholder: "Enter Name",
    },
    {
      name: "email",
      type: "email",
      label: "Work Email",
      placeholder: "abc@gmail.com",
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone",
      placeholder: "+91 1000-0000",
    },
    { name: "title", type: "text", label: "Subject", placeholder: "Inquiry" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 md:p-6 lg:p-10 font-sans">
      {/* Main Card: Reduced rounded corners for md */}
      <div className="max-w-5xl w-full grid lg:grid-cols-5 gap-0 overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 shadow-2xl bg-[#0f172a]/40 backdrop-blur-3xl">
        {/* Left Side: Brand Story (Reduced padding and font sizes for md) */}
        <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 bg-linear-to-br from-indigo-600/15 via-transparent to-transparent flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-300 text-[10px] font-bold uppercase tracking-widest">
                Available Now
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                something great.
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              Elevate your workflow with VOCOxP. Our experts reach out within 24
              hours.
            </p>

            <div className="space-y-4 md:space-y-5">
              {[
                {
                  icon: <FaRocket />,
                  title: "Instant Setup",
                  desc: "Get running in minutes.",
                },
                {
                  icon: <FaGlobe />,
                  title: "Global Reach",
                  desc: "Native 50+ language support.",
                },
                {
                  icon: <FaHeadset />,
                  title: "24/7 Support",
                  desc: "Direct engineering access.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <div className="mt-1 p-2 rounded-lg bg-slate-800 text-indigo-400 text-xs md:text-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-200 text-sm font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: The Form (Tighter spacing for md) */}
        <div className="lg:col-span-3 p-6 md:p-8 lg:p-10 bg-[#0f172a]/80">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {inputs.map((input) => (
                <div key={input.name} className="flex flex-col space-y-1.5">
                  <label
                    htmlFor={input.name}
                    className="text-xs font-medium text-slate-400 ml-1"
                  >
                    {input.label}
                  </label>
                  <input
                    id={input.name}
                    type={input.type}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleChange}
                    required
                    placeholder={input.placeholder}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all duration-200"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-400 ml-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="How can we help?"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 resize-none transition-all duration-200"
              ></textarea>
            </div>

            <div className="pt-2 w-full flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative px-5 overflow-hidden group bg-linear-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold py-3.5 rounded-lg transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
              >
                <div className="relative flex items-center justify-center space-x-2">
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                  {!isSubmitting && (
                    <FaPaperPlane className="text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default VocoXpVidForm;
