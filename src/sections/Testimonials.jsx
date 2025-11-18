import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp",
      content: "Working with John was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver our project ahead of schedule.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Mike Chen",
      position: "CTO",
      company: "StartupXYZ",
      content: "John's expertise in React and modern web technologies transformed our application. He's a true professional who delivers quality work.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Emily Davis",
      position: "Design Lead",
      company: "Creative Agency",
      content: "Collaborating with John was seamless. He understands design principles and implements them perfectly while suggesting technical improvements.",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-500 text-sm">Avatar</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
