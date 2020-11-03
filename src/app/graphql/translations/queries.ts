import gql from 'graphql-tag';

import { pageInfoFragment } from '../queries';
import {
    CategoryTranslationDetails,
    CategoryTranslationDetailsVariables
} from './types/CategoryTranslationDetails';
import {
    CategoryTranslations,
    CategoryTranslationsVariables
} from './types/CategoryTranslations';
import {
    CollectionTranslationDetails,
    CollectionTranslationDetailsVariables
} from './types/CollectionTranslationDetails';
import {
    CollectionTranslations,
    CollectionTranslationsVariables
} from './types/CollectionTranslations';
import {
    PageTranslationDetails,
    PageTranslationDetailsVariables
} from './types/PageTranslationDetails';
import {
    PageTranslations,
    PageTranslationsVariables
} from './types/PageTranslations';
import {
    ProductTranslationDetails,
    ProductTranslationDetailsVariables
} from './types/ProductTranslationDetails';
import {
    ProductTranslations,
    ProductTranslationsVariables
} from './types/ProductTranslations';
import {
    ProductTypeTranslationDetails,
    ProductTypeTranslationDetailsVariables
} from './types/ProductTypeTranslationDetails';
import {
    ProductTypeTranslations,
    ProductTypeTranslationsVariables
} from './types/ProductTypeTranslations';
import {
    SaleTranslationDetails,
    SaleTranslationDetailsVariables
} from './types/SaleTranslationDetails';
import {
    SaleTranslations,
    SaleTranslationsVariables
} from './types/SaleTranslations';
import {
    VoucherTranslationDetails,
    VoucherTranslationDetailsVariables
} from './types/VoucherTranslationDetails';
import {
    VoucherTranslations,
    VoucherTranslationsVariables
} from './types/VoucherTranslations';

export const categoryTranslationFragment = gql`
    fragment CategoryTranslationFragment on Category {
        id
        name
        descriptionJson
        seoDescription
        seoTitle
        translation(languageCode: $language) {
            id
            descriptionJson
            language {
                language
            }
            name
            seoDescription
            seoTitle
        }
    }
`;
export const collectionTranslationFragment = gql`
    fragment CollectionTranslationFragment on Collection {
        id
        name
        descriptionJson
        seoDescription
        seoTitle
        translation(languageCode: $language) {
            id
            descriptionJson
            language {
                language
            }
            name
            seoDescription
            seoTitle
        }
    }
`;
export const productTranslationFragment = gql`
    fragment ProductTranslationFragment on Product {
        id
        name
        descriptionJson
        seoDescription
        seoTitle
        translation(languageCode: $language) {
            id
            descriptionJson
            language {
                code
                language
            }
            name
            seoDescription
            seoTitle
        }
    }
`;
export const saleTranslationFragment = gql`
    fragment SaleTranslationFragment on Sale {
        id
        name
        translation(languageCode: $language) {
            id
            language {
                code
                language
            }
            name
        }
    }
`;
export const voucherTranslationFragment = gql`
    fragment VoucherTranslationFragment on Voucher {
        id
        name
        translation(languageCode: $language) {
            id
            language {
                code
                language
            }
            name
        }
    }
`;
export const shippingMethodTranslationFragment = gql`
    fragment ShippingMethodTranslationFragment on ShippingMethod {
        id
        name
        translation(languageCode: $language) {
            id
            language {
                code
                language
            }
            name
        }
    }
`;
export const pageTranslationFragment = gql`
    fragment PageTranslationFragment on Page {
        id
        contentJson
        seoDescription
        seoTitle
        title

        translation(languageCode: $language) {
            id
            contentJson
            seoDescription
            seoTitle
            title
            language {
                code
                language
            }
        }
    }
`;
export const pageTranslatableFragment = gql`
    fragment PageTranslatableFragment on PageTranslatableContent {
        id
        contentJson
        seoDescription
        seoTitle
        title

        translation(languageCode: $language) {
            id
            contentJson
            seoDescription
            seoTitle
            title
            language {
                code
                language
            }
        }
    }
`;
export const productTypeTranslationFragment = gql`
    fragment AttributeTranslationFragment on Attribute {
        id
        name
        translation(languageCode: $language) {
            id
            name
        }
        values {
            id
            name
            translation(languageCode: $language) {
                id
                name
            }
        }
    }
    fragment ProductTypeTranslationFragment on ProductType {
        id
        name
        productAttributes {
            ...AttributeTranslationFragment
        }
        variantAttributes {
            ...AttributeTranslationFragment
        }
    }
`;

