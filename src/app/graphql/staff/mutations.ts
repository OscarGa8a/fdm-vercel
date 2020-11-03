import gql from 'graphql-tag';

import { staffMemberDetailsFragment } from './queries';

const staffMemberAddMutation = gql`
    ${staffMemberDetailsFragment}
    mutation StaffMemberAdd($input: StaffCreateInput!) {
        staffCreate(input: $input) {
            errors {
                field
                message
            }
            user {
                ...StaffMemberDetailsFragment
            }
        }
    }
`;

const staffMemberUpdateMutation = gql`
    ${staffMemberDetailsFragment}
    mutation StaffMemberUpdate($id: ID!, $input: StaffInput!) {
        staffUpdate(id: $id, input: $input) {
            errors {
                field
                message
            }
            user {
                ...StaffMemberDetailsFragment
            }
        }
    }
`;

const staffMemberDeleteMutation = gql`
    mutation StaffMemberDelete($id: ID!) {
        staffDelete(id: $id) {
            errors {
                field
                message
            }
        }
    }
`;

const staffAvatarUpdateMutation = gql`
    mutation StaffAvatarUpdate($image: Upload!) {
        userAvatarUpdate(image: $image) {
            errors {
                field
                message
            }
            user {
                id
                avatar {
                    url
                }
            }
        }
    }
`;


const staffAvatarDeleteMutation = gql`
    mutation StaffAvatarDelete {
        userAvatarDelete {
            errors {
                field
                message
            }
            user {
                id
                avatar {
                    url
                }
            }
        }
    }
`;


const changeStaffPassword = gql`
    mutation ChangeStaffPassword($newPassword: String!, $oldPassword: String!) {
        passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
            errors {
                field
                message
            }
        }
    }
`;
