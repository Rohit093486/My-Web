import { useState, useEffect } from "react";
import Slider from "./Slider";
import axios from "axios";
import './Desh.css';
import { Link } from "react-router-dom";
// import Loader from "react-loader-spinnner";


function DashBoard() {  
  const [allCakes, setCakes] = useState([]); 
  // let [sortcake , setsortcake]= useState([]);

  useEffect(() => {
    
    axios({
      method: "get",
      url:"https://apifromashu.herokuapp.com/api/allcakes"
    }).then((response) => {      
     console.log(response.data);
    //  setsortcake(response.data.data)
      setCakes(response.data.data)
      // cake()

},
    (error) => {
        console.log(error);
     }
    
)
  }, [])

  
  let onbuton = () => {
    let bun = allCakes.sort((a, b) => {
      return (a.price - b.price)      
    })
    console.log(bun);
   }
  return (

      <div>
      <Slider />
      
      <div >
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 fixed-top" style={{top:"50px", backgroundColor:"#F7F2F2",zIndex:10}}>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h3 class="h2"  style={{color:"tomato" , fontFamily:"-moz-initial"}}>Dashboard</h3>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
              <Link to="/Addcake"> <button class="btn btn-sm btn-outline-secondary" style={{marginRight:'3em'}}>New cake</button></Link>
                <Link to="/dash"><button class="btn btn-sm btn-outline-secondary" onClick={onbuton}>Sort</button></Link>
                <button class="btn btn-sm btn-outline-secondary">Filter</button>
              </div>  
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>         
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead  style={{color:"tomato", fontFamily:"-moz-initial"}}>
                <tr >
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>                  
                </tr>
              </thead>              
            </table>
          </div>
        </main>     
        {         
          allCakes.map((each, index) => {
            return ( 
              <div>
                {/* <div style={{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}}><Loader type="ThreeDots" color="#2BAD60" height="100" width="100" /> </div>&& */}
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" style={{top:"200px"}}>
                        <div class="table-responsive" style={{alignItems:"center"}}>
                            <table class="table table-striped table-sm">
                            <tbody style={{padding:"10px"}}>
                                <tr >
                                <td style={{width:"50px"}}>{index+1}</td>
                                <td style={{width:"100px"}}><img src={each.image} style={{height:"50px",width:"50px"}}></img></td>
                                <td style={{width:"150px"}}>{each.name}</td>
                                <td style={{width:"100px"}}>{each.price}</td>
                                <td style={{width:"150px"}}>
                                <div> 
                                   <Link to="/productForm"><button  class="btn btn-secondary">+</button></Link>
                               <button class="btn btn-secondary">-</button>
                                 </div>
                             </td>
                           </tr>
                      </tbody>
                     </table>
                </div>
           </main>
              </div>
             )
              })
             }
       </div>
    </div>
  );
}

export default DashBoard;