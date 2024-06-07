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

import { V1LabelSelector } from '../models/V1LabelSelector';
import { HttpFile } from '../http/http';

/**
* MetricIdentifier defines the name and optionally selector for a metric
*/
export class V2MetricIdentifier {
    /**
    * name is the name of the given metric
    */
    'name': string;
    'selector'?: V1LabelSelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2MetricIdentifier.attributeTypeMap;
    }

    public constructor() {
    }
}

