import gql from 'graphql-tag';

export const webhooksFragment = gql`
    fragment WebhookFragment on Webhook {
        id
        name
        isActive
        serviceAccount {
            id
            name
        }
    }
`;

export const webhooksDetailsFragment = gql`
    ${webhooksFragment}
    fragment WebhooksDetailsFragment on Webhook {
        ...WebhookFragment
    }
`;

const webhooksList = gql`
    ${webhooksFragment}
    query Webhooks(
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: WebhookFilterInput
        $sort: WebhookSortingInput
    ) {
        webhooks(
            first: $first
            after: $after
            before: $before
            last: $last
            filter: $filter
            sortBy: $sort
        ) {
            edges {
                node {
                    ...WebhookFragment
                }
            }
            pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
            }
        }
    }
`;

const webhooksDetails = gql`
    ${webhooksFragment}
    query WebhookDetails($id: ID!) {
        webhook(id: $id) {
            ...WebhookFragment
            events {
                eventType
            }
            secretKey
            targetUrl
        }
    }
`;
