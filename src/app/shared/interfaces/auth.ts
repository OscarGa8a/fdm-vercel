export interface ICredentials {
    email: string;
    password: string;
}

export interface IAuthResponse {
    'tokenCreate': {
        'token': string;
        'user': {
            'email': string;
        },
        'errors': []
    };
}
