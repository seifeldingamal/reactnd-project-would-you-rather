export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const UN_SET_AUTHED_USER = 'UN_SET_AUTHED_USER'

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function unSetAuthedUser () {
    return {
        type: UN_SET_AUTHED_USER,
    }
}