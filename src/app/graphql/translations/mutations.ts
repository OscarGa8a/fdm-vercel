import gql from 'graphql-tag';

import {
    categoryTranslationFragment,
    collectionTranslationFragment,
    pageTranslatableFragment,
    productTranslationFragment,
    saleTranslationFragment,
    voucherTranslationFragment
} from './queries';
import {
    UpdateAttributeTranslations,
    UpdateAttributeTranslationsVariables
} from './types/UpdateAttributeTranslations';
import {
    UpdateAttributeValueTranslations,
    UpdateAttributeValueTranslationsVariables
} from './types/UpdateAttributeValueTranslations';
import {
    UpdateCategoryTranslations,
    UpdateCategoryTranslationsVariables
} from './types/UpdateCategoryTranslations';
import {
    UpdateCollectionTranslations,
    UpdateCollectionTranslationsVariables
} from './types/UpdateCollectionTranslations';
import {
    UpdatePageTranslations,
    UpdatePageTranslationsVariables
} from './types/UpdatePageTranslations';
import {
    UpdateProductTranslations,
    UpdateProductTranslationsVariables
} from './types/UpdateProductTranslations';
import {
    UpdateSaleTranslations,
    UpdateSaleTranslationsVariables
} from './types/UpdateSaleTranslations';
import {
    UpdateVoucherTranslations,
    UpdateVoucherTranslationsVariables
} from './types/UpdateVoucherTranslations';

const updateProductTranslations = gql`
    ${productTranslationFragment}
    mutation UpdateProductTranslations(
        $id: ID!
        $input: TranslationInput!
        $language: LanguageCodeEnum!
    ) {
        productTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            product {
                ...ProductTranslationFragment
            }
        }
    }
`;

const updateCategoryTranslations = gql`
    ${categoryTranslationFragment}
    mutation UpdateCategoryTranslations(
        $id: ID!
        $input: TranslationInput!
        $language: LanguageCodeEnum!
    ) {
        categoryTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            category {
                ...CategoryTranslationFragment
            }
        }
    }
`;
const updateCollectionTranslations = gql`
    ${collectionTranslationFragment}
    mutation UpdateCollectionTranslations(
        $id: ID!
        $input: TranslationInput!
        $language: LanguageCodeEnum!
    ) {
        collectionTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            collection {
                ...CollectionTranslationFragment
            }
        }
    }
`;
ns;
)
;

const updatePageTranslations = gql`
    ${pageTranslatableFragment}
    mutation UpdatePageTranslations(
        $id: ID!
        $input: PageTranslationInput!
        $language: LanguageCodeEnum!
    ) {
        pageTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            page {
                ...PageTranslatableFragment
            }
        }
    }
`;
ons;
)
;

const updateVoucherTranslations = gql`
    ${voucherTranslationFragment}
    mutation UpdateVoucherTranslations(
        $id: ID!
        $input: NameTranslationInput!
        $language: LanguageCodeEnum!
    ) {
        voucherTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            voucher {
                ...VoucherTranslationFragment
            }
        }
    }
`;
const updateSaleTranslations = gql`
    ${saleTranslationFragment}
    mutation UpdateSaleTranslations(
        $id: ID!
        $input: NameTranslationInput!
        $language: LanguageCodeEnum!
    ) {
        saleTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            sale {
                ...SaleTranslationFragment
            }
        }
    }
`;


const updateAttributeTranslations = gql`
    mutation UpdateAttributeTranslations(
        $id: ID!
        $input: NameTranslationInput!
        $language: LanguageCodeEnum!
    ) {
        attributeTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            attribute {
                id
                name
                translation(languageCode: $language) {
                    id
                    name
                }
            }
        }
    }
`;

const updateAttributeValueTranslations = gql`
    mutation UpdateAttributeValueTranslations(
        $id: ID!
        $input: NameTranslationInput!
        $language: LanguageCodeEnum!
    ) {
        attributeValueTranslate(id: $id, input: $input, languageCode: $language) {
            errors {
                field
                message
            }
            attributeValue {
                id
                name
                translation(languageCode: $language) {
                    id
                    name
                }
            }
        }
    }
`;
