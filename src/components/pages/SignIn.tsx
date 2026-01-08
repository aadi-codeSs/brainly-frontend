import { useRef } from "react"
import { Button } from "../ui/Button"
import { TextBox } from "../ui/TextBox"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Link, Navigate, useNavigate } from "react-router-dom";
import loginingImage from "../../images/logining-image.png";
import { Logo } from "../ui/Logo";
import { BrainIcon } from "../../icons/BrainIcon";


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



    return <div className="flex items-center justify-center min-w-screen min-h-screen gap-2">
        <div className="w-1/2 flex items-center justify-center min-w-50vh">
            <div className=" w-1/2 flex flex-col gap-4">
                
                <div className="flex items-center justify-center">
                <Logo logoIcon={<BrainIcon/>} logoName='Second Brain' size='sm'></Logo>
                </div>

                <div className="flex flex-col gap-2">
                <TextBox ref={usernameRef} placeholder="username"/>
                <TextBox ref={passwordRef} placeholder="password"/>
                </div>
                <div className="flex flex-col">
                <Button onClick={signin} variant="primary" size="md" text="signin" textStyle="flex items-center justify-center"/>
                <div className=" font-satoshi text-[13px] text-[#7e7e7f] ml-2">
                    No Account? 
                    <Link to={"/signup"}>
                    <span className="text-primary cursor-pointer"> SignUp</span>
                    </Link> 
                </div>
                </div>
            </div>
    </div>
    <div className="w-1/2 flex">
        <img src={loginingImage} alt="Sign in illustration" className="max-w-2xl rounded-2xl" />
    </div>
    </div>
}