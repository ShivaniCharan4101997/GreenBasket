import { useState } from "react";
import Heading from "../ui/Heading";
import { messagesCollection } from "../firebaseConfig";
import { addDoc } from "firebase/firestore";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(messagesCollection, formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-orange-300 to-yellow-200 p-6">
      <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <Heading span="Contact" regular="Us" />
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-200 text-center mt-2">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
