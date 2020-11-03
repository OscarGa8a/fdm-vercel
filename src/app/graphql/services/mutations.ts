import gql from 'graphql-tag';

import { serviceDetailsFragment, serviceFragment } from './queries';

const serviceCreateMutation = gql`
    ${serviceFragment}
    mutation ServiceCreate($input: ServiceAccountInput!) {
        serviceAccountCreate(input: $input) {
            errors {
                field
                message
            }
            authToken
            serviceAccount {
                ...ServiceFragment
            }
        }
    }
`;

const serviceDeleteMutation = gql`
    mutation ServiceDelete($id: ID!) {
        serviceAccountDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const serviceUpdateMutation = gql`
    ${serviceDetailsFragment}
    mutation ServiceUpdate($id: ID!, $input: ServiceAccountInput!) {
        serviceAccountUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            serviceAccount {
                ...ServiceDetailsFragment
            }
        }
    }
`;


const serviceTokenCreate = gql`
    mutation ServiceTokenCreate($input: ServiceAccountTokenInput!) {
        serviceAccountTokenCreate(input: $input) {
            errors {
                field
                message
            }
            authToken
        }
    }
`;

const serviceTokenDelete = gql`
    mutation ServiceTokenDelete($id: ID!) {
        serviceAccountTokenDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

