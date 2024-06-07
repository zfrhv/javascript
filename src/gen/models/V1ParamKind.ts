/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.30.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* ParamKind is a tuple of Group Kind and Version.
*/
export class V1ParamKind {
    /**
    * APIVersion is the API group version the resources belong to. In format of \"group/version\". Required.
    */
    'apiVersion'?: string;
    /**
    * Kind is the API kind the resources belong to. Required.
    */
    'kind'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ParamKind.attributeTypeMap;
    }

    public constructor() {
    }
}

