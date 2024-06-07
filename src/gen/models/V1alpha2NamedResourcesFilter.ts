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
* NamedResourcesFilter is used in ResourceFilterModel.
*/
export class V1alpha2NamedResourcesFilter {
    /**
    * Selector is a CEL expression which must evaluate to true if a resource instance is suitable. The language is as defined in https://kubernetes.io/docs/reference/using-api/cel/  In addition, for each type NamedResourcesin AttributeValue there is a map that resolves to the corresponding value of the instance under evaluation. For example:     attributes.quantity[\"a\"].isGreaterThan(quantity(\"0\")) &&    attributes.stringslice[\"b\"].isSorted()
    */
    'selector': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "selector",
            "baseName": "selector",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2NamedResourcesFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

