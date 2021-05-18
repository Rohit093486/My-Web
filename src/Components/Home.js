import { Component } from "react";
import Carousel from './Carousel';
import  cakes  from './Data';
import Cake from './Cake';
import axios from "axios";


class Home extends Component {
    constructor() {
        super()
        this.state = {
            cakes: []
        }
    }
    componentDidMount() {
        let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
        axios({
            url:apiurl,
            method: 'get'
        })
            .then((response) => {                    
                    console.log(response.data)
                    this.setState({
                        cakes: response.data.data
                    })
                },
                    (error) => {
                        console.log(error);
                    }
                )
        
    }   
     
    render() {
            return(
                    <div>
                        <Carousel></Carousel>
                        <div className="row">
                            {
                                this.state.cakes.map((each, index) => {
                                    return <Cake key={index} cakedata={each} />
                                })
                            }
                        </div>
                    </div>
                )
    }

}
export default Home;