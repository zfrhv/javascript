/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* VolumeMount describes a mounting of a Volume within a container.
*/
export class V1VolumeMount {
    /**
    * Path within the container at which the volume should be mounted.  Must not contain \':\'.
    */
    'mountPath': string;
    /**
    * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
    */
    'mountPropagation'?: string;
    /**
    * This must match the Name of a Volume.
    */
    'name': string;
    /**
    * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
    */
    'readOnly'?: boolean;
    /**
    * Path within the volume from which the container\'s volume should be mounted. Defaults to \"\" (volume\'s root).
    */
    'subPath'?: string;
    /**
    * Expanded path within the volume from which the container\'s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container\'s environment. Defaults to \"\" (volume\'s root). SubPathExpr and SubPath are mutually exclusive.
    */
    'subPathExpr'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mountPath",
            "baseName": "mountPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "mountPropagation",
            "baseName": "mountPropagation",
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
            "name": "subPath",
            "baseName": "subPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "subPathExpr",
            "baseName": "subPathExpr",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeMount.attributeTypeMap;
    }

    public constructor() {
    }
}

