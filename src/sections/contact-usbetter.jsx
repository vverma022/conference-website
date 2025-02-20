import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const people = [
    { name: "Mr. Aditya Narayan Hati", address:"227, Academic Block 1, Manipal Univeristy Jaipur, Jaipur, Rajasthan, India, 3003007", email: "icsdcmuj@gmail.com" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="rounded-lg bg-gray-800"
    >
      <div className="mb-4">
        <p className="text-gray-400 text-lg mb-4">
          <span className="font-bold text-white">CONTACT US:</span>
        </p>
        <ul className="text-white justify-between space-y-3">
          {people.map((person, index) => (
            <li
              key={index}
              className="flex flex-col space-y-1"
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
                  className="text-gray-300"
                >
                  {person.email}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ContactForm;