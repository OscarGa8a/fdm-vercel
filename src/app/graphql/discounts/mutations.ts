import gql from 'graphql-tag';

import { saleDetailsFragment, saleFragment, voucherDetailsFragment, voucherFragment } from './queries';

const saleUpdate = gql`
    ${saleFragment}
    mutation SaleUpdate($input: SaleInput!, $id: ID!) {
        saleUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            sale {
                ...SaleFragment
            }
        }
    }
`;

const saleCataloguesAdd = gql`
    ${saleDetailsFragment}
    mutation SaleCataloguesAdd(
        $input: CatalogueInput!
        $id: ID!
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        saleCataloguesAdd(id: $id, input: $input) {
            errors {
                field
                message
            }
            sale {
                ...SaleDetailsFragment
            }
        }
    }
`;

const saleCataloguesRemove = gql`
    ${saleDetailsFragment}
    mutation SaleCataloguesRemove(
        $input: CatalogueInput!
        $id: ID!
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        saleCataloguesRemove(id: $id, input: $input) {
            errors {
                field
                message
            }
            sale {
                ...SaleDetailsFragment
            }
        }
    }
`;

const saleCreate = gql`
    ${saleFragment}
    mutation SaleCreate($input: SaleInput!) {
        saleCreate(input: $input) {
            errors {
                field
                message
            }
            sale {
                ...SaleFragment
            }
        }
    }
`;

const saleDelete = gql`
    mutation SaleDelete($id: ID!) {
        saleDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const saleBulkDelete = gql`
    mutation SaleBulkDelete($ids: [ID]!) {
        saleBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

const voucherUpdate = gql`
    ${voucherFragment}
    mutation VoucherUpdate($input: VoucherInput!, $id: ID!) {
        voucherUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            voucher {
                ...VoucherFragment
            }
        }
    }
`;

const voucherCataloguesAdd = gql`
    ${voucherDetailsFragment}
    mutation VoucherCataloguesAdd(
        $input: CatalogueInput!
        $id: ID!
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        voucherCataloguesAdd(id: $id, input: $input) {
            errors {
                field
                message
            }
            voucher {
                ...VoucherDetailsFragment
            }
        }
    }
`;

const voucherCataloguesRemove = gql`
    ${voucherDetailsFragment}
    mutation VoucherCataloguesRemove(
        $input: CatalogueInput!
        $id: ID!
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        voucherCataloguesRemove(id: $id, input: $input) {
            errors {
                field
                message
            }
            voucher {
                ...VoucherDetailsFragment
            }
        }
    }
`;

const voucherCreate = gql`
    ${voucherFragment}
    mutation VoucherCreate($input: VoucherInput!) {
        voucherCreate(input: $input) {
            errors {
                field
                message
            }
            voucher {
                ...VoucherFragment
            }
        }
    }
`;

const voucherDelete = gql`
    mutation VoucherDelete($id: ID!) {
        voucherDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const voucherBulkDelete = gql`
    mutation VoucherBulkDelete($ids: [ID]!) {
        voucherBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

