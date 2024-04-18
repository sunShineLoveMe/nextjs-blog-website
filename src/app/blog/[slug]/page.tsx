import Image from "next/image"
import styles from "./singlePost.module.css"
import { TPost } from "../page";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getData = async (slug: number) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//     if(!res.ok) {
//         throw new Error('Failed to fetch data');
//     }
//     return res.json();
// }

const SinglePostPage = async({params}: {params: {slug: number}}) => {
    // const post: TPost = await getData(params.slug);
    const post: TPost | undefined = await getPost(params.slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    fill
                    alt=""
                    src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={50}
                        height={50}
                    />
                    { post && <Suspense fallback={<div>Loading...</div>}>
                                <PostUser userId={post?.userId} />
                            </Suspense>}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post?.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage
