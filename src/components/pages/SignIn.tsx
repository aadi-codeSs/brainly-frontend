import { useRef } from "react"
import { Button } from "../ui/Button"
import { TextBox } from "../ui/TextBox"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Signin = () => {

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navToDash = useNavigate();
    
    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        })

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        alert("You have been signed in");
        navToDash("/dashboard")
        
    }

    return <div className="flex flex-col items-center justify-center min-h-screen min-w-screen ">
            <div className="flex flex-col gap-2">
                <TextBox ref={usernameRef} placeholder="username"/>
                <TextBox ref={passwordRef} placeholder="password"/>
                <Button onClick={signin} variant="primary" size="md" text="signin"/>
            </div>
    </div>
}