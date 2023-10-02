import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { IncomingMessage } from "http";
import { Employee } from "./types";

const { JWT_TOKEN_KEY } = process.env;
const cookieOptions = {
  httpOnly: true,
  maxAge: 2592000,
  path: "/",
  sameSite: "Strict",
  secure: process.env.NODE_ENV === "production",
};

const {SECRET_KEY} = process.env

function setCookie(
  res: any,
  name: string,
  value: string,
  options: Record<string, unknown> = {}
): void {
  const stringValue =
    typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);
console.log(typeof res);
  res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
}

export function authenticateUser(res: NextApiResponse, user: Employee): void {
  if (!user) return;

  //@ts-ignore
  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: "50min",
  });

  setCookie(res, "access_token", token, cookieOptions);
}

export function clearUser(res: NextApiResponse): void {
  setCookie(res, "access_token", "0", {
    ...cookieOptions,
    path: "/",
    maxAge: 1,
  });
}