import Post from './Post'
import Get from './Get'

export const Auth = {
    register: (data) => Post('auth/register', data),
    login: (params) => Get('auth/login', params)
}