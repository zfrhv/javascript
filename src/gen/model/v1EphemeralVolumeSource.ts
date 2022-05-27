/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1PersistentVolumeClaimTemplate } from './v1PersistentVolumeClaimTemplate';

/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
export class V1EphemeralVolumeSource {
    'volumeClaimTemplate'?: V1PersistentVolumeClaimTemplate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "volumeClaimTemplate",
            "baseName": "volumeClaimTemplate",
            "type": "V1PersistentVolumeClaimTemplate"
        }    ];

    static getAttributeTypeMap() {
        return V1EphemeralVolumeSource.attributeTypeMap;
    }
}

