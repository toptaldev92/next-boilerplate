// #region Global Imports
import { Store } from "redux";
import { AppInitialProps, AppContext } from "next/app";
import { NextPageContext } from "next";
import { ThunkDispatch } from "redux-thunk";
// #endregion Global Imports

interface AppStore extends Store {
    dispatch: ThunkDispatch;
}

export interface AppWithStore extends AppInitialProps {
    store: AppStore;
}

export interface ReduxNextPageContext extends NextPageContext {
    store?: AppStore;
}

export interface AppContextWithStore extends AppContext {
    ctx: ReduxNextPageContext;
}
