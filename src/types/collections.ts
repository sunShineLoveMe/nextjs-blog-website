export interface TPost {
    id: string;
    userId: string;
    title?: string | null;
    desc?: string | null;
    slug?: string;
    img?: string | null;
}

export interface TUser {
    id: string;
    username: string;
    email?: string;
    isAdmin: boolean;
    password: string;
}

