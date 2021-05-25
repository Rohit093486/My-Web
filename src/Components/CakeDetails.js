import Details from "./Details";
import Loader from "react-loader-spinner";
import { useState, useEffect } from "react";

function CakeDetails(props){

  var [cakeresult, setCakes] = useState({});
  var [Loading ,setLoading]=useState(true)

    
    let qq= props.match.params.id;

    useEffect(() =>{
      
        var apiurl = "https://apifromashu.herokuapp.com/api/cake/"+qq;
            
        fetch(apiurl)
        .then(res => res.json())
        .then(
          (response) => {
            console.log('respoo',response)       
            setCakes(response.data);
            console.log(cakeresult)
            setLoading(false);
            
          })      

      }, [props.match.params.id]);  
     
  
  return (
    <div>
     {Loading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "16em"}}>
       <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />
       </div>}
    
      {!Loading && <div className="row">
        <Details cakedata={cakeresult} />
      </div>}
      </div>         
    
        
        )
    }


export default CakeDetails;