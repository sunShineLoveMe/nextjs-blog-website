"use client"

import { useFormState } from "react-dom"
import styles from "./registerForm.module.css"
import { register } from "@/lib/action"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


const RegisterForm = ()=> {

    const [state, formAction] = useFormState(register, undefined)

    const router = useRouter()

    useEffect(() => {
        state?.success && router.push("/login")
    }, [state.success, router])

    return (
        <div>
            <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="password again" name="passwordRepeat" />
            <button>Register</button>
        </form>
        </div>
    )
}

export default RegisterForm