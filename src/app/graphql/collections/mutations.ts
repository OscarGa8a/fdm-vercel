import gql from 'graphql-tag';

import { collectionDetailsFragment, collectionProductFragment } from './queries';

const collectionUpdate = gql`
    ${collectionDetailsFragment}
    mutation CollectionUpdate($id: ID!, $input: CollectionInput!) {
        collectionUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            collection {
                ...CollectionDetailsFragment
            }
        }
    }
`;

const collectionUpdateWithHomepage = gql`
    ${collectionDetailsFragment}
    mutation CollectionUpdateWithHomepage(
        $id: ID!
        $input: CollectionInput!
        $homepageId: ID
    ) {
        homepageCollectionUpdate(collection: $homepageId) {
            errors {
                field
                message
            }
            shop {
                homepageCollection {
                    id
                }
            }
        }
        collectionUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            collection {
                ...CollectionDetailsFragment
            }
        }
    }
`;

const assignCollectionProduct = gql`
    ${collectionProductFragment}
    mutation CollectionAssignProduct(
        $collectionId: ID!
        $productIds: [ID!]!
        $first: Int
        $after: String
        $last: Int
        $before: String
    ) {
        collectionAddProducts(collectionId: $collectionId, products: $productIds) {
            errors {
                field
                message
            }
            collection {
                id
                products(first: $first, after: $after, before: $before, last: $last) {
                    edges {
                        node {
                            ...CollectionProductFragment
                        }
                    }
                    pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
                    }
                }
            }
        }
    }
`;

const createCollection = gql`
    ${collectionDetailsFragment}
    mutation CreateCollection($input: CollectionCreateInput!) {
        collectionCreate(input: $input) {
            errors {
                field
                message
            }
            collection {
                ...CollectionDetailsFragment
            }
        }
    }
`;

const removeCollection = gql`
    mutation RemoveCollection($id: ID!) {
        collectionDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const unassignCollectionProduct = gql`
    mutation UnassignCollectionProduct(
        $collectionId: ID!
        $productIds: [ID]!
        $first: Int
        $after: String
        $last: Int
        $before: String
    ) {
        collectionRemoveProducts(
            collectionId: $collectionId
            products: $productIds
        ) {
            errors {
                field
                message
            }
            collection {
                id
                products(first: $first, after: $after, before: $before, last: $last) {
                    edges {
                        node {
                            id
                            isPublished
                            name
                            productType {
                                id
                                name
                            }
                            thumbnail {
                                url
                            }
                        }
                    }
                    pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
                    }
                }
            }
        }
    }
`;

const collectionBulkDelete = gql`
    mutation CollectionBulkDelete($ids: [ID]!) {
        collectionBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

const collectionBulkPublish = gql`
    mutation CollectionBulkPublish($ids: [ID]!, $isPublished: Boolean!) {
        collectionBulkPublish(ids: $ids, isPublished: $isPublished) {
            errors {
                field
                message
            }
        }
    }
`;
