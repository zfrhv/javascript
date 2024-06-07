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
* VolumeMountStatus shows status of volume mounts.
*/
export class V1VolumeMountStatus {
    /**
    * MountPath corresponds to the original VolumeMount.
    */
    'mountPath': string;
    /**
    * Name corresponds to the name of the original VolumeMount.
    */
    'name': string;
    /**
    * ReadOnly corresponds to the original VolumeMount.
    */
    'readOnly'?: boolean;
    /**
    * RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.
    */
    'recursiveReadOnly'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mountPath",
            "baseName": "mountPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "recursiveReadOnly",
            "baseName": "recursiveReadOnly",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeMountStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

