// pages/api/login.js en tu proyecto Next.js

import { client } from "@/lib/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { data } = await client.post(
        "http://localhost:3030/api/auth/login",
        req.body
      ); // Asume que tu servidor Nest.js está corriendo en el puerto 4000

      if (data && data.token) {
        res.setHeader(
          "Set-Cookie",
          `auth=${data.token}; HttpOnly; Path=/; Max-Age=3600`
        ); // Ajusta las opciones como quieras
      }

      res.status(200).json({ message: "Logged in" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong", cause: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
