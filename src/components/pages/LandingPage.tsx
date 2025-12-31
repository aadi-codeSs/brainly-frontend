
import { Card } from "../Card";
import { SideBar } from "../SideBar";
import { DocTypeIcon } from "../../icons/TypeOfContentIcon";
import { CreateContentModal } from "../CreateContentModal";

interface LandingpageProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Landingpage = (props: LandingpageProps) =>{
    return <div className='min-h-screen flex flex-col'>
      
     
     <div className='flex'>
        <Card
        type="yt"
        typeOfIcon={<DocTypeIcon type='doc' />}
        headerTitle='Lorem ipsum dolor sit amet, consectetuer adip'
        tag1='#productivity' tag2='#ideas' 
        date='12/12/2025' 
        link="https://youtu.be/V7-vRoLgccY"
        description=''
      />
       <Card
        type="tweet"
        typeOfIcon={<DocTypeIcon type='doc' />}
        headerTitle='Lorem ipsum dolor sit amet, consectetuer adip'
        tag1='#productivity' tag2='#ideas' 
        date='12/12/2025' 
        link="https://x.com/diwanshu_28/status/2004433554508599706"
        description=''
      />
      <Card
        type="yt"
        typeOfIcon={<DocTypeIcon type='doc' />}
        headerTitle='Lorem ipsum dolor sit amet, consectetuer adip'
        tag1='#productivity' tag2='#ideas' 
        date='12/12/2025' 
        link="https://youtu.be/Ecs-foVS74Q"
        description=''
      />
      <Card
        type="tweet"
        typeOfIcon={<DocTypeIcon type='doc' />}
        headerTitle='Lorem ipsum dolor sit amet, consectetuer adip'
        tag1='#productivity' tag2='#ideas' 
        date='12/12/2025' 
        link="https://x.com/_kavericodes/status/2004245376615043367"
        description=''
      />
     </div>
      <CreateContentModal open={props.modalOpen} onClose={() => {
        props.setModalOpen(false);
      }}/>
      
    
    
    </div>
}