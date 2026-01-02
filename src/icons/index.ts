import { BACKEND_URL } from "../config"
import axios from "axios"

export interface IconProps {
    size: "sm" | "md" | "lg" | "base"
}

export const iconSizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "base": "size-5",
    "lg": "size-6",
}


export async function shareFn () {
        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            share: true
        },{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        const shareURL = `http://localhost:5173/share/${response.data.hash}`;
        alert(shareURL)
}

