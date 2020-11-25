import React from "react";
import PageLayout from "./PageLayout"

import "./App.css";
import {StoreContext} from '../context';
import store from '../store';

const App = () =>
    <StoreContext.Provider value={store}>
        <PageLayout/>
    </StoreContext.Provider>

export default App;
