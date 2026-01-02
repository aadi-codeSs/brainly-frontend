import { extractYouTubeId } from "../utilis";

interface TypeOfContentProps {
  src: string,
  type: "yt" | "doc" | "tweet",
}


function TypeOfContent(props: TypeOfContentProps){
    
    if(props.type === "yt"){
        const videoId =  extractYouTubeId(props.src);
        if (videoId === null) return;
        const embedUrl =  `https://www.youtube.com/embed/${videoId}`;
        // console.log({ videoId, embedUrl });
        if (embedUrl === null ) return;
        return <>
        <iframe className='w-full h-full rounded-md' src={embedUrl} frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy={"strict-origin-when-cross-origin"} allowFullScreen></iframe>
        </>
    }

    if(props.type === "tweet"){
        let link = props.src;
        let xembedUrl = link.replace("x","twitter");
        console.log(link, xembedUrl)
        return <>
        <blockquote className="twitter-tweet">
        <a href={xembedUrl}></a> 
        </blockquote>
        </>
    }
    
    
}

export {TypeOfContent}