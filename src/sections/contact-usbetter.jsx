import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const people = [
    { name: "Dr. Sunil Kumar", email: "kumar.sunil@jaipur.manipal.edu" },
    { name: "Dr. Amit Kumar Sharma", email: "amit.sharma@jaipur.manipal.edu" },
    
  ];

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
      <ul className="text-white space-y-3">
        {people.map((person, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Mail className="text-gray-300 w-5 h-5" />
            <div>
              <span className="font-semibold">{person.name}</span> -{" "}
              <a
                href={`mailto:${person.email}`}
                className="text-gray-300 hover:underline"
              >
                {person.email}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
  );
};

export default ContactForm;