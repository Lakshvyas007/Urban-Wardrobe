import Card from "./Card"
import { DATA } from "../constants"

const Body = () => {
  return (
    <div className="flex flex-wrap justify-evenly ">
        {
          DATA.map((item)=>{
            return <Card {...item} key={item.id}/>
          })
        }
      </div>
  )
}

export default Body