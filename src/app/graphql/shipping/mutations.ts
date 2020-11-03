import gql from 'graphql-tag';

import { countryFragment } from '../taxes/queries';
import { shippingMethodFragment, shippingZoneDetailsFragment } from './queries';

const deleteShippingZone = gql`
    mutation DeleteShippingZone($id: ID!) {
        shippingZoneDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const bulkDeleteShippingZone = gql`
    mutation BulkDeleteShippingZone($ids: [ID]!) {
        shippingZoneBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

const updateDefaultWeightUnit = gql`
    mutation UpdateDefaultWeightUnit($unit: WeightUnitsEnum) {
        shopSettingsUpdate(input: { defaultWeightUnit: $unit }) {
            errors {
                field
                message
            }
            shop {
                defaultWeightUnit
            }
        }
    }
`;

const createShippingZone = gql`
    ${countryFragment}
    mutation CreateShippingZone($input: ShippingZoneInput!) {
        shippingZoneCreate(input: $input) {
            errors {
                field
                message
            }
            shippingZone {
                countries {
                    ...CountryFragment
                }
                default
                id
                name
            }
        }
    }
`;

const updateShippingZone = gql`
    ${countryFragment}
    mutation UpdateShippingZone($id: ID!, $input: ShippingZoneInput!) {
        shippingZoneUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            shippingZone {
                countries {
                    ...CountryFragment
                }
                default
                id
                name
            }
        }
    }
`;

const updateShippingRate = gql`
    ${shippingMethodFragment}
    mutation UpdateShippingRate($id: ID!, $input: ShippingPriceInput!) {
        shippingPriceUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            shippingMethod {
                ...ShippingMethodFragment
            }
        }
    }
`;

const createShippingRate = gql`
    ${shippingZoneDetailsFragment}
    mutation CreateShippingRate($input: ShippingPriceInput!) {
        shippingPriceCreate(input: $input) {
            errors {
                field
                message
            }
            shippingZone {
                ...ShippingZoneDetailsFragment
            }
        }
    }
`;

const deleteShippingRate = gql`
    ${shippingZoneDetailsFragment}
    mutation DeleteShippingRate($id: ID!) {
        shippingPriceDelete(id: $id) {
            errors {
                field
                message
            }
            shippingZone {
                ...ShippingZoneDetailsFragment
            }
        }
    }
`;

const bulkDeleteShippingRate = gql`
    mutation BulkDeleteShippingRate($ids: [ID]!) {
        shippingPriceBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;
