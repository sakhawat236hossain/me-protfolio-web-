"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp, FaRocket, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Swal from 'sweetalert2';

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    
    formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_KEY);
    formData.append("subject", `New Message from ${formData.get("name")}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।",
          icon: "success",
          background: "#0F172A",
          color: "#fff",
          confirmButtonColor: "#8B5CF6",
          timer: 2500
        });
        event.target.reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-32 px-4 sm:px-6 overflow-hidden bg-[#020617]">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-6"
          >
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-400 font-bold tracking-widest uppercase text-[10px] md:text-xs">Available for New Projects</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tight leading-tight"
          >
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              extraordinary together
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <ContactInfoCard 
                icon={<FaWhatsapp className="text-emerald-400" />}
                label="WhatsApp"
                value="+8801851121472"
                link="https://wa.me/8801851121472"
              />
              <ContactInfoCard 
                icon={<AiOutlineMail className="text-sky-400" />}
                label="Email"
                value="hmdsakhawat236@gmail.com"
                link="mailto:hmdsakhawat236@gmail.com"
              />
              <ContactInfoCard 
                icon={<FaMapMarkerAlt className="text-rose-400" />}
                label="Location"
                value="Dhaka, Bangladesh"
                link="#"
              />
            </div>

            {/* Social Connect Box */}
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <FaPaperPlane className="text-purple-500 text-sm" /> Social Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                <SocialBtn icon={<AiFillGithub />} link="https://github.com/sakhawat236hossain" color="hover:bg-slate-700" />
                <SocialBtn icon={<FaLinkedinIn />} link="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/" color="hover:bg-blue-600" />
                <SocialBtn icon={<AiFillFacebook />} link="https://www.facebook.com/md.sakhawth.hosain" color="hover:bg-blue-700" />
                <SocialBtn icon={<AiFillInstagram />} link="#" color="hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500" />
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 md:p-10 rounded-[2rem] bg-slate-900/50 border border-slate-800 backdrop-blur-3xl shadow-2xl relative"
            >
              {/* Form subtle glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full"></div>
              
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Full Name</label>
                    <input name="name" type="text" required placeholder="Ex: Sakhawat Hossain" className="contact-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Email</label>
                    <input name="email" type="email" required placeholder="hello@sakhawat.com" className="contact-input" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Project Subject</label>
                  <input name="subject_title" type="text" required placeholder="What are you looking for?" className="contact-input" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Message Details</label>
                  <textarea name="message" rows="4" required placeholder="Tell me about your vision..." className="contact-input resize-none"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-black rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-500/20 disabled:opacity-50 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase text-xs">
                    {isSubmitting ? "Dispatching..." : "Send Brief"}
                    <FaRocket className={`${isSubmitting ? "animate-bounce" : "group-hover:translate-x-1 group-hover:-translate-y-1"} transition-transform`} />
                  </span>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-input {
          width: 100%;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(51, 65, 85, 0.5);
          border-radius: 12px;
          padding: 14px 18px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .contact-input:focus {
          border-color: #a855f7;
          background: rgba(15, 23, 42, 0.8);
          box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.15);
        }
        .contact-input::placeholder {
          color: #475569;
        }
      `}</style>
    </section>
  );
};

// --- Sub-Components ---
const ContactInfoCard = ({ icon, label, value, link }) => (
  <motion.a 
    href={link} target="_blank"
    whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.6)" }}
    className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center gap-5 transition-all"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-xl group-hover:scale-110 transition-all group-hover:bg-slate-700 group-hover:border-purple-500/50 shadow-lg">
      {icon}
    </div>
    <div className="overflow-hidden">
      <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{label}</p>
      <p className="text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors truncate">{value}</p>
    </div>
  </motion.a>
);

const SocialBtn = ({ icon, link, color }) => (
  <a 
    href={link} target="_blank"
    className={`w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700 text-white text-lg transition-all duration-300 ${color} hover:scale-110 hover:-translate-y-1 hover:shadow-lg`}
  >
    {icon}
  </a>
);

export default Contact;