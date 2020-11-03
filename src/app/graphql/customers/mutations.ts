import gql from 'graphql-tag';

import { fragmentAddress } from '../orders/queries';
import { customerAddressesFragment, customerDetailsFragment } from './queries';

const updateCustomer = gql`
    ${customerDetailsFragment}
    mutation UpdateCustomer($id: ID!, $input: CustomerInput!) {
        customerUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            user {
                ...CustomerDetailsFragment
            }
        }
    }
`;

const createCustomer = gql`
    mutation CreateCustomer($input: UserCreateInput!) {
        customerCreate(input: $input) {
            errors {
                field
                message
            }
            user {
                id
            }
        }
    }
`;

const removeCustomer = gql`
    mutation RemoveCustomer($id: ID!) {
        customerDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const setCustomerDefaultAddress = gql`
    ${customerAddressesFragment}
    mutation SetCustomerDefaultAddress(
        $addressId: ID!
        $userId: ID!
        $type: AddressTypeEnum!
    ) {
        addressSetDefault(addressId: $addressId, userId: $userId, type: $type) {
            errors {
                field
                message
            }
            user {
                ...CustomerAddressesFragment
            }
        }
    }
`;

const createCustomerAddress = gql`
    ${customerAddressesFragment}
    ${fragmentAddress}
    mutation CreateCustomerAddress($id: ID!, $input: AddressInput!) {
        addressCreate(userId: $id, input: $input) {
            errors {
                field
                message
            }
            address {
                ...AddressFragment
            }
            user {
                ...CustomerAddressesFragment
            }
        }
    }
`;

const updateCustomerAddress = gql`
    ${fragmentAddress}
    mutation UpdateCustomerAddress($id: ID!, $input: AddressInput!) {
        addressUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            address {
                ...AddressFragment
            }
        }
    }
`;

const removeCustomerAddress = gql`
    ${customerAddressesFragment}
    mutation RemoveCustomerAddress($id: ID!) {
        addressDelete(id: $id) {
            errors {
                field
                message
            }
            user {
                ...CustomerAddressesFragment
            }
        }
    }
`;

export const bulkRemoveCustomers = gql`
    mutation BulkRemoveCustomers($ids: [ID]!) {
        customerBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;
