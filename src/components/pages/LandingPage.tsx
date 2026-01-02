
import { Card } from "../Card";
import { SideBar } from "../SideBar";
import { DocTypeIcon } from "../../icons/TypeOfContentIcon";
import { CreateContentModal } from "../CreateContentModal";
import { useContent } from "../../hooks/useContent";

interface LandingpageProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Landingpage = (props: LandingpageProps) =>{

  const contents = useContent();
    return <div className='min-h-screen flex flex-col'>
      
     
     <div className="flex flex-wrap">
        {contents.map(({type, link, title, description}) => 
        <Card
        type={type}
        typeOfIcon={<DocTypeIcon type={type}/>}
        headerTitle={title}
        tag1="productivity"
        tag2="ideas"
        link={link}
        description={description}
        />
      )}
      </div>
      
     
      <CreateContentModal open={props.modalOpen} onClose={() => {
        props.setModalOpen(false);
      }}/>
      
    
    
    </div>
}