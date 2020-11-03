import gql from 'graphql-tag';

import { pageInfoFragment } from '@saleor/queries';
import {
    SearchCustomers,
    SearchCustomersVariables
} from './types/SearchCustomers';

export const searchCustomers = gql`
    ${pageInfoFragment}
    query SearchCustomers($after: String, $first: Int!, $query: String!) {
        search: customers(
            after: $after
            first: $first
            filter: { search: $query }
        ) {
            edges {
                node {
                    id
                    email
                    firstName
                    lastName
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

