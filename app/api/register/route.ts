import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newUser = await Registration.create(body);
    return NextResponse.json({ success: true, user: newUser });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
