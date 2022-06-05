/* tslint:disable */
/* eslint-disable */
/**
 * Manyou App API
 * A short description of Manyou App API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface PingGet200Response
 */
export interface PingGet200Response {
    /**
     * 
     * @type {string}
     * @memberof PingGet200Response
     */
    'name'?: string;
}

/**
 * PingApi - axios parameter creator
 * @export
 */
export const PingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Testing API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PingApi - functional programming interface
 * @export
 */
export const PingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Testing API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pingGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PingGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pingGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PingApi - factory interface
 * @export
 */
export const PingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PingApiFp(configuration)
    return {
        /**
         * 
         * @summary Testing API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingGet(options?: any): AxiosPromise<PingGet200Response> {
            return localVarFp.pingGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PingApi - interface
 * @export
 * @interface PingApi
 */
export interface PingApiInterface {
    /**
     * 
     * @summary Testing API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApiInterface
     */
    pingGet(options?: AxiosRequestConfig): AxiosPromise<PingGet200Response>;

}

/**
 * PingApi - object-oriented interface
 * @export
 * @class PingApi
 * @extends {BaseAPI}
 */
export class PingApi extends BaseAPI implements PingApiInterface {
    /**
     * 
     * @summary Testing API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApi
     */
    public pingGet(options?: AxiosRequestConfig) {
        return PingApiFp(this.configuration).pingGet(options).then((request) => request(this.axios, this.basePath));
    }
}

