import { connectToDb } from "./utils";
import { Post, User } from "./models"; 
import { TPost, TUser } from "@/types/collections"
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (): Promise<TPost[] | null> => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch posts!")
    }
}

export const getPost = async (slug: number): Promise<TPost | null> => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch post!")
    }
}

export const getUsers = async ():Promise<TUser[] | null> => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch users!")
    }
}

export const getUser = async (id: string) :Promise<TUser | null> => {
    noStore()
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch user!")
    }
}