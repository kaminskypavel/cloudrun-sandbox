// eslint-disable-next-line import/no-anonymous-default-export
import React from "react";
import {StoreContext} from "../context";


export const useStore =  () => {
    const store = React.useContext(StoreContext);
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.');
    }

    return store;
};
