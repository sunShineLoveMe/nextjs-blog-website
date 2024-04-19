import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';
import { TPost } from "@/types/collections"

const getData = async(): Promise<TPost[] | null> => {
    const res = await fetch("http://localhost:3000/api/blog",{ next: { revalidate: 3600}})
    if(!res.ok) {
        throw new Error("Something went wrong")
    }
    return res.json()
}

const BlogPage: React.FC = async() => {
    
    const posts = await getData();
    // const posts = await getPosts();

    return (
        <div className={styles.container}>
            {
                posts?.map((post) => (
                    <div key={post.id} className={styles.post}>
                        <PostCard post={post} />
                    </div>
                ))
            }
        </div>
    )
}

export default BlogPage