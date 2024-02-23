/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.28.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1alpha2ResourceClaimSchedulingStatus } from '../models/V1alpha2ResourceClaimSchedulingStatus';
import { HttpFile } from '../http/http';

/**
* PodSchedulingContextStatus describes where resources for the Pod can be allocated.
*/
export class V1alpha2PodSchedulingContextStatus {
    /**
    * ResourceClaims describes resource availability for each pod.spec.resourceClaim entry where the corresponding ResourceClaim uses \"WaitForFirstConsumer\" allocation mode.
    */
    'resourceClaims'?: Array<V1alpha2ResourceClaimSchedulingStatus>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "resourceClaims",
            "baseName": "resourceClaims",
            "type": "Array<V1alpha2ResourceClaimSchedulingStatus>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2PodSchedulingContextStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
