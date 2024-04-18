"use client";

import { useState } from "react"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import Image from "next/image";

export type Tlink = {
    title: string,
    path: string
}

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contract",
        path: "/contract"
    },
    {
        title: "Blog",
        path: "/blog"
    }
]

const Links = () =>{

    const [open, setOpen] = useState<boolean>(false)
    const session = true
    const isAdmin = true

    return (
        <div className={styles.containter}>
            <div className={styles.links}>
                { links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {
                    session ? (
                        <>
                            { isAdmin && <NavLink item = { { title: "Admin", path: '/admin' }} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item = { { title: "Login", path: '/login' }} />
                    )
                }
            </div>
            
            <Image 
                src="/menu.png" 
                className={styles.memuButton}
                alt="" width={30} height={30} 
                onClick={() => setOpen((prev) => !prev)}/> 
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {
                            links.map((link) => (
                                <NavLink item={link} key={link.title} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Links