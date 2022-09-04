import {useNavigate, useParams} from "react-router-dom";
import Line from "../components/Chart";

function SecondPages() {
  const navigate= useNavigate()
  const params = useParams()
  const Name = params.id?.toUpperCase()
  const onClick = () =>  navigate('/')

    
  return (
    <div className="">
     <div className="Head">
     <h1 className="Name ">{Name}</h1>
     <button className="btn" onClick={onClick}>Back to</button>
     </div>
     <div className="Chart">
     <Line />
     </div>
    </div>
    
  )
}

export default SecondPages