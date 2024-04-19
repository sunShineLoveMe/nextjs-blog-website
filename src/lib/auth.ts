import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./utils"
import { User } from "./models"
import { TUser } from "@/types/collections"

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    })],
    callbacks: {
        async signIn({user, account, profile}) {
            console.log(user, account, profile)
            if(account?.provider === 'github') {
                connectToDb()
                try {
                    const user = await User.findOne({ email: profile?.email }) as TUser;
                    if(!user) {
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
    }
})