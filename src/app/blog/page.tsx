import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

const BlogPage: React.FC = async() => {
    
    // const posts: TPosts = await getData();
    const posts = await getPosts();

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