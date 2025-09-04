// app/api/register/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Save to MongoDB
    const newUser = await Registration.create(body);

    // Styled Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #401323;">📩 New Registration Form</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Full Name</b></td><td style="padding:8px; border:1px solid #ddd;">${body.fullName}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Email</b></td><td style="padding:8px; border:1px solid #ddd;">${body.email}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Phone Number</b></td><td style="padding:8px; border:1px solid #ddd;">${body.phoneNumber || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Date of Birth</b></td><td style="padding:8px; border:1px solid #ddd;">${body.dob || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Years of Experience</b></td><td style="padding:8px; border:1px solid #ddd;">${body.experience || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Institution</b></td><td style="padding:8px; border:1px solid #ddd;">${body.institution || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Preferred Call</b></td><td style="padding:8px; border:1px solid #ddd;">${body.callDateTime || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Heard About Us</b></td><td style="padding:8px; border:1px solid #ddd;">${body.hearAboutUs || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Profession</b></td><td style="padding:8px; border:1px solid #ddd;">${body.currentProfession || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Specialization</b></td><td style="padding:8px; border:1px solid #ddd;">${body.specialization || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Learning Goals</b></td><td style="padding:8px; border:1px solid #ddd;">${body.learningGoals || "-"}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Training Programs</b></td><td style="padding:8px; border:1px solid #ddd;">${(body.trainingPrograms || []).join(", ")}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd;"><b>Additional Programs</b></td><td style="padding:8px; border:1px solid #ddd;">${(body.additionalPrograms || []).join(", ")}</td></tr>
        </table>
      </div>
    `;

    // Send email
    await resend.emails.send({
      from: "Robotic Training <onboarding@resend.dev>",
      to: "puneetshukla041@gmail.com",
      subject: "📩 New Registration Received",
      html: htmlContent,
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error: unknown) {
    console.error("❌ Error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: "An unknown error occurred" }, { status: 500 });
  }
}