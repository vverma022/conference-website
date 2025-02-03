import { motion } from "framer-motion";

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
      className="shadow-md rounded-lg"
    >
      <div className="mb-4">
        <p className="text-gray-300">
          <span className="font-bold">Contact Us:</span>
        </p>
        <ul className="text-white list-disc pl-5">
          {people.map((person, index) => (
            <li key={index}>
              {person.name} - <span className="text-white">{person.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ContactForm;