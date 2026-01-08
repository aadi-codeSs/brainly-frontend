
import { Card } from "../Card";
import { SideBar } from "../SideBar";
import { DocTypeIcon } from "../../icons/TypeOfContentIcon";
import { CreateContentModal } from "../CreateContentModal";
import { useContent } from "../../hooks/useContent";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

interface LandingpageProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Landingpage = (props: LandingpageProps) =>{

  const {contents, refreshAndGet} = useContent();

  async function deleteContent(contentId: string){
      try{
        await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          "Authorization": localStorage.getItem("token")
        },
        data: {
          contentId: contentId
        }
      })
      }
      catch(error){
        alert("failed to delete");
        console.log(error);
      }
      alert("content deleted")
  }

  useEffect(() => {
    refreshAndGet();
  }, [props.modalOpen])


    return <div className='min-h-screen flex flex-col'>
      
     
     <div className="flex flex-wrap">
        {contents.map(({type, link, title, description, _id}) => 
        <Card
        type={type}
        typeOfIcon={<DocTypeIcon type={type}/>}
        headerTitle={title}
        tag1="productivity"
        tag2="ideas"
        link={link}
        description={description}
        contentId = {_id}
        deleteFn = {deleteContent}
        />
      )}
      </div>
      
     
      <CreateContentModal open={props.modalOpen} onClose={() => {
        props.setModalOpen(false);
      }}/>
      
    
    
    </div>
}