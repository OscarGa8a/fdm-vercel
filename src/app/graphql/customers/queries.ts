import gql from 'graphql-tag';
import { fragmentAddress } from '../orders/queries';

export const customerFragment = gql`
    fragment CustomerFragment on User {
        id
        email
        firstName
        lastName
    }
`;

export const customerDetailsFragment = gql`
    ${customerFragment}
    ${fragmentAddress}
    fragment CustomerDetailsFragment on User {
        ...CustomerFragment
        dateJoined
        lastLogin
        defaultShippingAddress {
            ...AddressFragment
        }
        defaultBillingAddress {
            ...AddressFragment
        }
        note
        isActive
    }
`;

export const customerAddressesFragment = gql`
    ${customerFragment}
    ${fragmentAddress}
    fragment CustomerAddressesFragment on User {
        ...CustomerFragment
        addresses {
            ...AddressFragment
        }
        defaultBillingAddress {
            id
        }
        defaultShippingAddress {
            id
        }
    }
`;

const customerList = gql`
    ${customerFragment}
    query ListCustomers(
        $after: String
        $before: String
        $first: Int
        $last: Int
        $filter: CustomerFilterInput
        $sort: UserSortingInput
    ) {
        customers(
            after: $after
            before: $before
            first: $first
            last: $last
            filter: $filter
            sortBy: $sort
        ) {
            edges {
                node {
                    ...CustomerFragment
                    orders {
                        totalCount
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
`;

const customerDetails = gql`
    ${customerDetailsFragment}
    query CustomerDetails($id: ID!) {
        user(id: $id) {
            ...CustomerDetailsFragment
            orders(last: 5) {
                edges {
                    node {
                        id
                        created
                        number
                        paymentStatus
                        total {
                            gross {
                                currency
                                amount
                            }
                        }
                    }
                }
            }
            lastPlacedOrder: orders(last: 1) {
                edges {
                    node {
                        id
                        created
                    }
                }
            }
        }
    }
`;
const customerAddresses = gql`
    ${customerAddressesFragment}
    query CustomerAddresses($id: ID!) {
        user(id: $id) {
            ...CustomerAddressesFragment
        }
    }
`;

const customerCreateData = gql`
    query CustomerCreateData {
        shop {
            countries {
                code
                country
            }
        }
    }
`;
