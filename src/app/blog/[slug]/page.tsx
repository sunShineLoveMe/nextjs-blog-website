import Image from "next/image"
import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css"
import { getPost } from "@/lib/data";
import { Suspense } from "react";


const SinglePostPage = async({params}: {params: {slug: number}}) => {
    const post = await getPost(params.slug);

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
