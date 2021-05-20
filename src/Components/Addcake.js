import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function Addcake() {
    const [imageSelected, setImageSelected] = useState("");
    const uploadImage = () => {        
        const formData = new FormData()
        formData.append("file",imageSelected)        
        axios.post("https://apifromashu.herokuapp.com/api/upload",formData,{
            headers:{"authtoken":localStorage.token}
        })
            .then((res) => {
            console.log(res);
        })
    }

    var NewCake = {}

    var userName=(event)=>{
      this.NewCake.name=event.target.value
   }   
   var weight=(event)=>{
      this.NewCake.weight=event.target.value
    }
    var description=(event)=>{
        this.NewCake.description=event.target.value
    }
    var ingredients=(event)=>{
        this.NewCake.ingredients=event.target.value
     }
     var category=(event)=>{
        this.NewCake.category=event.target.value
     }
     var eggless=(event)=>{
        this.NewCake.eggless=event.target.value
     }
     var price=(event)=>{
        this.NewCake.price=event.target.value
    }
    
    var save=(e)=>{
        e.preventDefault();
        console.log(NewCake)

    }
   
   return (
            <div>                
                <form style={{ marginTop: "4em", padding: "1.5em 28em", backgroundColor: "#F7F2F2" }}>
                <h3 style={{ backgroundColor: "#F7F2F2", color: "tomato" ,fontFamily:"monospace" }}>New cake </h3>
            <hr></hr>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Name</label>
    <input type="text" class="form-control" onChange={userName} style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group">
      <label for="validationTooltip04">Weight</label>
      <select class=" form-control" onChange={weight}  style={{height:"2em"}} id="validationTooltip04" required>
        <option selected disabled value="" onChange={weight} >Choose...</option>
                        <option>500 gm</option>
                        <option>1 kg</option>
                        <option>1.5 kg</option>
                    </select>
                </div>    
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Description</label>
    <input type="text" onChange={description}  class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Ingredients</label>
    <input type="text" onChange={ingredients}  class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Category</label>
    <input type="text" onChange={category}  class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>

                    <div class="form-group">
      <label for="validationTooltip04">Eggless</label>
      <select class=" form-control " onChange={eggless}  style={{height:"2em"}} id="validationTooltip04" required>
        <option selected disabled value="" onChange={eggless} >Choose...</option>
                        <option>True</option>
                        <option>False</option>                        
                    </select>
                    </div>
                    
                    <div class="form-group">
    <label for="price" style={{fontSize:"1.1em"}}>Price</label>
    <input type="number" onChange={userName}  style={{height:"2em"}} class="form-control"></input>
                    </div>                 
                    
                    <div class="form-group">
    <label for="exampleFormControlFile1" style={{fontSize:"1.1em",marginRight:"20em"}}>Cake Image:</label>
         <input type="file" onChange={price}  name="image" style={{ height: "2em" }} class="form-control-file" id="exampleFormControlFile1" onChange={(event) => {setImageSelected(event.target.files[0])}} style={{marginLeft:"17em",marginTop:"-2.4em"}}></input>
    <button  class="btn btn-link" onClick={uploadImage} style={{color:"black",backgroundColor:"#979A9A ", marginLeft:"25em",marginTop:"-3.1em"}} type="button" id="inputGroupFileAddon04">UPLOAD</button>
                    </div>
                  
  <button type="submit" class="btn btn-primary" onClick={save}>Save</button>
</form>  
      
            </div>
        )
    
}
export default Addcake;