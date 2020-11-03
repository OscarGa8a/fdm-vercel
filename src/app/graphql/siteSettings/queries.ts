import gql from 'graphql-tag';
import { fragmentAddress } from '../orders/queries';

export const shopFragment = gql`
    ${fragmentAddress}
    fragment ShopFragment on Shop {
        authorizationKeys {
            key
            name
        }
        companyAddress {
            ...AddressFragment
        }
        countries {
            code
            country
        }
        customerSetPasswordUrl
        defaultMailSenderAddress
        defaultMailSenderName
        description
        domain {
            host
        }
        name
    }
`;
const siteSettings = gql`
    ${shopFragment}
    query SiteSettings {
        shop {
            ...ShopFragment
        }
    }
`;
