"use server";

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

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
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong!"}
    }
}