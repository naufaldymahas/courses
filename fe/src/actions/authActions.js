import Type from '../helpers/Type'

export const login = (data) => {
    return {
        type: Type.LOGIN_SUCCESS,
        payload: data
    }
}
