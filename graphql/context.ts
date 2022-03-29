import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient;
  setCookies: any;
  setHeaders: any;
  req: any;
};

export async function createContext(req: any, res: any): Promise<Context> {
  return {
    prisma,
    setCookies: new Array(),
    setHeaders: new Array(),
    req,
  };
}
