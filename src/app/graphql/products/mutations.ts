import gql from 'graphql-tag';

import { fragmentVariant, productFragmentDetails } from './queries';

export const productImageCreateMutation = gql`
    ${productFragmentDetails}
    mutation ProductImageCreate($product: ID!, $image: Upload!, $alt: String) {
        productImageCreate(input: { alt: $alt, image: $image, product: $product }) {
            errors {
                field
                message
            }
            product {
                ...Product
            }
        }
    }
`;

export const productDeleteMutation = gql`
    mutation ProductDelete($id: ID!) {
        productDelete(id: $id) {
            errors {
                field
                message
            }
            product {
                id
            }
        }
    }
`;

export const productImagesReorder = gql`
    mutation ProductImageReorder($productId: ID!, $imagesIds: [ID]!) {
        productImageReorder(productId: $productId, imagesIds: $imagesIds) {
            errors {
                field
                message
            }
            product {
                id
                images {
                    id
                    alt
                    sortOrder
                    url
                }
            }
        }
    }
`;

export const productUpdateMutation = gql`
    ${productFragmentDetails}
    mutation ProductUpdate(
        $id: ID!
        $attributes: [AttributeValueInput]
        $publicationDate: Date
        $category: ID
        $chargeTaxes: Boolean!
        $collections: [ID]
        $descriptionJson: JSONString
        $isPublished: Boolean!
        $name: String
        $basePrice: Decimal
        $seo: SeoInput
    ) {
        productUpdate(
            id: $id
            input: {
                attributes: $attributes
                publicationDate: $publicationDate
                category: $category
                chargeTaxes: $chargeTaxes
                collections: $collections
                descriptionJson: $descriptionJson
                isPublished: $isPublished
                name: $name
                basePrice: $basePrice
                seo: $seo
            }
        ) {
            errors {
                field
                message
            }
            product {
                ...Product
            }
        }
    }
`;

export const simpleProductUpdateMutation = gql`
    ${productFragmentDetails}
    ${fragmentVariant}
    mutation SimpleProductUpdate(
        $id: ID!
        $attributes: [AttributeValueInput]
        $publicationDate: Date
        $category: ID
        $chargeTaxes: Boolean!
        $collections: [ID]
        $descriptionJson: JSONString
        $isPublished: Boolean!
        $name: String
        $basePrice: Decimal
        $productVariantId: ID!
        $productVariantInput: ProductVariantInput!
        $seo: SeoInput
    ) {
        productUpdate(
            id: $id
            input: {
                attributes: $attributes
                publicationDate: $publicationDate
                category: $category
                chargeTaxes: $chargeTaxes
                collections: $collections
                descriptionJson: $descriptionJson
                isPublished: $isPublished
                name: $name
                basePrice: $basePrice
                seo: $seo
            }
        ) {
            errors {
                field
                message
            }
            product {
                ...Product
            }
        }
        productVariantUpdate(id: $productVariantId, input: $productVariantInput) {
            errors {
                field
                message
            }
            productVariant {
                ...ProductVariant
            }
        }
    }
`;

export const productCreateMutation = gql`
    ${productFragmentDetails}
    mutation ProductCreate(
        $attributes: [AttributeValueInput]
        $publicationDate: Date
        $category: ID!
        $chargeTaxes: Boolean!
        $collections: [ID]
        $descriptionJson: JSONString
        $isPublished: Boolean!
        $name: String!
        $basePrice: Decimal
        $productType: ID!
        $sku: String
        $stockQuantity: Int
        $seo: SeoInput
    ) {
        productCreate(
            input: {
                attributes: $attributes
                publicationDate: $publicationDate
                category: $category
                chargeTaxes: $chargeTaxes
                collections: $collections
                descriptionJson: $descriptionJson
                isPublished: $isPublished
                name: $name
                basePrice: $basePrice
                productType: $productType
                sku: $sku
                quantity: $stockQuantity
                seo: $seo
            }
        ) {
            errors {
                field
                message
            }
            product {
                ...Product
            }
        }
    }
`;

export const variantDeleteMutation = gql`
    mutation VariantDelete($id: ID!) {
        productVariantDelete(id: $id) {
            errors {
                field
                message
            }
            productVariant {
                id
            }
        }
    }
`;

export const variantUpdateMutation = gql`
    ${fragmentVariant}
    mutation VariantUpdate(
        $id: ID!
        $attributes: [AttributeValueInput]
        $costPrice: Decimal
        $priceOverride: Decimal
        $sku: String
        $quantity: Int
        $trackInventory: Boolean!
    ) {
        productVariantUpdate(
            id: $id
            input: {
                attributes: $attributes
                costPrice: $costPrice
                priceOverride: $priceOverride
                sku: $sku
                quantity: $quantity
                trackInventory: $trackInventory
            }
        ) {
            productErrors {
                code
                field
                message
            }
            productVariant {
                ...ProductVariant
            }
        }
    }
`;

export const variantCreateMutation = gql`
    ${fragmentVariant}
    mutation VariantCreate($input: ProductVariantCreateInput!) {
        productVariantCreate(input: $input) {
            productErrors {
                code
                field
                message
            }
            productVariant {
                ...ProductVariant
            }
        }
    }
`;

export const productImageDeleteMutation = gql`
    mutation ProductImageDelete($id: ID!) {
        productImageDelete(id: $id) {
            product {
                id
                images {
                    id
                }
            }
        }
    }
`;

export const productImageUpdateMutation = gql`
    ${productFragmentDetails}
    mutation ProductImageUpdate($id: ID!, $alt: String!) {
        productImageUpdate(id: $id, input: { alt: $alt }) {
            errors {
                field
                message
            }
            product {
                ...Product
            }
        }
    }
`;

export const variantImageAssignMutation = gql`
    ${fragmentVariant}
    mutation VariantImageAssign($variantId: ID!, $imageId: ID!) {
        variantImageAssign(variantId: $variantId, imageId: $imageId) {
            errors {
                field
                message
            }
            productVariant {
                ...ProductVariant
            }
        }
    }
`;

export const variantImageUnassignMutation = gql`
    ${fragmentVariant}
    mutation VariantImageUnassign($variantId: ID!, $imageId: ID!) {
        variantImageUnassign(variantId: $variantId, imageId: $imageId) {
            errors {
                field
                message
            }
            productVariant {
                ...ProductVariant
            }
        }
    }
`;

export const productBulkDeleteMutation = gql`
    mutation productBulkDelete($ids: [ID!]!) {
        productBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

export const productBulkPublishMutation = gql`
    mutation productBulkPublish($ids: [ID!]!, $isPublished: Boolean!) {
        productBulkPublish(ids: $ids, isPublished: $isPublished) {
            errors {
                field
                message
            }
        }
    }
`;

export const ProductVariantBulkCreateMutation = gql`
    mutation ProductVariantBulkCreate(
        $id: ID!
        $inputs: [ProductVariantBulkCreateInput]!
    ) {
        productVariantBulkCreate(product: $id, variants: $inputs) {
            bulkProductErrors {
                field
                message
                code
                index
            }
            errors {
                field
                message
            }
        }
    }
`;

export const ProductVariantBulkDeleteMutation = gql`
    mutation ProductVariantBulkDelete($ids: [ID!]!) {
        productVariantBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;
