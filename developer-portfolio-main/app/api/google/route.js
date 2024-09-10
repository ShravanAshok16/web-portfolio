import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const reqBody = await request.json();
  const secret_key = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  if (!secret_key) {
    return NextResponse.json({
      error: "ReCAPTCHA secret key is missing.",
      success: false,
    }, { status: 500 });
  }

  try {
    const url = 'https://www.google.com/recaptcha/api/siteverify';
    const res = await axios.post(url, null, {
      params: {
        secret: secret_key,
        response: reqBody.token
      }
    });

    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!",
        success: true,
      });
    } else {
      return NextResponse.json({
        error: "Captcha verification failed!",
        success: false,
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error.response?.data || error.message);
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
  }
}
