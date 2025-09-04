"use client";

export default function RegisterPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Self-contained Header */}
      <div className="w-full px-6 py-4 flex justify-between items-center" style={{ backgroundColor: '#F8F1E9' }}>
        <img
          src="https://placehold.co/100x40/E8D2C2/401323?text=Logo"
          alt="Company Logo"
          className="rounded"
        />
        <div className="flex gap-4">
          <button className="px-4 py-2 text-[#401323] font-bold rounded-lg border-2 border-[#401323]" style={{ cursor: 'pointer' }}>Sign In</button>
        </div>
      </div>

      <div className="flex flex-col text-center px-4 pt-32">
        {/* Heading */}
        <h1
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: "400",
            fontSize: "64px",
            color: "#A67950",
            lineHeight: "1.2",
            textAlign: "center",
          }}
        >
          Take the First Step Toward<br />
          Advancing Your Robotic Surgery Skills
        </h1>

        {/* Description */}
        <p
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
        >
          Please Complete the form below to enroll into our Comprehensive robotic surgery training programs, upon successful registration, our team<br />
          will reach out with program details, schedules, and next steps.
        </p>

        {/* Form: Two Columns */}
        <div
          style={{
            marginTop: "5em",
            display: "flex",
            gap: "80px",
            paddingLeft: "360px",
          }}
        >
          {/* Left Column: Full Name + Phone + YOE + Preferred Call Date/Time + Current Profession + Learning Goals */}
          <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
            {/* Full Name */}
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
            <input
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
            />

            {/* Phone Number */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>

            {/* Years of Experience */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>

            {/* Preferred Call Date and Time */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>

            {/* Current Profession */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>

{/* Any Specific Learning Goals or Comments? */}
<div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
  <textarea
    id="learningGoals"
    rows={4} // <-- lowercase and using JSX braces
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
  />
</div>

          </div>

          {/* Right Column: Email + DOB + Affiliated Institution + How Did You Hear About Us? + Specialization */}
          <div style={{ display: "flex", flexDirection: "column", position: "relative", marginLeft: "300px" }}>
            {/* Email */}
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
            <input
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
            />

            {/* Date of Birth */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>

            {/* Affiliated Institution/Hospital */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>

            {/* How Did You Hear About Us? */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>

            {/* Specialization */}
            <div style={{ marginTop: "4em", display: "flex", flexDirection: "column" }}>
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
              <input
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
              />
            </div>
          </div>
        </div>

        {/* Select Core Training Programs */}
        <div style={{ marginTop: "5em", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="surgeonTraining" name="trainingProgram" style={{ marginRight: "8px" }} />
              <label htmlFor="surgeonTraining" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323" }}>Surgeon Training</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="surgicalStaffTraining" name="trainingProgram" style={{ marginRight: "8px" }} />
              <label htmlFor="surgicalStaffTraining" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323" }}>Surgical Staff Training</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="anesthesiaTraining" name="trainingProgram" style={{ marginRight: "8px" }} />
              <label htmlFor="anesthesiaTraining" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323" }}>Anesthesia Training for Robotic Surgery</label>
            </div>
          </div>
        </div>

        {/* Select Additional Training Programs */}
        <div style={{ marginTop: "3em", padding: "24px", backgroundColor: "#F8F1E9", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="surgeonTrainingAdditional" name="trainingProgramAdditional" style={{ marginRight: "8px" }} />
              <label htmlFor="surgeonTrainingAdditional" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323" }}>Surgeon Training</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="surgicalStaffTrainingAdditional" name="trainingProgramAdditional" style={{ marginRight: "8px" }} />
              <label htmlFor="surgicalStaffTrainingAdditional" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323" }}>Surgical Staff Training</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="anesthesiaTrainingAdditional" name="trainingProgramAdditional" style={{ marginRight: "8px" }} />
              <label htmlFor="anesthesiaTrainingAdditional" style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "18px", color: "#401323" }}>Anesthesia Training for Robotic Surgery</label>
            </div>
          </div>
        </div>

        {/* Upload ID */}
        <div style={{ marginTop: "4em", display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "360px" }}>
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
          <input
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
          />
        </div>

        {/* Register Now Section */}
        <div style={{ marginTop: "4em", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', width: '400px' }}>
            <input type="checkbox" id="termsAgree" style={{ marginRight: '8px', cursor: 'pointer' }} />
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
              <a href="#" style={{ color: "#3B82F6", cursor: "pointer" }}>Terms and Conditions</a> and{" "}
              <a href="#" style={{ color: "#3B82F6", cursor: "pointer" }}>Privacy Policy</a>.
            </label>
          </div>
          <button
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
          >
            Register Now
          </button>
        </div>

      </div>
    </div>
  );
}
