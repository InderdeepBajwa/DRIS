
// Configuration file for AuthServService

import { ENV } from './../env.config';

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'wey99dpsWpGBeQ76ZRzz0KrJRXbvoPE8',
    CLIENT_DOMAIN: 'dris0.auth0.com', // e.g., you.auth0.com
    AUDIENCE: 'https://dris0.auth0.com/api/v2/', // e.g., http://localhost:8083/api/
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile read:messages write:messages'
};