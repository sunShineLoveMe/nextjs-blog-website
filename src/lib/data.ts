import { TPost } from "@/app/blog/page";

const users = [
    {id: 1, name: 'john', username: 'john_doe'},
    {id: 2, name: 'jane', username: 'jane_doe'},
]

const posts: TPost[] = [
    { id: 1, title:'post 1', body: '...', userId: 1},
    { id: 2, title:'post 2', body: '...', userId: 1},
    { id: 3, title:'post 3', body: '...', userId: 2},
    { id: 4, title:'post 4', body: '...', userId: 2},
]

export const getPosts = async () => {
    return posts;
}

export const getPost = async (id: number) => {
    return posts.find(post => post.id === id);
}

export const getUser = async (id: number) => {
    return users.find(user => user.id === id);
}