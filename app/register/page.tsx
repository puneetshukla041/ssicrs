"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RegisterPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for md screens
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slightly faster stagger for a snappier feel
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonHover = { scale: 1.03, transition: { duration: 0.2 } };
  const buttonTap = { scale: 0.97 };
  const inputHover = { scale: 1.005, transition: { duration: 0.1 } };
  const inputFocus = { scale: 1.005, boxShadow: "0 0 0 2px #A67950", transition: { duration: 0.2 } };

  // --------------------------------------------------------------------------------
  // Mobile View JSX
  // --------------------------------------------------------------------------------
  const mobileView = (
    <div className="w-full min-h-screen bg-white flex flex-col pb-16 font-lato">
      {/* Self-contained Header for Mobile */}
      <motion.div
        className="w-full px-4 py-3 flex justify-between items-center shadow-md"
        style={{ backgroundColor: "#F8F1E9" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="https://placehold.co/80x30/E8D2C2/401323?text=Logo"
          alt="Company Logo"
          className="rounded"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div className="flex gap-2">
          <motion.button
            className="px-3 py-1 text-sm font-bold rounded-md border border-[#401323] transition-colors duration-200"
            style={{ cursor: "pointer", color: "#401323", borderColor: "#401323" }}
            whileHover={{ scale: 1.05, backgroundColor: "#401323", color: "#fff" }}
            whileTap={buttonTap}
          >
            Sign In
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col text-center px-4 pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading for Mobile */}
        <motion.h1
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: "400",
            fontSize: "36px",
            color: "#A67950",
            lineHeight: "1.2",
            textAlign: "center",
          }}
          variants={itemVariants}
        >
          Take the First Step Toward Advancing Your Robotic Surgery Skills
        </motion.h1>

        {/* Description for Mobile */}
        <motion.p
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
            color: "#401323",
            lineHeight: "1.5",
            textAlign: "center",
            marginTop: "1.5em",
          }}
          variants={itemVariants}
        >
          Please complete the form below to enroll into our comprehensive robotic surgery training programs. Upon successful registration, our team will reach out with program details, schedules, and next steps.
        </motion.p>

        {/* Form Fields for Mobile - Single Column */}
        <motion.div
          style={{
            marginTop: "2em",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem", // Improved vertical spacing
          }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="fullName" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Full Name</label>
            <motion.input id="fullName" type="text" placeholder="Enter your full name" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="phoneNumber" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Phone Number</label>
            <motion.input id="phoneNumber" type="tel" placeholder="Enter Your Contact Number, with Country Code" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="experience" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Years of Experience</label>
            <motion.input id="experience" type="number" placeholder="Enter the Number of Years in Practice" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="callDateTime" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Preferred Call Date and Time</label>
            <motion.input id="callDateTime" type="datetime-local" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="currentProfession" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Current Profession</label>
            <motion.input id="currentProfession" type="text" placeholder="Enter Your Current Profession" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="learningGoals" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Any Specific Learning Goals or Comments?</label>
            <motion.textarea id="learningGoals" rows={3} placeholder="Enter Any Specific Learning Goals or Comments" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Email</label>
            <motion.input id="email" type="email" placeholder="Enter your email" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="dob" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Date of Birth</label>
            <motion.input id="dob" type="date" placeholder="Enter Your Date of Birth" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="institution" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Affiliated Institution/Hospital</label>
            <motion.input id="institution" type="text" placeholder="Enter Your Current Place of Work" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="hearAboutUs" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>How Did You Hear About Us?</label>
            <motion.input id="hearAboutUs" type="text" placeholder="e.g., Conference, Social Media, Colleague" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="specialization" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Specialization</label>
            <motion.input id="specialization" type="text" placeholder="Enter Your Specialization" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="uploadId" className="block text-left mb-1" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Upload ID</label>
            <motion.input id="uploadId" type="file" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323", padding: "10px 12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%", cursor: "pointer" }} whileHover={inputHover} whileFocus={inputFocus} />
          </motion.div>
        </motion.div>

        {/* Checkbox Groups for Mobile */}
        <motion.div
          style={{
            marginTop: "3em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px"
          }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <label style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323", marginBottom: "8px" }}>
              Select Core Training Program(s)
            </label>
            <div className="flex flex-col gap-2">
              <motion.div style={{ display: "flex", alignItems: "center" }} whileHover={buttonHover} whileTap={buttonTap}>
                <input type="checkbox" id="surgeonTraining" name="trainingProgram" style={{ marginRight: "8px", accentColor: '#A67950' }} />
                <label htmlFor="surgeonTraining" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Surgeon Training</label>
              </motion.div>
              <motion.div style={{ display: "flex", alignItems: "center" }} whileHover={buttonHover} whileTap={buttonTap}>
                <input type="checkbox" id="surgicalStaffTraining" name="trainingProgram" style={{ marginRight: "8px", accentColor: '#A67950' }} />
                <label htmlFor="surgicalStaffTraining" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Surgical Staff Training</label>
              </motion.div>
              <motion.div style={{ display: "flex", alignItems: "center" }} whileHover={buttonHover} whileTap={buttonTap}>
                <input type="checkbox" id="anesthesiaTraining" name="trainingProgram" style={{ marginRight: "8px", accentColor: '#A67950' }} />
                <label htmlFor="anesthesiaTraining" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Anesthesia Training for Robotic Surgery</label>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={{
              marginTop: "2em",
              padding: "16px",
              backgroundColor: "#F8F1E9",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
            variants={itemVariants}
          >
            <label style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323", marginBottom: "8px" }}>
              Select Additional Training Program(s)
            </label>
            <div className="flex flex-col gap-2">
              <motion.div style={{ display: "flex", alignItems: "center" }} whileHover={buttonHover} whileTap={buttonTap}>
                <input type="checkbox" id="surgeonTrainingAdditional" name="trainingProgramAdditional" style={{ marginRight: "8px", accentColor: '#A67950' }} />
                <label htmlFor="surgeonTrainingAdditional" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Surgeon Training</label>
              </motion.div>
              <motion.div style={{ display: "flex", alignItems: "center" }} whileHover={buttonHover} whileTap={buttonTap}>
                <input type="checkbox" id="surgicalStaffTrainingAdditional" name="trainingProgramAdditional" style={{ marginRight: "8px", accentColor: '#A67950' }} />
                <label htmlFor="surgicalStaffTrainingAdditional" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Surgical Staff Training</label>
              </motion.div>
              <motion.div style={{ display: "flex", alignItems: "center" }} whileHover={buttonHover} whileTap={buttonTap}>
                <input type="checkbox" id="anesthesiaTrainingAdditional" name="trainingProgramAdditional" style={{ marginRight: "8px", accentColor: '#A67950' }} />
                <label htmlFor="anesthesiaTrainingAdditional" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px", color: "#401323" }}>Anesthesia Training for Robotic Surgery</label>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Register Now Section for Mobile */}
        <motion.div
          style={{
            marginTop: "3em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variants={itemVariants}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <motion.input
              type="checkbox"
              id="termsAgree"
              style={{ marginRight: "8px", cursor: "pointer", marginTop: "4px", accentColor: '#A67950' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <label
              htmlFor="termsAgree"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#401323",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              By clicking on “Register Now”, you agree to our{" "}
              <a href="#" style={{ color: "#3B82F6", cursor: "pointer" }}>
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" style={{ color: "#3B82F6", cursor: "pointer" }}>
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <motion.button
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              fontSize: "18px",
              color: "#fff",
              backgroundColor: "#A67950",
              padding: "12px 20px",
              border: "none",
              borderRadius: "9999px",
              width: "100%",
              cursor: "pointer",
            }}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );

  // --------------------------------------------------------------------------------
  // Desktop View JSX - Your Original Code with Animations
  // --------------------------------------------------------------------------------
  const desktopView = (
    <div className="w-full min-h-screen bg-white flex flex-col pb-32 font-lato">
      {/* Self-contained Header */}
      <motion.div
        className="w-full px-6 py-4 flex justify-between items-center shadow-md"
        style={{ backgroundColor: "#F8F1E9" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="https://placehold.co/100x40/E8D2C2/401323?text=Logo"
          alt="Company Logo"
          className="rounded"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="flex gap-4">
          <motion.button
            className="px-4 py-2 text-[#401323] font-bold rounded-lg border-2 border-[#401323] transition-colors duration-200"
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.05, backgroundColor: "#401323", color: "#fff" }}
            whileTap={buttonTap}
          >
            Sign In
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col text-center px-4 pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: "400",
            fontSize: "64px",
            color: "#A67950",
            lineHeight: "1.2",
            textAlign: "center",
          }}
          variants={itemVariants}
        >
          Take the First Step Toward
          <br />
          Advancing Your Robotic Surgery Skills
        </motion.h1>

        {/* Description */}
        <motion.p
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "400",
            fontSize: "20px",
            color: "#401323",
            lineHeight: "1.5",
            whiteSpace: "pre",
            textAlign: "center",
            marginTop: "1.5em",
          }}
          variants={itemVariants}
        >
          Please Complete the form below to enroll into our Comprehensive robotic surgery training programs, upon successful registration, our team<br />
          will reach out with program details, schedules, and next steps.
        </motion.p>

        {/* Form: Two Columns */}
        <motion.div
          style={{
            marginTop: "5em",
            display: "flex",
            gap: "80px",
            paddingLeft: "360px",
          }}
          variants={containerVariants}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="fullName"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  position: "absolute",
                  top: "-28px",
                  left: "0",
                }}
              >
                Full Name
              </label>
              <motion.input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="phoneNumber"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Phone Number
              </label>
              <motion.input
                id="phoneNumber"
                type="tel"
                placeholder="Enter Your Contact Number, with Country Code"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="experience"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Years of Experience
              </label>
              <motion.input
                id="experience"
                type="number"
                placeholder="Enter the Number of Years in Practice"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="callDateTime"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Preferred Call Date and Time
              </label>
              <motion.input
                id="callDateTime"
                type="datetime-local"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="currentProfession"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Current Profession
              </label>
              <motion.input
                id="currentProfession"
                type="text"
                placeholder="Enter Your Current Profession"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="learningGoals"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Any Specific Learning Goals or Comments?
              </label>
              <motion.textarea
                id="learningGoals"
                rows={4}
                placeholder="Enter Any Specific Learning Goals or Comments"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div
            style={{ display: "flex", flexDirection: "column", position: "relative", marginLeft: "300px" }}
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  position: "absolute",
                  top: "-28px",
                  left: "0",
                  textAlign: "left",
                }}
              >
                Email
              </label>
              <motion.input
                id="email"
                type="email"
                placeholder="Enter your email"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="dob"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Date of Birth
              </label>
              <motion.input
                id="dob"
                type="date"
                placeholder="Enter Your Date of Birth"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="institution"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                  textAlign: "left",
                }}
              >
                Affiliated Institution/Hospital
              </label>
              <motion.input
                id="institution"
                type="text"
                placeholder="Enter Your Current Place of Work"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="hearAboutUs"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  textAlign: "left",
                  marginBottom: "8px",
                }}
              >
                How Did You Hear About Us?
              </label>
              <motion.input
                id="hearAboutUs"
                type="text"
                placeholder="e.g., Conference, Social Media, Colleague"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="specialization"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  textAlign: "left",
                  marginBottom: "8px",
                }}
              >
                Specialization
              </label>
              <motion.input
                id="specialization"
                type="text"
                placeholder="Enter Your Specialization"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}
              variants={itemVariants}
            >
              <label
                htmlFor="uploadId"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#401323",
                  marginBottom: "8px",
                }}
              >
                Upload ID
              </label>
              <motion.input
                id="uploadId"
                type="file"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  width: "400px",
                  cursor: "pointer",
                }}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Select Core Training Programs */}
        <motion.div
          style={{
            marginTop: "5em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          variants={itemVariants}
        >
          <label
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              color: "#401323",
              marginBottom: "16px",
            }}
          >
            Select Core Training Program(s)
          </label>
          <div style={{ display: "flex", gap: "24px" }}>
            <motion.div
              style={{ display: "flex", alignItems: "center" }}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <input
                type="checkbox"
                id="surgeonTraining"
                name="trainingProgram"
                style={{ marginRight: "8px", accentColor: '#A67950' }}
              />
              <label
                htmlFor="surgeonTraining"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                }}
              >
                Surgeon Training
              </label>
            </motion.div>
            <motion.div
              style={{ display: "flex", alignItems: "center" }}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <input
                type="checkbox"
                id="surgicalStaffTraining"
                name="trainingProgram"
                style={{ marginRight: "8px", accentColor: '#A67950' }}
              />
              <label
                htmlFor="surgicalStaffTraining"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                }}
              >
                Surgical Staff Training
              </label>
            </motion.div>
            <motion.div
              style={{ display: "flex", alignItems: "center" }}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <input
                type="checkbox"
                id="anesthesiaTraining"
                name="trainingProgram"
                style={{ marginRight: "8px", accentColor: '#A67950' }}
              />
              <label
                htmlFor="anesthesiaTraining"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                }}
              >
                Anesthesia Training for Robotic Surgery
              </label>
            </motion.div>
          </div>
        </motion.div>

        {/* Select Additional Training Programs */}
        <motion.div
          style={{
            marginTop: "3em",
            padding: "24px",
            backgroundColor: "#F8F1E9",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          variants={itemVariants}
        >
          <label
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              color: "#401323",
              marginBottom: "16px",
            }}
          >
            Select Additional Training Program(s)
          </label>
          <div style={{ display: "flex", gap: "24px" }}>
            <motion.div
              style={{ display: "flex", alignItems: "center" }}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <input
                type="checkbox"
                id="surgeonTrainingAdditional"
                name="trainingProgramAdditional"
                style={{ marginRight: "8px", accentColor: '#A67950' }}
              />
              <label
                htmlFor="surgeonTrainingAdditional"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                }}
              >
                Surgeon Training
              </label>
            </motion.div>
            <motion.div
              style={{ display: "flex", alignItems: "center" }}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <input
                type="checkbox"
                id="surgicalStaffTrainingAdditional"
                name="trainingProgramAdditional"
                style={{ marginRight: "8px", accentColor: '#A67950' }}
              />
              <label
                htmlFor="surgicalStaffTrainingAdditional"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                }}
              >
                Surgical Staff Training
              </label>
            </motion.div>
            <motion.div
              style={{ display: "flex", alignItems: "center" }}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <input
                type="checkbox"
                id="anesthesiaTrainingAdditional"
                name="trainingProgramAdditional"
                style={{ marginRight: "8px", accentColor: '#A67950' }}
              />
              <label
                htmlFor="anesthesiaTrainingAdditional"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#401323",
                }}
              >
                Anesthesia Training for Robotic Surgery
              </label>
            </motion.div>
          </div>
        </motion.div>

        {/* Upload ID */}
        <motion.div
          style={{
            marginTop: "4em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "360px",
          }}
          variants={itemVariants}
        >
          <label
            htmlFor="uploadId"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              color: "#401323",
              marginBottom: "8px",
            }}
          >
            Upload ID
          </label>
          <motion.input
            id="uploadId"
            type="file"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              color: "#401323",
              padding: "12px 16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "400px",
              cursor: "pointer",
            }}
            whileHover={inputHover}
            whileFocus={inputFocus}
          />
        </motion.div>

        {/* Register Now Section */}
        <motion.div
          style={{
            marginTop: "4em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variants={itemVariants}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
              width: "400px",
            }}
          >
            <motion.input
              type="checkbox"
              id="termsAgree"
              style={{ marginRight: "8px", cursor: "pointer", accentColor: '#A67950' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <label
              htmlFor="termsAgree"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                color: "#401323",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              By clicking on “Register Now”, you agree to our{" "}
              <a
                href="#"
                style={{ color: "#3B82F6", cursor: "pointer" }}
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                style={{ color: "#3B82F6", cursor: "pointer" }}
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <motion.button
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              fontSize: "20px",
              color: "#fff",
              backgroundColor: "#A67950",
              padding: "16px 24px",
              border: "none",
              borderRadius: "9999px",
              width: "400px",
              cursor: "pointer",
            }}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );

  return <>{isMobile ? mobileView : desktopView}</>;
}