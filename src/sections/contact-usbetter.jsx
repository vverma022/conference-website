import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");

  const people = [
    { name: "Mr. Aditya Narayan Hati", address:"227, Academic Block 1, Manipal Univeristy Jaipur, Jaipur, Rajasthan, India, 3003007", email: "icsdcmuj@gmail.com" },
  ];

  const handleSendEmail = () => {
    if (!message) {
      alert("Please select a contact and type your message before sending.");
      return;
    }
    const mailtoLink = `mailto:${'icsdcmuj@gmail.com'}?subject=Contact&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="shadow-md rounded-lg bg-gray-800 p-6"
    >
      <div className="mb-4">
        <p className="text-gray-400 text-lg mb-4">
          <span className="font-bold text-white">Contact Us:</span>
        </p>
        <ul className="text-white justify-between space-y-3">
          {people.map((person, index) => (
            <li
              key={index}
              className={`flex flex-col space-y-1 ${
                selectedEmail === person.email ? "bg-gray-700 p-2 rounded" : ""
              }`}
              onClick={() => setSelectedEmail(person.email)}
            >
              <div className="flex items-center space-x-3 cursor-pointer">
                <Mail className="text-gray-300 w-5 h-5" />
                <span className="font-semibold">{person.name}</span>
              </div>
              {person.address && (
                <span className="text-gray-300">{person.address}</span>
              )}
              {person.email && (
                <span
                  className={`text-gray-300 ${
                    selectedEmail === person.email ? "font-bold" : ""
                  }`}
                >
                  {person.email}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="mt-4">
        <textarea
          className="w-full bg-gray-700 text-white p-3 rounded resize-none h-24"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="mt-3 w-full text-black py-2 px-4 rounded transition duration-200"
          onClick={handleSendEmail}
          variant="outline"
        >
          Send
        </Button>
      </div> */}
    </motion.div>
  );
};

export default ContactForm;