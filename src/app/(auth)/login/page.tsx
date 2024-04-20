import { handleGithubLogin } from "@/lib/action"
import { login } from "@/lib/action"

const LoginPage = () => {
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <form action={login}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login with Credentials</button>
            </form>
        </div>
    )
}

export default LoginPage