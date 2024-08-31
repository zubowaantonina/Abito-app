import { sideArray } from "../../constants"
import { SideItem } from "../sideItem/SideItem"
export const SideList=()=>{
    return (
        <>
        {
            sideArray.map((item)=>(
              <SideItem
              key={item.id}
              title={item.title}
              img={item.img}
              text={item.text}
              />
            ))
           }
           </>
    )
}