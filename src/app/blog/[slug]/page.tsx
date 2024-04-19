import Image from "next/image"
import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css"
import { getPost } from "@/lib/data";
import { Suspense } from "react";
import { TPost } from "@/types/collections"

const getData = async(slug:string): Promise<TPost | null> => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
    if(!res.ok) {
        throw new Error("Something went wrong")
    }
    return res.json()
}

export const generateMetadata = async({params} : {params: {slug: string}}) => {
    const { slug } = params;
    const post = await getData(slug)

    return {
        title: post?.title,
        description: post?.desc
    }
}

const SinglePostPage = async({params}: {params: {slug: string}}) => {
    const { slug } = params
    const post = await getData(slug)

    return (
        <div className={styles.container}>
            {post?.img && (
                <div className={styles.imgContainer}>
                    <Image 
                        fill
                        alt=""
                        src={post.img} />
                </div>
            )}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    
                    { post && <Suspense fallback={<div>Loading...</div>}>
                                <PostUser userId={post?.userId} />
                            </Suspense>}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post?.createdAt?.toString().slice(0, 16)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post?.desc}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage
