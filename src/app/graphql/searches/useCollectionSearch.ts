import gql from 'graphql-tag';

import { pageInfoFragment } from '@saleor/queries';

export const searchCollections = gql`
    ${pageInfoFragment}
    query SearchCollections($after: String, $first: Int!, $query: String!) {
        search: collections(
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
