import NextAuth, { DefaultSession, User, Account, CallbacksOptions } from "next-auth";
import { Session } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            isAdmin: boolean | unknown,
            id: string | unknown,
            userId: string,
        } & DefaultSession["user"]
    }
    interface User {
        isAdmin: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        isAdmin: boolean;
    }
}