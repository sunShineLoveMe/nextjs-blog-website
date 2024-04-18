export interface TPost {
    id: string;
    userId: string;
    title?: string | null;
    desc?: string | null;
    slug?: string;
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

