import { Component } from "react";

class Carousel extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }
     img = "http://nickithcakepark.com/images/slider/1.jpg"
     img1 = "https://cdn.shopify.com/s/files/1/0884/4436/files/home-slider-slide-2_1024x1024.jpg"
     img2 = "https://p3y6v9e6.stackpathcdn.com/wp-content/uploads/zikoko/cloudinary/v1486037512/slider-cakes-cakebatterconfetti2_eaumqj.jpg"
    render() {
        return (   

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{marginTop:"4em"}}>
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     </ol>
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={this.img} class="d-block w-100" style={{height:"400px"}}   alt="..."></img>
    </div>
    <div class="carousel-item">
    <img src={this.img1} class="d-block w-100" style={{height:"400px" }} alt="..."></img>
    </div>
    <div class="carousel-item">
    <img src={this.img2} class="d-block w-100" style={{height:"400px" }} alt="..."></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>          


           
        )
    }
}

export default Carousel;