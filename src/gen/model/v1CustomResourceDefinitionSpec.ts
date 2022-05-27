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
import { V1CustomResourceConversion } from './v1CustomResourceConversion';
import { V1CustomResourceDefinitionNames } from './v1CustomResourceDefinitionNames';
import { V1CustomResourceDefinitionVersion } from './v1CustomResourceDefinitionVersion';

/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
*/
export class V1CustomResourceDefinitionSpec {
    'conversion'?: V1CustomResourceConversion;
    /**
    * group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
    */
    'group': string;
    'names': V1CustomResourceDefinitionNames;
    /**
    * preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/#pruning-versus-preserving-unknown-fields for details.
    */
    'preserveUnknownFields'?: boolean;
    /**
    * scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.
    */
    'scope': string;
    /**
    * versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
    */
    'versions': Array<V1CustomResourceDefinitionVersion>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conversion",
            "baseName": "conversion",
            "type": "V1CustomResourceConversion"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "V1CustomResourceDefinitionNames"
        },
        {
            "name": "preserveUnknownFields",
            "baseName": "preserveUnknownFields",
            "type": "boolean"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "versions",
            "baseName": "versions",
            "type": "Array<V1CustomResourceDefinitionVersion>"
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceDefinitionSpec.attributeTypeMap;
    }
}

