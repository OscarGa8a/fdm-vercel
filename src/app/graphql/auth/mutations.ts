import gql from 'graphql-tag';

export const fragmentUser = gql`
    fragment User on User {
        id
        email
        firstName
        lastName
        permissions {
            code
            name
        }
        avatar {
            url
        }
    }
`;

export const tokenAuthMutation = gql`
    ${fragmentUser}
    mutation TokenAuth($email: String!, $password: String!) {
        tokenCreate(email: $email, password: $password) {
            token
            errors {
                field
                message
            }
            user {
                ...User
            }
        }
    }
`;


export const tokenVerifyMutation = gql`
    ${fragmentUser}
    mutation VerifyToken($token: String!) {
        tokenVerify(token: $token) {
            payload
            user {
                ...User
            }
        }
    }
`;

export const requestPasswordReset = gql`
    mutation RequestPasswordReset($email: String!, $redirectUrl: String!) {
        requestPasswordReset(email: $email, redirectUrl: $redirectUrl) {
            errors {
                field
                message
            }
        }
    }
`;

export const setPassword = gql`
    ${fragmentUser}
    mutation SetPassword($email: String!, $password: String!, $token: String!) {
        setPassword(email: $email, password: $password, token: $token) {
            token
            errors {
                field
                message
            }
            user {
                ...User
            }
        }
    }
`;

