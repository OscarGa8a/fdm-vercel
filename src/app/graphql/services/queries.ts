import gql from 'graphql-tag';

import { pageInfoFragment } from '../queries';

export const serviceFragment = gql`
    fragment ServiceFragment on ServiceAccount {
        id
        name
        isActive
    }
`;

const serviceList = gql`
    ${pageInfoFragment}
    ${serviceFragment}
    query ServiceList(
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: ServiceAccountFilterInput
        $sort: ServiceAccountSortingInput
    ) {
        serviceAccounts(
            first: $first
            after: $after
            before: $before
            last: $last
            filter: $filter
            sortBy: $sort
        ) {
            edges {
                node {
                    ...ServiceFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

export const serviceDetailsFragment = gql`
    ${serviceFragment}
    fragment ServiceDetailsFragment on ServiceAccount {
        ...ServiceFragment
        permissions {
            code
            name
        }
        tokens {
            id
            name
            authToken
        }
    }
`;

const serviceDetails = gql`
    ${serviceDetailsFragment}
    query ServiceDetails($id: ID!) {
        serviceAccount(id: $id) {
            ...ServiceDetailsFragment
        }
    }
`;
