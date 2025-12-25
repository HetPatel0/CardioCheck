import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("https://cardiocheck.onrender.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const prediction = await res.json();

  const response = NextResponse.json({ success: true });

  response.cookies.set("prediction", JSON.stringify(prediction), {
    httpOnly: true,   
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 5, 
    path: "/",
  });

  return response;
}
