import gql from 'graphql-tag';

import { fragmentAddress } from '../orders/queries';
import { shopFragment } from './queries';

const authorizationKeyAdd = gql`
    ${shopFragment}
    mutation AuthorizationKeyAdd(
        $input: AuthorizationKeyInput!
        $keyType: AuthorizationKeyType!
    ) {
        authorizationKeyAdd(input: $input, keyType: $keyType) {
            errors {
                field
                message
            }
            shop {
                ...ShopFragment
            }
        }
    }
`;

const authorizationKeyDelete = gql`
    ${shopFragment}
    mutation AuthorizationKeyDelete($keyType: AuthorizationKeyType!) {
        authorizationKeyDelete(keyType: $keyType) {
            errors {
                field
                message
            }
            shop {
                ...ShopFragment
            }
        }
    }
`;

const shopSettingsUpdate = gql`
    ${shopFragment}
    ${fragmentAddress}
    mutation ShopSettingsUpdate(
        $shopDomainInput: SiteDomainInput!
        $shopSettingsInput: ShopSettingsInput!
        $addressInput: AddressInput
    ) {
        shopSettingsUpdate(input: $shopSettingsInput) {
            errors {
                field
                message
            }
            shop {
                ...ShopFragment
            }
        }
        shopDomainUpdate(input: $shopDomainInput) {
            errors {
                field
                message
            }
            shop {
                domain {
                    host
                    url
                }
            }
        }
        shopAddressUpdate(input: $addressInput) {
            errors {
                field
                message
            }
            shop {
                companyAddress {
                    ...AddressFragment
                }
            }
        }
    }
`;
