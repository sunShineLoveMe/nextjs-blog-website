"use server";

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import bcrypt from "bcrypt";

export const addPost = async(formData: FormData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save(newPost);
        console.log("saved to DB")
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!"}
    }
}

export const addUser = async(formData: FormData) => {
    const { username, email, password, img } = Object.fromEntries(formData);
    try {
        connectToDb()
        const newUser = new User({
            username,
            email,
            password,
            img
        })
        await newUser.save(newUser);
        console.log("saved to DB")
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!"}
    }
}

export const deletePost = async(formData: FormData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb()
        
        await Post.findByIdAndDelete(id)
        console.log("deleted from DB")
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!"}
    }
}

export const deleteUser = async(formData: FormData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb()
        
        await Post.deleteMany({userId: id})
        await User.findByIdAndDelete(id)
        // console.log("deleted from DB")
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!"}
    }
}

export const handleGithubLogin = async() => {
    "use server"
    await signIn("github")
}

export const handleLogout = async() => {
    "use server"
    await signOut()
}

type validateRegisterStatusType = {
    error?: string;
    success?: boolean;
}

type validateLoginType = {
    error?: string;
    success?: boolean;
}

export const register = async(previousState: validateRegisterStatusType, formData: FormData) => {
    const { username, email, password, img, passwordRepeat } =
         Object.fromEntries(formData);

    if(password !== passwordRepeat) {
        return {error: "Password do not match!"}
        // throw new Error("Password do not match!")
    }

    try {
        connectToDb()
        const user = await User.findOne({ username})

        if(user) {
            return {error: "User already exists!"}
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password as string, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img
        })

        await newUser.save()
        // console.log("saved to Db")
        return { success: true }
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!"}
    }
}

export const login = async(previousState: validateLoginType, formData: FormData) => {
    const { username, password } = Object.fromEntries(formData)

    try {
        await signIn("credentials", {
            username,
            password
        })
        return { success: true }
    } catch (error: any) {
        // console.log(error)
        if(error.message.includes("Wrong credentials")) {
            return { error: "Invalid username or password"}
        }
        // return { error: "Something went wrong!"}
        throw error
    }
}

