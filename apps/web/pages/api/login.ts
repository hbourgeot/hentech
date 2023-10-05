// pages/api/login.js en tu proyecto Next.js

import { client } from "@/lib/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { data } = await client.post("/api/auth/login", req.body);
      console.log(data);
      if (data?.status === 400) {
        res.status(400).json({ message: "Invalid email or password" });
      }

      if (data && data.token) {
        res.setHeader(
          "Set-Cookie",
          `auth=${data.token}; HttpOnly; Path=/; Max-Age=3600`
        ); // Ajusta las opciones como quieras
      }

      res.status(200).json({ message: "Logged in" });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (e) {
    console.log(e);
  }
}
