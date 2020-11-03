import gql from 'graphql-tag';

import {attributeDetailsFragment} from './queries';
import {
    AttributeBulkDelete,
    AttributeBulkDeleteVariables
} from './types/AttributeBulkDelete';
import {
    AttributeCreate,
    AttributeCreateVariables
} from './types/AttributeCreate';
import {
    AttributeDelete,
    AttributeDeleteVariables
} from './types/AttributeDelete';
import {
    AttributeUpdate,
    AttributeUpdateVariables
} from './types/AttributeUpdate';
import {
    AttributeValueCreate,
    AttributeValueCreateVariables
} from './types/AttributeValueCreate';
import {
    AttributeValueDelete,
    AttributeValueDeleteVariables
} from './types/AttributeValueDelete';
import {
    AttributeValueReorder,
    AttributeValueReorderVariables
} from './types/AttributeValueReorder';
import {
    AttributeValueUpdate,
    AttributeValueUpdateVariables
} from './types/AttributeValueUpdate';

const attributeBulkDelete = gql`
    mutation AttributeBulkDelete($ids: [ID!]!) {
        attributeBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

const attributeDelete = gql`
    mutation AttributeDelete($id: ID!) {
        attributeDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

export const attributeUpdateMutation = gql`
    ${attributeDetailsFragment}
    mutation AttributeUpdate($id: ID!, $input: AttributeUpdateInput!) {
        attributeUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            attribute {
                ...AttributeDetailsFragment
            }
        }
    }
`;

const attributeValueDelete = gql`
    ${attributeDetailsFragment}
    mutation AttributeValueDelete($id: ID!) {
        attributeValueDelete(id: $id) {
            errors {
                field
                message
            }
            attribute {
                ...AttributeDetailsFragment
            }
        }
    }
`;

export const attributeValueUpdateMutation = gql`
    ${attributeDetailsFragment}
    mutation AttributeValueUpdate($id: ID!, $input: AttributeValueCreateInput!) {
        attributeValueUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            attribute {
                ...AttributeDetailsFragment
            }
        }
    }
`;

export const attributeValueCreateMutation = gql`
    ${attributeDetailsFragment}
    mutation AttributeValueCreate($id: ID!, $input: AttributeValueCreateInput!) {
        attributeValueCreate(attribute: $id, input: $input) {
            errors {
                field
                message
            }
            attribute {
                ...AttributeDetailsFragment
            }
        }
    }
`;

export const attributeCreateMutation = gql`
    ${attributeDetailsFragment}
    mutation AttributeCreate($input: AttributeCreateInput!) {
        attributeCreate(input: $input) {
            errors {
                field
                message
            }
            attribute {
                ...AttributeDetailsFragment
            }
        }
    }
`;

const attributeValueReorderMutation = gql`
    mutation AttributeValueReorder($id: ID!, $move: ReorderInput!) {
        attributeReorderValues(attributeId: $id, moves: [$move]) {
            errors {
                field
                message
            }
            attribute {
                id
                values {
                    id
                }
            }
        }
    }
`;

