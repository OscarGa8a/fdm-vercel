import gql from 'graphql-tag';

import { pageInfoFragment } from '@saleor/queries';

export const searchCategories = gql`
    ${pageInfoFragment}
    query SearchCategories($after: String, $first: Int!, $query: String!) {
        search: categories(
            after: $after
            first: $first
            filter: { search: $query }
        ) {
            edges {
                node {
                    id
                    name
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

