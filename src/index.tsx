import '@epam/uui-components/styles.css';
import '@epam/uui/styles.css';
import './index.module.scss';
import './assets/theme/theme-faraway.scss';
//
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { DragGhost, HistoryAdaptedRouter, useUuiServices, UuiContext, IProcessRequest } from "@epam/uui-core";

import { Modals, Snackbar } from "@epam/uui-components";
import App from "./App";
import { getApi } from "./api";
import { ORIGIN } from "./constants/routes";

const history = createBrowserHistory();
const router = new HistoryAdaptedRouter(history);
function apiDefinition(processRequest: IProcessRequest) {
    return getApi({ processRequest, origin: ORIGIN, fetchOptions: { credentials: undefined } });
}

function UuiEnhancedApp() {
    const { services } = useUuiServices({ apiDefinition, router });
    return (
        <UuiContext.Provider value={ services }>
            <Router history={history}>
                <App />
            </Router>
            <Snackbar />
            <Modals />
            <DragGhost />
        </UuiContext.Provider>
    );
}

function initApp() {
    const root = createRoot(window.document.getElementById('root') as Element);
    root.render(
        <StrictMode>
            <UuiEnhancedApp />
        </StrictMode>
    );
}

initApp();
