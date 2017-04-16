/**
 * Created by korman on 14.04.17.
 */

import React from 'react';
// import Layout from './Layout';
import Coupon from './coupon/Coupon';
import CouponDetail from './coupon/CouponDetail';

import Event from './event/Event';
import EventDetail from './event/EventDetail';

import Product from './product/Product';
import ProductDetail from './product/ProductDetail';

import Shopper from './shopper/Shopper';
import ShopperDetail from './shopper/ShopperDetail';

import Sponsor from './sponsor/Sponsor';
import SponsorDetail from './sponsor/SponsorDetail';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { IndexRoute, Link } from 'react-router';

ReactDOM.render(
    <Router>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="btn-group" role="group">
                        <Link to="/coupons" className="btn btn-default btn-xs">Coupons</Link>
                        <Link to="/events" className="btn btn-default btn-xs">Events</Link>
                        <Link to="/products" className="btn btn-default btn-xs">Products</Link>
                        <Link to="/shoppers/1" className="btn btn-default btn-xs">Shoppers</Link>
                        <Link to="/sponsors" className="btn btn-default btn-xs">Sponsors</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Route path="/coupons" component={Coupon}/>
                    <Route path="/coupon/:id" component={CouponDetail}/>

                    <Route path="/events" component={Event}/>
                    <Route path="/event/:id" component={EventDetail}/>

                    <Route path="/products" component={Product}/>
                    <Route path="/product/:id" component={ProductDetail}/>

                    <Route path="/shoppers/:page" component={Shopper}/>
                    <Route path="/shopper/:id" component={ShopperDetail}/>

                    <Route path="/sponsors" component={Sponsor}/>
                    <Route path="/sponsor/:id" component={SponsorDetail}/>

                </div>

            </div>

        </div>
    </Router>,
    document.getElementById('app')
);
