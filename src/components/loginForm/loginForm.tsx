"use client"

import { useFormState } from "react-dom"
import styles from "./loginForm.module.css"
import { login } from "@/lib/action"
import { useRouter } from "next/navigation"
import Link from "next/link"


const LoginForm = ()=> {

    const [state, formAction] = useFormState(login, {success: false})

    const router = useRouter()

    return (
        <div>
            <form className={styles.form} action={formAction}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login</button>
                {state?.error}
                <Link href="/register">
                    {"Do not have an account?"} <b>Register</b>
                </Link>
            </form>
        </div>
    )
}

export default LoginForm