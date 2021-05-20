import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Slider from './Slider';
import CartSumary from './CartSumary';
import Checkout from './Checkout'
import Address from "./Address";

function Routes() {
    return (
        <div>
            <Checkout />
            <div>
        <BrowserRouter>
            <Slider />
            <Switch>
                <Route path="/cartsumary" exact component={CartSumary} />
                <Route path="/address" exact component={Address} />
                       
            </Switch>
            </BrowserRouter>
            </div>
            </div>
    )
}
export default Routes;