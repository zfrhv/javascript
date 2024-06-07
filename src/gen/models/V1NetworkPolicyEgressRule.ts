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

import { V1NetworkPolicyPeer } from '../models/V1NetworkPolicyPeer';
import { V1NetworkPolicyPort } from '../models/V1NetworkPolicyPort';
import { HttpFile } from '../http/http';

/**
* NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec\'s podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
*/
export class V1NetworkPolicyEgressRule {
    /**
    * ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
    */
    'ports'?: Array<V1NetworkPolicyPort>;
    /**
    * to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
    */
    'to'?: Array<V1NetworkPolicyPeer>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1NetworkPolicyPort>",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<V1NetworkPolicyPeer>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NetworkPolicyEgressRule.attributeTypeMap;
    }

    public constructor() {
    }
}