const categoryTranslations = gql`
    ${pageInfoFragment}
    ${categoryTranslationFragment}
    query CategoryTranslations(
        $language: LanguageCodeEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: CategoryFilterInput
    ) {
        categories(
            before: $before
            after: $after
            first: $first
            last: $last
            filter: $filter
        ) {
            edges {
                node {
                    ...CategoryTranslationFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

const collectionTranslations = gql`
    ${pageInfoFragment}
    ${collectionTranslationFragment}
    query CollectionTranslations(
        $language: LanguageCodeEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: CollectionFilterInput
    ) {
        collections(
            before: $before
            after: $after
            first: $first
            last: $last
            filter: $filter
        ) {
            edges {
                node {
                    ...CollectionTranslationFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;
const productTranslations = gql`
    ${pageInfoFragment}
    ${productTranslationFragment}
    query ProductTranslations(
        $language: LanguageCodeEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: ProductFilterInput
    ) {
        products(
            before: $before
            after: $after
            first: $first
            last: $last
            filter: $filter
        ) {
            edges {
                node {
                    ...ProductTranslationFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

const pageTranslations = gql`
    ${pageInfoFragment}
    ${pageTranslationFragment}
    query PageTranslations(
        $language: LanguageCodeEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: PageFilterInput
    ) {
        pages(
            before: $before
            after: $after
            first: $first
            last: $last
            filter: $filter
        ) {
            edges {
                node {
                    ...PageTranslationFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

const voucherTranslations = gql`
    ${pageInfoFragment}
    ${voucherTranslationFragment}
    query VoucherTranslations(
        $language: LanguageCodeEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: VoucherFilterInput
    ) {
        vouchers(
            before: $before
            after: $after
            first: $first
            last: $last
            filter: $filter
        ) {
            edges {
                node {
                    ...VoucherTranslationFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

const saleTranslations = gql`
    ${pageInfoFragment}
    ${saleTranslationFragment}
    query SaleTranslations(
        $language: LanguageCodeEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: SaleFilterInput
    ) {
        sales(
            before: $before
            after: $after
            first: $first
            last: $last
            filter: $filter
        ) {
            edges {
                node {
                    ...SaleTranslationFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;

const productTypeTranslations = gql`
    ${pageInfoFragment}
    ${productTypeTranslationFragment}
    query ProductTypeTranslations(
        $language: LanguageCodeEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $filter: ProductTypeFilterInput
    ) {
        productTypes(
            before: $before
            after: $after
            first: $first
            last: $last
            filter: $filter
        ) {
            edges {
                node {
                    ...ProductTypeTranslationFragment
                }
            }
            pageInfo {
                ...PageInfoFragment
            }
        }
    }
`;
;

const productTranslationDetails = gql`
    ${productTranslationFragment}
    query ProductTranslationDetails($id: ID!, $language: LanguageCodeEnum!) {
        product(id: $id) {
            ...ProductTranslationFragment
        }
    }
`;

const categoryTranslationDetails = gql`
    ${categoryTranslationFragment}
    query CategoryTranslationDetails($id: ID!, $language: LanguageCodeEnum!) {
        category(id: $id) {
            ...CategoryTranslationFragment
        }
    }
`;

const collectionTranslationDetails = gql`
    ${collectionTranslationFragment}
    query CollectionTranslationDetails($id: ID!, $language: LanguageCodeEnum!) {
        collection(id: $id) {
            ...CollectionTranslationFragment
        }
    }
`;

const pageTranslationDetails = gql`
    ${pageTranslationFragment}
    query PageTranslationDetails($id: ID!, $language: LanguageCodeEnum!) {
        page(id: $id) {
            ...PageTranslationFragment
        }
    }
`;

const saleTranslationDetails = gql`
    ${saleTranslationFragment}
    query SaleTranslationDetails($id: ID!, $language: LanguageCodeEnum!) {
        sale(id: $id) {
            ...SaleTranslationFragment
        }
    }
`;

const voucherTranslationDetails = gql`
    ${voucherTranslationFragment}
    query VoucherTranslationDetails($id: ID!, $language: LanguageCodeEnum!) {
        voucher(id: $id) {
            ...VoucherTranslationFragment
        }
    }
`;

const productTypeTranslationDetails = gql`
    ${productTypeTranslationFragment}
    query ProductTypeTranslationDetails($id: ID!, $language: LanguageCodeEnum!) {
        productType(id: $id) {
            ...ProductTypeTranslationFragment
        }
    }
`;
