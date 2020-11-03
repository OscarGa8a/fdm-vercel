import gql from 'graphql-tag';

import { pageInfoFragment } from '@saleor/queries';

export const searchPages = gql`
    ${pageInfoFragment}
    query SearchPages($after: String, $first: Int!, $query: String!) {
        search: pages(after: $after, first: $first, filter: { search: $query }) {
            edges {
                node {
                    id
                    title
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

