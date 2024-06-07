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
* PersistentVolumeClaimCondition contains details about state of pvc
*/
export class V1PersistentVolumeClaimCondition {
    /**
    * lastProbeTime is the time we probed the condition.
    */
    'lastProbeTime'?: Date;
    /**
    * lastTransitionTime is the time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * message is the human-readable message indicating details about last transition.
    */
    'message'?: string;
    /**
    * reason is a unique, this should be a short, machine understandable string that gives the reason for condition\'s last transition. If it reports \"Resizing\" that means the underlying persistent volume is being resized.
    */
    'reason'?: string;
    'status': string;
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastProbeTime",
            "baseName": "lastProbeTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimCondition.attributeTypeMap;
    }

    public constructor() {
    }
}

