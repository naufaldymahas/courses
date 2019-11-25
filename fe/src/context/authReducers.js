import Type from "../helpers/Type";

const authReducers = (state, action) => {
    switch (action.type) {
        case Type.LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                fullName: action.payload.fullName,
                email: action.payload.email,
                isVerified: action.payload.isVerified
            }
        case Type.KEEP_LOGIN:
            console.log(action)
            return {
                ...state,
                id: action.payload.id,
                fullName: action.payload.fullName,
                email: action.payload.email,
                isVerified: action.payload.isVerified
            }
        default:
            return state;
    }
}

export default authReducers