import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: body.url
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to shorten URL" },
      { status: 500 }
    );
  }
}
