import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import images from "../../assets/img";

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name is too short").required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    subject: Yup.string()
      .min(5, "Subject should be more descriptive")
      .required("Subject is required"),
    message: Yup.string()
      .min(20, "Message must be at least 20 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (data.success) {
          setFormStatus({
            type: "success",
            message: "Message sent successfully. I’ll get back to you soon.",
          });
          resetForm();
        } else {
          setFormStatus({
            type: "error",
            message: data.message || "Something went wrong.",
          });
        }

        setTimeout(() => setFormStatus(null), 4000);
      } catch (error) {
        setFormStatus({
          type: "error",
          message: "Server is not responding. Please try again later.",
        });

        setTimeout(() => setFormStatus(null), 4000);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="relative py-32 px-6 lg:px-24 bg-[#050505] overflow-hidden min-h-screen flex flex-col items-center justify-center">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-16 relative z-20 w-full max-w-4xl"
      >
        <h2 className="text-zinc-500 font-black tracking-[0.2em] uppercase text-xs mb-3">
          Get in Touch
        </h2>
        <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
          Let’s build something <br />
          <span className="text-zinc-500">great</span> together.
        </h1>
        <div className="w-16 h-1 bg-white mt-6 rounded-full" />
      </motion.div>

      <div className="relative w-full max-w-4xl px-4">

        {/* Notification */}
        <AnimatePresence>
          {formStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium backdrop-blur-xl border ${
                formStatus.type === "success"
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                  : "bg-red-500/10 border-red-500/30 text-red-300"
              }`}
            >
              {formStatus.type === "success" ? (
                <CheckCircle2 size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              {formStatus.message}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 lg:p-12 rounded-[40px] shadow-2xl"
        >
          <form onSubmit={formik.handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["name", "email"].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                    {field === "name" ? "Your Name" : "Email Address"}
                  </label>
                  <input
                    {...formik.getFieldProps(field)}
                    className="w-full px-6 py-4 rounded-xl bg-white/[0.03] border border-white/5 outline-none text-white focus:border-white/40 focus:bg-white/[0.05] transition-all"
                  />
                  {formik.touched[field] && formik.errors[field] && (
                    <p className="text-zinc-400 text-[10px] mt-1 ml-2 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {formik.errors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                Subject
              </label>
              <input
                {...formik.getFieldProps("subject")}
                className="w-full px-6 py-4 rounded-xl bg-white/[0.03] border border-white/5 outline-none text-white focus:border-white/40 focus:bg-white/[0.05] transition-all"
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-zinc-400 text-[10px] mt-1 ml-2 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {formik.errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                Message
              </label>
              <textarea
                rows="4"
                {...formik.getFieldProps("message")}
                className="w-full px-6 py-4 rounded-xl bg-white/[0.03] border border-white/5 outline-none text-white focus:border-white/40 focus:bg-white/[0.05] transition-all resize-none"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-zinc-400 text-[10px] mt-1 ml-2 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {formik.errors.message}
                </p>
              )}
            </div>

            <motion.button
              disabled={formik.isSubmitting}
              whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full font-black py-5 rounded-xl flex items-center justify-center gap-3 border border-white/10 text-white transition-all disabled:opacity-50"
            >
              {formik.isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              {!formik.isSubmitting && <Send size={18} />}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
