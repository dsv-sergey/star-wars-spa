import React from "react";

import css from "./ErrorBoundary.module.scss";

type TErrorBoundaryState = {
    hasError: boolean,
    error?: Error,
    errorInfo?: React.ErrorInfo,
};

type TErrorBoundaryProps = {
    children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<TErrorBoundaryProps, TErrorBoundaryState> {
    constructor(props: TErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        });
    }

    renderErrorText() {
        return (
            <div className={ css.root }>Something went wrong... try reloading the page or go back.</div>
        );
    }

    render() {
        return this.state.hasError ? this.renderErrorText() : this.props.children;
    }
}