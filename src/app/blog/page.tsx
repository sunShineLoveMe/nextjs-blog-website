import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

// const getData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 3600}});
//     if(!res.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     return res.json();
// }

export type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type TPosts = TPost[];

const BlogPage: React.FC = async() => {
    
    // const posts: TPosts = await getData();
    const posts: TPosts = await getPosts();

    return (
        <div className={styles.container}>
            {
                posts.map((post) => (
                    <div key={post.id} className={styles.post}>
                        <PostCard post={post} />
                    </div>
                ))
            }
        </div>
    )
}

export default BlogPage