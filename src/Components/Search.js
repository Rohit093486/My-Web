import { useState, useEffect } from "react";
import Cake from "./Cake";
import Loader from "react-loader-spinner";
import queryString from "query-string";
import axios from "axios";

function Search(props) {  
  var [cakeresult, setCakes] = useState([]);
  var [Loading ,setLoading ]=useState(false)
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    setLoading(true);
    axios({
      method:"get",
      url: apiurl,
    }).then(
      (response) => {
        // toast("Your Cakes");            
        console.log(response);
        setCakes(response.data.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
      
    );
  }, [query.q]);
  var image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHRWfsD4kVgdyWurO1mtDi2PJtVhgiA8IYQ&usqp=CAU"

  return (
    <div>    
      <div className="row" style={{ marginTop: "4em" }}>
      {Loading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "16em" }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />
                    </div>}
        
      {!Loading&&cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
        {!Loading&&cakeresult.length<=0 && 
          <div class="card border-0" style={{marginLeft:"20em",marginTop:"10em"}}>
          <div class="card mb-3 border-0 " style={{maxWidth: "700px"}}>
  <div class="row no-gutters ">
    <div class="col-md-4">
      <img src={image} alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <b class="card-title">Oop!</b>
        <p class="card-text">Sorry, no results found!</p>
        <h4>Please check the spelling or try searching for something else</h4>
      </div>    
  </div>
            </div>
            </div>                
                </div>}
      
      </div>
    </div>
  );
}

export default Search;