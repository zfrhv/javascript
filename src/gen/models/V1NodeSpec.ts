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

import { V1NodeConfigSource } from '../models/V1NodeConfigSource';
import { V1Taint } from '../models/V1Taint';
import { HttpFile } from '../http/http';

/**
* NodeSpec describes the attributes that a node is created with.
*/
export class V1NodeSpec {
    'configSource'?: V1NodeConfigSource;
    /**
    * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
    */
    'externalID'?: string;
    /**
    * PodCIDR represents the pod IP range assigned to the node.
    */
    'podCIDR'?: string;
    /**
    * podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
    */
    'podCIDRs'?: Array<string>;
    /**
    * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
    */
    'providerID'?: string;
    /**
    * If specified, the node\'s taints.
    */
    'taints'?: Array<V1Taint>;
    /**
    * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
    */
    'unschedulable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configSource",
            "baseName": "configSource",
            "type": "V1NodeConfigSource",
            "format": ""
        },
        {
            "name": "externalID",
            "baseName": "externalID",
            "type": "string",
            "format": ""
        },
        {
            "name": "podCIDR",
            "baseName": "podCIDR",
            "type": "string",
            "format": ""
        },
        {
            "name": "podCIDRs",
            "baseName": "podCIDRs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "providerID",
            "baseName": "providerID",
            "type": "string",
            "format": ""
        },
        {
            "name": "taints",
            "baseName": "taints",
            "type": "Array<V1Taint>",
            "format": ""
        },
        {
            "name": "unschedulable",
            "baseName": "unschedulable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

