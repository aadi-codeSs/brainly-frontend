import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
    const [contents, setContents] = useState([]);


    function refreshAndGet  ()  {
         axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            setContents(response.data.contentArray ?? response.data.content ?? [])
        })
    }

    useEffect(() => {
       refreshAndGet()
        let interval = setInterval(() => {
            refreshAndGet()
        }, 10 * 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return {contents, refreshAndGet};
}