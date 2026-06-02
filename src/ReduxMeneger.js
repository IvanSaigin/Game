import { useState, useRef } from "react";

const reduxManager = {
    store: null,
    listeners: new Map(),
    render: () => {
        reduxManager.listeners.forEach(listener => listener(Symbol()))
    }
}

export const useReduxState = () => {
    const [render, setRender] = useState(Symbol())
    const isSubscribed = useRef(render).current;

    reduxManager.listeners.set(isSubscribed, setRender)

    return reduxManager.store.getState()
}

export const useDispatch = () => (action) => {

    reduxManager.store.dispatch(action)
    reduxManager.render()

}


export const ReduxProvider = ({ children, store }) => {
    reduxManager.store = store;
    return children;
}