import { useRef } from "react"
import { Button } from "../ui/Button"
import { TextBox } from "../ui/TextBox"
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const Signup = () => {

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    
    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password
        })
        alert("You have signed up")
    }

    return <div className="flex flex-col items-center justify-center min-h-screen min-w-screen ">
            <div className="flex flex-col gap-2">
                <TextBox ref={usernameRef} placeholder="username"/>
                <TextBox ref={passwordRef} placeholder="password"/>
                <Button onClick={signup} variant="primary" size="md" text="signup"/>
            </div>
    </div>
}