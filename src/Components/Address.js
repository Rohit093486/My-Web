import React, { Component } from 'react'
import { connect } from 'react-redux';
class Address extends Component {  
  constructor(props) {
    super(props)
    this.state = {}    
}
  Delivery = 50;

  render() {      
      return (<div>
         <div class="row" >
    <div class="col-md-4 order-md-2 mb-4" style={{top:'8em'}}>
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <h4  style={{fontFamily:"cursive"}}>PRICE DETAILS</h4>
        <span class="badge badge-secondary badge-pill"></span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Price(2time)</h6>
            
          </div>
          <span class="text-muted">Rs 12</span>
              </li>              
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Delivery Charges</h6>            
          </div>
                <span class="text-muted">Rs {this.Delivery }</span>
        </li>        
        <li class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-success">
            <h6 class="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span class="text-success">Rs -5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total Amount</span>
          <strong>Rs 20</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code"></input>
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>
     {/* -----------------------------------------------------------------------------------------        */}
          {/* Addresss  */}
          

          <div class="col-md-8 order-md-1" style={{top:'6em',left:"1em" ,paddingBottom:"1em"}}>
          <h2  style={{fontFamily:"cursive"}}>Billing address</h2>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Full name</label>
                <input type="text" class="form-control" id="firstName" placeholder=""  required></input>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Mobil Number</label>
                <input type="number" class="form-control" id="lastName" placeholder=""  required></input>
                <div class="invalid-feedback">
                  Valid phone name is required.
                </div>
              </div>
            </div>      
    
            <div class="mb-3">
              <label for="email">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
    
            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required></input>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
    
            <div class="mb-3">
              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></input>
            </div>
    
            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required></input>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address"></input>
              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info"></input>
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr class="mb-4" />
    
            <h4 class="mb-3">Payment</h4>
    
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required></input>
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>              
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required></input>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required></input>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required></input>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-2" />
            <button class="btn btn-primary  btn-block" type="submit">Continue to checkout</button>
          </form>
          <footer></footer>
          </div>
        </div>
        </div>
            
        )
    }
}
export default connect()(Address)
