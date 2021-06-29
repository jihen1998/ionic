import {React} from "react";
import App from "../App";
import {IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Route,Redirect} from "react-router-dom";
import { IonReactRouter } from '@ionic/react-router';
import '../css/Home.scss' ;
import Cart from "./Cart";
import Listing from "./Listing";
import Detail from "./Detail";
import { CartOutline } from 'react-ionicons'
import styled from "styled-components";
function Home() {
    return (<div>
        <IonTabs>
            <IonRouterOutlet>
                <IonReactRouter>

                <Route path="/cart" component={Cart} exact={true} />
                <Route path="/listing" component={Listing} exact={true} />
                <Route path="/detail" component={Detail} />
                    <Redirect exact from="" to="/listing" /></IonReactRouter>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="listing">
                    <CartOutline
                        color={'#00000'}
                        height="50px"
                        width="50px"
                    />
                </IonTabButton>
                <IonTabButton tab="location">
                    <IonIcon name="d-location"></IonIcon>
                </IonTabButton>
                <IonTabButton tab="wishlist">
                    <IonIcon name="d-heart"></IonIcon>
                </IonTabButton>
                <IonTabButton tab="cart">
                    <IonIcon name="d-cart"></IonIcon>
                </IonTabButton>
            </IonTabBar>

        </IonTabs>
    </div>);
}
export default Home;
