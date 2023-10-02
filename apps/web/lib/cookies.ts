import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { IncomingMessage } from "http";
import { Employee } from "./types";
import { client } from "./axios";

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

export function authenticateUser(res: any, user: Employee): void {
  if (!user) return;

  //@ts-ignore
  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: "50min",
  });

  setCookie(res, "auth", token, cookieOptions);
}

export function clearUser(res: NextApiResponse): void {
  setCookie(res, "auth", "", {
    ...cookieOptions,
    path: "/",
    maxAge: 1,
  });
}

export async function userFromRequest(
  req: IncomingMessage & { cookies: NextApiRequestCookies }
): Promise<Employee | undefined> {
  const { auth: token } = req.cookies;

  if (!token) return undefined;

  try {
    //@ts-ignore
    const data = jwt.verify(token, SECRET_KEY);

    if (!data) return undefined;

    const { data: user } = await client.get('/api/auth/profile');

    if (user) user.password = "";

    return user;
  } catch (error) {
    return undefined;
  }
}