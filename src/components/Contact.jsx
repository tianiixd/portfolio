import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);
    const formObject = Object.fromEntries(data.entries());

    const payload = {
      "Full Name": formObject.name,
      Email: formObject.email,
      Message: formObject.message,
    };

    try {
      const response = await fetch("https://formspree.io/f/mykvoyze", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(
        "Failed to send message. Please check your connection. " + error,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 flex flex-col justify-center"
    >
      <div className="mb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand font-mono font-bold tracking-widest text-sm mb-4 uppercase"
        >
          06. Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors"
        >
          I'm always eager to connect with fellow developers, potential
          collaborators, or anyone interested in my work. Feel free to drop a
          message.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col justify-start space-y-8 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors"
        >
          <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white transition-colors">
            Contact Information
          </h3>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-brand/10 dark:bg-brand/20 rounded-full">
              <Mail className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                Email
              </p>
              <a
                href="mailto:tian90921@gmail.com"
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-brand dark:hover:text-brand transition-colors"
              >
                tian90921@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-brand/10 dark:bg-brand/20 rounded-full">
              <MapPin className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                Based in
              </p>
              <p className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
                Quezon City, Philippines
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-brand/10 dark:bg-brand/20 rounded-full">
              <Phone className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                Phone
              </p>
              <p className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
                +63 9214055564
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 dark:border-gray-700 transition-colors">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand/10 dark:bg-brand/10 text-brand dark:text-brand-hover border border-brand/20 dark:border-brand/30 transition-colors w-fit shadow-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">
                Available for new opportunities
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all h-full"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                placeholder="Steve Jobs"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                placeholder="jobs04@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                placeholder="Hi Christian!"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-auto flex justify-center items-center gap-2 w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-[15px] transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800 dark:hover:bg-gray-100 cursor-pointer"}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="w-4 h-4 ml-1" />}
            </button>
          </form>
        </motion.div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Contact;
