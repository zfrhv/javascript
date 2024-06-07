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

import { V1alpha1ParentReference } from '../models/V1alpha1ParentReference';
import { HttpFile } from '../http/http';

/**
* IPAddressSpec describe the attributes in an IP Address.
*/
export class V1alpha1IPAddressSpec {
    'parentRef': V1alpha1ParentReference;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "parentRef",
            "baseName": "parentRef",
            "type": "V1alpha1ParentReference",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1IPAddressSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

