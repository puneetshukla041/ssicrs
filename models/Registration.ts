import mongoose, { Schema, Document } from "mongoose";

export interface IRegistration extends Document {
  fullName: string;
  email: string;
  phoneNumber: string;
  dob: Date;
  experience: number;
  institution: string;
  callDateTime: Date;
  hearAboutUs: string;
  currentProfession: string;
  specialization: string;
  learningGoals: string;
  trainingPrograms: string[];
  additionalPrograms: string[];
  uploadId?: string;
}

const RegistrationSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    dob: { type: Date },
    experience: { type: Number },
    institution: { type: String },
    callDateTime: { type: Date },
    hearAboutUs: { type: String },
    currentProfession: { type: String },
    specialization: { type: String },
    learningGoals: { type: String },
    trainingPrograms: [{ type: String }],
    additionalPrograms: [{ type: String }],
    uploadId: { type: String },
  },
  { timestamps: true }
);

// 👇 Force collection name = "registrations"
export default mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", RegistrationSchema, "registrations");
