import gql from 'graphql-tag';

import { categoryDetailsFragment } from './queries';

export const categoryDeleteMutation = gql`
    mutation CategoryDelete($id: ID!) {
        categoryDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

export const categoryCreateMutation = gql`
    ${categoryDetailsFragment}
    mutation CategoryCreate($parent: ID, $input: CategoryInput!) {
        categoryCreate(parent: $parent, input: $input) {
            errors {
                field
                message
            }
            category {
                ...CategoryDetailsFragment
            }
        }
    }
`;

export const categoryUpdateMutation = gql`
    ${categoryDetailsFragment}
    mutation CategoryUpdate($id: ID!, $input: CategoryInput!) {
        categoryUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            category {
                ...CategoryDetailsFragment
            }
        }
    }
`;

export const categoryBulkDeleteMutation = gql`
    mutation CategoryBulkDelete($ids: [ID]!) {
        categoryBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;
