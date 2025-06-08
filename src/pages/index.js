import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Layout from "../components/layout";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";
import { skills } from "../data/skills";
import { education } from "../data/education";
import { interests } from "../data/interests";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold tracking-tight"
            >
              {profile.name}
            </motion.h1>
            <p className="mt-2 text-xl font-medium">{profile.title}</p>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-gray-200"
              >
                <FaEnvelope size={24} />
              </a>
              <a href={`tel:${profile.phone}`} className="hover:text-gray-200">
                <FaPhone size={24} />
              </a>
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p className="text-gray-700">{profile.description}</p>
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-lg font-semibold mt-2">{exp.role}</p>
                  </div>
                  <button
                    onClick={() =>
                      setActiveSection(activeSection === index ? null : index)
                    }
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {activeSection === index ? "Show Less" : "Show More"}
                  </button>
                </div>
                {activeSection === index && (
                  <ul className="mt-4 space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-gray-700">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-700 mt-2">
                  {edu.grade} ({edu.period})
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">{interest.title}</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {interest.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;

export const Head = () => <title>Zhiqing Wu - Portfolio</title>;
