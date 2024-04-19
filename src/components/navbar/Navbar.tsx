import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth"
import { Session } from "next-auth/types"

const Narbar = async() => {
    const session = await auth() as Session
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links session={session} />
            </div>
        </div>
    )
}

export default Narbar