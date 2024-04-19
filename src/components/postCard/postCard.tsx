import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"
import { TPost } from "@/types/collections"

const PostCard = ({post}: {post: TPost}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
          {
            post.img && <div className={styles.imgContainer}>
            <Image 
                src={post.img} 
                alt="" 
                fill 
                className={styles.img}/>
          </div>
          }
          <span className={styles.date}>01.01.2024</span>
      </div>
      <div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard