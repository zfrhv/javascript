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

import { V1IngressServiceBackend } from '../models/V1IngressServiceBackend';
import { V1TypedLocalObjectReference } from '../models/V1TypedLocalObjectReference';
import { HttpFile } from '../http/http';

/**
* IngressBackend describes all endpoints for a given service and port.
*/
export class V1IngressBackend {
    'resource'?: V1TypedLocalObjectReference;
    'service'?: V1IngressServiceBackend;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "V1IngressServiceBackend",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1IngressBackend.attributeTypeMap;
    }

    public constructor() {
    }
}

