import gql from 'graphql-tag';
import { menuItemFragment, menuItemNestedFragment } from './queries';

const menuCreate = gql`
    mutation MenuCreate($input: MenuCreateInput!) {
        menuCreate(input: $input) {
            errors {
                field
                message
            }
            menu {
                id
            }
        }
    }
`;

const menuBulkDelete = gql`
    mutation MenuBulkDelete($ids: [ID]!) {
        menuBulkDelete(ids: $ids) {
            errors {
                field
                message
            }
        }
    }
`;

const menuDelete = gql`
    mutation MenuDelete($id: ID!) {
        menuDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const menuItemCreate = gql`
    ${menuItemNestedFragment}
    mutation MenuItemCreate($input: MenuItemCreateInput!) {
        menuItemCreate(input: $input) {
            errors {
                field
                message
            }
            menuItem {
                menu {
                    id
                    items {
                        ...MenuItemNestedFragment
                    }
                }
            }
        }
    }
`;

const menuUpdate = gql`
    mutation MenuUpdate(
        $id: ID!
        $name: String!
        $moves: [MenuItemMoveInput]!
        $removeIds: [ID]!
    ) {
        menuUpdate(id: $id, input: { name: $name }) {
            errors {
                field
                message
            }
        }

        menuItemMove(menu: $id, moves: $moves) {
            errors {
                field
                message
            }
        }

        menuItemBulkDelete(ids: $removeIds) {
            errors {
                field
                message
            }
        }
    }
`;

const menuItemUpdate = gql`
    ${menuItemFragment}
    mutation MenuItemUpdate($id: ID!, $input: MenuItemInput!) {
        menuItemUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            menuItem {
                ...MenuItemFragment
            }
        }
    }
`;
