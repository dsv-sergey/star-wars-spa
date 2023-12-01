import type { IProcessRequest } from '@epam/uui-core';

export function getApi(params: { processRequest: IProcessRequest, origin?: string, fetchOptions?: RequestInit }) {
    const { origin = '', fetchOptions } = params;

    const processRequest: IProcessRequest = (url, method, data, options) => {
        const opts = fetchOptions ? { fetchOptions, ...options } : options;
        return params.processRequest(url, method, data, opts);
    };

    return {};
}

export type TApi = ReturnType<typeof getApi>;
