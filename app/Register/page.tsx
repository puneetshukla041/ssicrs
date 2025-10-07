// app/register/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChangeEvent } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;

    if (type === "checkbox") {
      const checkboxElement = e.target as HTMLInputElement;
      if (checkboxElement.checked) {
        // Correctly handles array of strings for multi-select checkboxes
        setFormData({
          ...formData,
          [id]: [...((formData[id] as string[]) || []), value],
        });
      } else {
        // Removes value from array when unchecked
        setFormData({
          ...formData,
          [id]: ((formData[id] as string[]) || []).filter((v: string) => v !== value),
        });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async () => {
    // You might want to add validation here before submitting
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Registration Successful!");
        setFormData({});
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to register.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonHover = { scale: 1.03, transition: { duration: 0.2 } };
  const buttonTap = { scale: 0.97 };
  const inputHover = { scale: 1.005, transition: { duration: 0.1 } };
  const inputFocus = { scale: 1.005, boxShadow: "0 0 0 2px #A67950", transition: { duration: 0.2 } };

  return (
    // 1. Swapped the main container background from 'bg-white' to 'bg-[#FBFAF2]'
    <div className="w-full min-h-screen bg-[#FBFAF2] flex flex-col pb-16 md:pb-32 font-lato">
      
      {/* Header - Kept existing color (F8F1E9) or you can change to match the new body color if desired */}
      <motion.div
        className="w-full px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-md bg-[#F8F1E9]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header content */}
      </motion.div>

      <motion.div
        className="flex flex-col text-center px-4 pt-12 md:pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading and Description remain the same */}
        <motion.h1
          className="font-serif text-3xl md:text-6xl text-center font-normal leading-tight text-[#A67950]"
          variants={textVariants}
        >
          Take the First Step Toward
          <br className="hidden md:block" />
          Advancing Your Robotic Surgery Skills
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-center text-[#401323] leading-relaxed mt-6 md:mt-8"
          variants={textVariants}
        >
          Please complete the form below to enroll into our comprehensive robotic surgery training programs.
          <br className="hidden md:block" />
          Upon successful registration, our team will reach out with program details, schedules, and next steps.
        </motion.p>

        {/* 2. Swapped the Main Registration Card background from 'bg-[#F8F1E9]' to 'bg-white' */}
        <motion.div
          className="mt-8 md:mt-16 bg-white rounded-2xl shadow-xl p-6 md:p-12 max-w-5xl mx-auto w-full"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Form Fields - No changes needed, they use default white input backgrounds */}
          <motion.div
            className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/** All input fields are here... */}
            <motion.div variants={itemVariants}>
              <label htmlFor="fullName" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Full Name</label>
              <motion.input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Email</label>
              <motion.input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="phoneNumber" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Phone Number</label>
              <motion.input
                id="phoneNumber"
                type="tel"
                placeholder="Enter Your Contact Number, with Country Code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="dob" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Date of Birth</label>
              <motion.input
                id="dob"
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="experience" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Years of Experience</label>
              <motion.input
                id="experience"
                type="number"
                placeholder="Enter the Number of Years in Practice"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="institution" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Affiliated Institution/Hospital</label>
              <motion.input
                id="institution"
                type="text"
                placeholder="Enter Your Current Place of Work"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="callDateTime" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Preferred Call Date and Time</label>
              <motion.input
                id="callDateTime"
                type="datetime-local"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="hearAboutUs" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">How Did You Hear About Us?</label>
              <motion.input
                id="hearAboutUs"
                type="text"
                placeholder="e.g., Conference, Social Media, Colleague"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="currentProfession" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Current Profession</label>
              <motion.input
                id="currentProfession"
                type="text"
                placeholder="Enter Your Current Profession"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="specialization" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Specialization</label>
              <motion.input
                id="specialization"
                type="text"
                placeholder="Enter Your Specialization"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <label htmlFor="learningGoals" className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]">Any Specific Learning Goals or Comments?</label>
              <motion.textarea
                id="learningGoals"
                rows={3}
                placeholder="Enter Any Specific Learning Goals or Comments"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>
          </motion.div>

          {/* Section Separator */}
          <div className="border-t border-gray-300 my-10 md:my-12"></div>

          {/* Training Programs */}
          <motion.div
            className="flex flex-col items-center justify-center w-full"
            variants={containerVariants}
          >
            <motion.h2 className="font-serif text-2xl md:text-3xl text-center font-normal leading-tight text-[#A67950] mb-6 md:mb-8" variants={itemVariants}>
              Select Your Training Programs
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 w-full">
              {/* Core Training Programs */}
              {/* 3. Swapped inner program card background from 'bg-white' to 'bg-[#F8F1E9]' to provide contrast with the main white card. */}
              <motion.div
                className="flex flex-col items-start p-4 bg-[#F8F1E9] rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <label className="font-medium text-base md:text-lg text-[#401323] mb-3">Core Programs</label>
                <div className="flex flex-col gap-3">
                  <motion.div className="flex items-center cursor-pointer" whileHover={buttonHover} whileTap={buttonTap}>
                    <input type="checkbox" id="trainingPrograms" value="Surgeon Training" className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer" onChange={handleChange} />
                    <label htmlFor="trainingPrograms" className="text-sm md:text-base font-medium text-[#401323] cursor-pointer">Surgeon Training</label>
                  </motion.div>
                  <motion.div className="flex items-center cursor-pointer" whileHover={buttonHover} whileTap={buttonTap}>
                    <input type="checkbox" id="trainingPrograms" value="Surgical Staff Training" className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer" onChange={handleChange} />
                    <label htmlFor="trainingPrograms" className="text-sm md:text-base font-medium text-[#401323] cursor-pointer">Surgical Staff Training</label>
                  </motion.div>
                  <motion.div className="flex items-center cursor-pointer" whileHover={buttonHover} whileTap={buttonTap}>
                    <input type="checkbox" id="trainingPrograms" value="Anesthesia Training for Robotic Surgery" className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer" onChange={handleChange} />
                    <label htmlFor="trainingPrograms" className="text-sm md:text-base font-medium text-[#401323] cursor-pointer">Anesthesia Training for Robotic Surgery</label>
                  </motion.div>
                </div>
              </motion.div>

              {/* Additional Training Programs */}
              {/* 4. Swapped inner program card background from 'bg-white' to 'bg-[#F8F1E9]'. */}
              <motion.div
                className="p-4 bg-[#F8F1E9] rounded-lg shadow-sm flex flex-col items-start"
                variants={itemVariants}
              >
                <label className="font-medium text-base md:text-lg text-[#401323] mb-3">Additional Programs</label>
                <div className="flex flex-col gap-3">
                  <motion.div className="flex items-center cursor-pointer" whileHover={buttonHover} whileTap={buttonTap}>
                    <input type="checkbox" id="additionalPrograms" value="Advanced Surgical Techniques" className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer" onChange={handleChange} />
                    <label htmlFor="additionalPrograms" className="text-sm md:text-base font-medium text-[#401323] cursor-pointer">Advanced Surgical Techniques</label>
                  </motion.div>
                  <motion.div className="flex items-center cursor-pointer" whileHover={buttonHover} whileTap={buttonTap}>
                    <input type="checkbox" id="additionalPrograms" value="Robotic Systems Maintenance" className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer" onChange={handleChange} />
                    <label htmlFor="additionalPrograms" className="text-sm md:text-base font-medium text-[#401323] cursor-pointer">Robotic Systems Maintenance</label>
                  </motion.div>
                  <motion.div className="flex items-center cursor-pointer" whileHover={buttonHover} whileTap={buttonTap}>
                    <input type="checkbox" id="additionalPrograms" value="Post-Op Robotic Care" className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer" onChange={handleChange} />
                    <label htmlFor="additionalPrograms" className="text-sm md:text-base font-medium text-[#401323] cursor-pointer">Post-Op Robotic Care</label>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Rest of the form (Final Steps and Button) remains the same */}
          <div className="border-t border-gray-300 my-10 md:my-12"></div>

          <motion.div
            className="flex flex-col items-center w-full"
            variants={itemVariants}
          >
            <motion.h2 className="font-serif text-2xl md:text-3xl text-center font-normal leading-tight text-[#A67950] mb-6 md:mb-8" variants={itemVariants}>
              Final Steps
            </motion.h2>

            {/* Upload ID */}
            <motion.div
              className="flex flex-col items-start w-full max-w-xl mb-8"
              variants={itemVariants}
            >
              <label
                htmlFor="uploadId"
                className="block text-left mb-1 text-sm md:text-base font-medium text-[#401323]"
              >
                Upload ID
              </label>
              <motion.input
                id="uploadId"
                type="file"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm md:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#A67950] file:text-white hover:file:bg-[#8d6241] cursor-pointer"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            {/* Register Now Section */}
            <motion.div
              className="flex flex-col items-center max-w-xl mx-auto w-full"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4 md:mb-6 w-full">
                <motion.input
                  type="checkbox"
                  id="termsAgree"
                  className="mr-2 md:mr-3 mt-1 cursor-pointer accent-[#A67950] shrink-0 w-5 h-5"
                  onChange={handleChange}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <label
                  htmlFor="termsAgree"
                  className="text-xs md:text-sm font-medium text-[#401323] text-left cursor-pointer"
                >
                  By clicking on “Register Now”, you agree to our{" "}
                  <a href="#" className="text-blue-500 cursor-pointer hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 cursor-pointer hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <motion.button
                onClick={handleSubmit}
                disabled={loading}
                className="font-bold text-base md:text-lg text-white bg-[#A67950] py-3 md:py-4 px-6 md:px-8 border-none rounded-full w-full max-w-xs md:max-w-md cursor-pointer shadow-lg hover:shadow-xl"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                {loading ? "Registering..." : "Register Now"}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}