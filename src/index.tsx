import "@epam/uui-components/styles.css";
import "@epam/uui/styles.css";
import "./index.module.scss";
import "./assets/theme/theme-faraway.scss";
//
import React, { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { DragGhost, HistoryAdaptedRouter, useUuiServices, UuiContext } from "@epam/uui-core";
import { Modals, Snackbar } from "@epam/uui-components";
import { createQueryClient } from "./services";
import App from "./App";

const history = createBrowserHistory();
const router = new HistoryAdaptedRouter(history);
const queryClient = createQueryClient();

function UuiEnhancedApp() {
    const { services } = useUuiServices({ router });
    return (
        <UuiContext.Provider value={ services }>
            <QueryClientProvider client={ queryClient }>
                <Router history={history}>
                    <App />
                </Router>
            </QueryClientProvider>
            <Snackbar />
            <Modals />
            <DragGhost />
        </UuiContext.Provider>
    );
}

function initApp() {
    render(
        <StrictMode>
            <UuiEnhancedApp />
        </StrictMode>,
        window.document.getElementById("root")
    );
}

initApp();
