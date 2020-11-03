import gql from 'graphql-tag';

import { webhooksDetailsFragment } from './queries';

const webhookCreate = gql`
    ${webhooksDetailsFragment}
    mutation WebhookCreate($input: WebhookCreateInput!) {
        webhookCreate(input: $input) {
            errors {
                field
                message
            }
            webhookErrors {
                code
                message
                field
            }
            webhook {
                ...WebhooksDetailsFragment
            }
        }
    }
`;

const webhookUpdate = gql`
    ${webhooksDetailsFragment}
    mutation WebhookUpdate($id: ID!, $input: WebhookUpdateInput!) {
        webhookUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            webhookErrors {
                code
                message
                field
            }
            webhook {
                ...WebhooksDetailsFragment
            }
        }
    }
`;

const webhookDelete = gql`
    mutation WebhookDelete($id: ID!) {
        webhookDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;
