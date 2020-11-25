import React from "react";
import PageLayout from "./PageLayout"

import "./App.css";
import {RecoilRoot} from "recoil";
import {StoreContext} from '../context';
import store from '../store';

const App = () =>
    <RecoilRoot>
        <StoreContext.Provider value={store}>
            <PageLayout/>
        </StoreContext.Provider>
    </RecoilRoot>

export default App;
