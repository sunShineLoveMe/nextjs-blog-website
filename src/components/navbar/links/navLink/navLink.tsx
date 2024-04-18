"use client";

import { usePathname } from "next/navigation"
import { Tlink } from "../Links"
import styles from "./navLink.module.css"
import Link from "next/link"

const NavLink = ({item}: {item: Tlink}) => {

    const pathName = usePathname()    

    return (
        <Link 
            href = {item.path}
            className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.title}
        </Link>
    )
}

export default NavLink