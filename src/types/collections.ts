export interface TPost {
    id: string;
    userId: string;
    title?: string | null;
    desc?: string | null;
    slug?: string | null;
    img?: string | null;
    createdAt?: Date;
}

export interface TUser {
    id: string;
    username: string;
    email?: string;
    img?: string | null;
    isAdmin: boolean;
    password: string;
    createdAt?: Date;
}

export type FormData = {
    title?: string | null;
    desc?: string | null;
    slug: string;
    userId: string;
}

