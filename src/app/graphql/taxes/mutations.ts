import gql from 'graphql-tag';

import { countryFragment, shopTaxesFragment } from './queries';

const updateTaxSettings = gql`
    ${shopTaxesFragment}
    mutation UpdateTaxSettings($input: ShopSettingsInput!) {
        shopSettingsUpdate(input: $input) {
            errors {
                field
                message
            }
            shop {
                ...ShopTaxesFragment
            }
        }
    }
`;

const fetchTaxes = gql`
    ${countryFragment}
    mutation FetchTaxes {
        shopFetchTaxRates {
            errors {
                field
                message
            }
            shop {
                countries {
                    ...CountryFragment
                }
            }
        }
    }
`;
