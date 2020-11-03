import gql from 'graphql-tag';

import { productTypeDetailsFragment } from './queries';

export const productTypeDeleteMutation = gql`
    mutation ProductTypeDelete($id: ID!) {
        productTypeDelete(id: $id) {
            errors {
                field
                message
            }
            productType {
                id
            }
        }
    }
`;

export const productTypeBulkDeleteMutation = gql`
    mutation ProductTypeBulkDelete($ids: [ID]!) {
        productTypeBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

export const productTypeUpdateMutation = gql`
    ${productTypeDetailsFragment}
    mutation ProductTypeUpdate($id: ID!, $input: ProductTypeInput!) {
        productTypeUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            productType {
                ...ProductTypeDetailsFragment
            }
        }
    }
`;

export const assignAttributeMutation = gql`
    ${productTypeDetailsFragment}
    mutation AssignAttribute($id: ID!, $operations: [AttributeAssignInput!]!) {
        attributeAssign(productTypeId: $id, operations: $operations) {
            errors {
                field
                message
            }
            productType {
                ...ProductTypeDetailsFragment
            }
        }
    }
`;

export const unassignAttributeMutation = gql`
    ${productTypeDetailsFragment}
    mutation UnassignAttribute($id: ID!, $ids: [ID]!) {
        attributeUnassign(productTypeId: $id, attributeIds: $ids) {
            errors {
                field
                message
            }
            productType {
                ...ProductTypeDetailsFragment
            }
        }
    }
`;

export const productTypeCreateMutation = gql`
    ${productTypeDetailsFragment}
    mutation ProductTypeCreate($input: ProductTypeInput!) {
        productTypeCreate(input: $input) {
            errors {
                field
                message
            }
            productType {
                ...ProductTypeDetailsFragment
            }
        }
    }
`;

const productTypeAttributeReorder = gql`
    ${productTypeDetailsFragment}
    mutation ProductTypeAttributeReorder(
        $move: ReorderInput!
        $productTypeId: ID!
        $type: AttributeTypeEnum!
    ) {
        productTypeReorderAttributes(
            moves: [$move]
            productTypeId: $productTypeId
            type: $type
        ) {
            errors {
                field
                message
            }
            productType {
                ...ProductTypeDetailsFragment
            }
        }
    }
`;
