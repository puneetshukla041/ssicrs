// faculty-card-page.tsx
import React from 'react';
import Image from 'next/image';

// Interface for a single faculty member
interface Faculty {
  name: string;
  title: string;
  details: string;
  image: string;
}

// Dummy data for all faculty members (you can expand this list)
const facultyMembers: Faculty[] = [
  {
    name: "Sudhir Srivastava, MD",
    title: "Founder, Chairman, CEO - SSICRS",
    details: "Robotic Cardiac Surgeon | Surgical Robotics Pioneer | Industry Leader",
    image: "/Images/homepage/section7/image1.png",
  },
  {
    name: "Dr. Husam Balkhy",
    title: "MBBS, MS, FACS, FACC",
    details: "The University of Chicago Medicine and Biological Sciences Chicago, IL, USA",
    image: "/Images/homepage/section7/image6.png",
  },
    {
    name: "Dr. T Sloane Guy",
    title: "MBA, MS. FACC",
    details: "Georgia Heart Institute,Gainesville, GA",
    image: "/Images/homepage/section7/image7.png",
  },
      {
    name: "Dr. Nirav Patel",
    title: "MBBS, MS, FRCS",
    details: "Lenox Hill Hospital, New York, NY, USA",
    image: "/Images/homepage/section7/image8.png",
  },
        {
    name: "Dr. Gianluca Torregrossa ",
    title: "MBBS, MS",
    details: "Lankenau Heart Institute,Philidelphia, PA, USA",
    image: "/Images/homepage/section7/image9.png",
  },
          {
    name: "Dr. Frank van Praet ",
    title: "MS, FETCS",
    details: "Co-Director of Cardiovascular Center AZorg, Aalst, Belgium",
    image: "/Images/homepage/section7/image10.png",
    
  },
            {
    name: "Dr. Wouter Oosterlinck ",
    title: "MD, PhD",
    details: "Cardiac Surgery Professor, University Hospitals, Leuven, Belgium",
    image: "/Images/homepage/section7/image11.png",
    
  },
              {
    name: "Dr. Bob Kiaii ",
    title: "BSc, MD, FRCSC, FACS",
    details: "Chief of Section of Cardiac Surgery, Department of Cardiac Sciences, Foothills Medical Centre, Libin Cardiovascular Institute, University of Calgary",
    image: "/Images/homepage/section7/image12.png",
    
  },
                {
    name: "Dr. Johannes Oliver Bonatti",
    title: "MBBS, MS",
    details: "University of Pittsburgh Medical Center, Pittsburg, PA, USA",
    image: "/Images/homepage/section7/image13.png",
    
  },
  {
    name: "Dr. Nitin Kumar Rajput",
    title: "MCH (Cardiothoracic and Vascular Surgery), MS (General Surgery)",
    details: "Associate Director - Cardiac Surgery | Medanta, The Medicity - Gurugram, Haryana",
    image: "/Images/homepage/section7/image4.png",
  },
  {
    name: "Sudhir K Rawal, MD",
    title: "MBBS, MS, M.Ch, D.N.B (Urology)",
    details: "Medical Director and Chief of GenitoUro – Oncology Services | Rajiv Gandhi Cancer Institute and Research Center, New Delhi",
    image: "/Images/homepage/section7/image2.png",
  },
  {
    name: "Prof. Dr. Somashekhar SP",
    title: "MBBS, MS, MCh (Onco), FRCS Edinburgh",
    details: "Chairman - Medical Advisory Board | Aster DM Healthcare - GCC & India",
    image: "/Images/homepage/section7/image3.png",
  },
  // Add more faculty members here
];

// Interface for FacultyCard props
interface FacultyCardProps {
  faculty: Faculty;
}

// Component for a single faculty card
const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => (
  <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <Image
      src={faculty.image}
      alt={faculty.name}
      width={373}
      height={378}
      className="rounded-xl w-full h-auto max-w-[280px] aspect-square object-cover mb-4 border-4 border-[#A67950]"
      priority={true} // Good for profiles that load on the main faculty page
    />
    <h3
      className="mt-4 text-xl font-bold"
      style={{
        fontFamily: "DM Serif Text, serif",
        fontWeight: 400,
        color: "#401323",
      }}
    >
      {faculty.name}
    </h3>
    <p
      className="mt-1 text-sm italic"
      style={{
        fontFamily: "Lato, sans-serif",
        color: "#D2A073",
      }}
    >
      {faculty.title}
    </p>
    <p
      className="mt-3 text-base font-medium"
      style={{
        fontFamily: "Lato, sans-serif",
        color: "#A67950",
        lineHeight: "1.5",
      }}
    >
      {faculty.details}
    </p>
  </div>
);


const FacultyCardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1
          className="text-5xl font-extrabold sm:text-6xl"
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 530,
            color: "#A67950",
          }}
        >
          Meet Our Expert Faculty 
        </h1>
        <p className="mt-4 text-xl text-gray-600" style={{ fontFamily: "Lato, sans-serif" }}>
          Pioneers and leaders in the field of surgical robotics.
        </p>
      </header>

      {/* Faculty Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {facultyMembers.map((faculty, index) => (
          <FacultyCard key={index} faculty={faculty} />
        ))}
      </div>
    </div>
  );
};

export default FacultyCardPage;