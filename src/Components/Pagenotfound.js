import { Link } from "react-router-dom";

function Pagenotfound() {
  
  var image = "https://res.cloudinary.com/practicaldev/image/fetch/s--upMfnEaM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"
  return (
      <div style={{margin:"-1em 15em"}}>
        <div class="card mb-3 border-0">
            <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title">OPPS! PAGE NOT FOUND</h3>
                <p class="card-text">Sorry, It seems we can’t find what you’re looking for. Perhaps searching can help... </p>
                <p class="card-text"><Link to="/"><button type="button" class="btn btn-outline-primary">Return Home</button></Link></p>
                </div>
         </div>
      </div>    
  );
}
export default Pagenotfound;
