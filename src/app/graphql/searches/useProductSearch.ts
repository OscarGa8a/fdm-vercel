import gql from 'graphql-tag';

import { pageInfoFragment } from '@saleor/queries';

export const searchProducts = gql`
    ${pageInfoFragment}
    query SearchProducts($after: String, $first: Int!, $query: String!) {
        search: products(after: $after, first: $first, filter: { search: $query }) {
            edges {
                node {
                    id
                    name
                    thumbnail {
                        url
                    }
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;
