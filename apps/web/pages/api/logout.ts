import { clearUser } from "@/lib/cookies";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    clearUser(res);

    res.status(200).json({message:"Logged out"})
  } else {
    res.status(405).end()
  }
}