import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import axios from "axios";


 export async function POST(req: Request, res: Response){
  try{

  const body = await req.json();

  const { email } = body;

  if (typeof email !== "string" && !email) {
          return new NextResponse("Email needs to be string", { status: 400 });
      }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed'
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`
    }
  }
  
    const response = await axios.post(url, data, options)
    // if (response.status >= 400) {
    //  return new NextResponse("There was an error subscribing to the newsletter.", { status: 400 });
    // }



    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[SUBSCRIBE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

