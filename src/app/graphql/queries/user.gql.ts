import gql from 'graphql-tag';

export const USER = gql`
    query($login: String!) {
        user(login: $login) {
            avatarUrl
            login
            name
        }
    }
`;
