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

import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1PriorityLevelConfigurationSpec } from '../models/V1PriorityLevelConfigurationSpec';
import { V1PriorityLevelConfigurationStatus } from '../models/V1PriorityLevelConfigurationStatus';
import { HttpFile } from '../http/http';

/**
* PriorityLevelConfiguration represents the configuration of a priority level.
*/
export class V1PriorityLevelConfiguration {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1PriorityLevelConfigurationSpec;
    'status'?: V1PriorityLevelConfigurationStatus;

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
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1PriorityLevelConfigurationSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1PriorityLevelConfigurationStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PriorityLevelConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}

