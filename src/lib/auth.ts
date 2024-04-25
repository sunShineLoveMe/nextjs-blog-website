import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils"
import { User } from "./models"
import { TUser } from "@/types/collections"
import bcrypt from "bcrypt"
import { authConfig } from "./auth.config"

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials: any) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return { error: "Something went wrong!" }
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // console.log(user, account, profile)
            if (account?.provider === 'github') {
                connectToDb()
                try {
                    const user = await User.findOne({ email: profile?.email }) as TUser;
                    if (!user) {
                        const newUser = {
                            username: profile?.login,
                            email: profile?.email,
                            img: profile?.avatar_url,
                        }
                        const userModel = new User(newUser);
                        await userModel.save()
                    }
                } catch (error) {
                    console.log(error)
                    return false
                }
            }
            return true
        },
        ...authConfig.callbacks
    }
})

export interface CredentialsProps {
    username: string;
    password: string;
}

const login = async(credentials: CredentialsProps) => {  
    try {
        connectToDb()
        const user = await User.findOne({ username: credentials.username });
        console.log(`user是否存在: ${user}`)
        if(!user) {
            throw new Error("Wrong credentials")
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if(!isPasswordCorrect) {
            throw new Error("Wrong credentials")
        }
        return user;
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!" }
    }
}

