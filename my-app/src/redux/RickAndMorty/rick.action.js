import { ERROR, FETCHING, SUCCESS, ERROR_CHAR, FETCHING_CHAR, SUCCESS_CHAR } from "./rick.types";


export const getRickAndMortyCharacters = (dispatch = () => {}) => async () => {
    try {
        dispatch({ type: FETCHING })
        await new Promise((resolve) => setTimeout(resolve, 1200))
        const response = await fetch("https://rickandmortyapi.com/api/character/").then(r => r.json())
        console.log(response)
        dispatch({ type: SUCCESS, payload: response.results })
    } catch (err) {
        console.log(err)
        dispatch({ type:ERROR })
    }
}

export function getRickAndMortyCharacters2(id) {
    return async function (dispatch) {
        try {
            dispatch({ type: FETCHING })
            await new Promise((resolve) => setTimeout(resolve, 1200))
            const response = await fetch("https://rickandmortyapi.com/api/character/").then(r => r.json())
            console.log(response)
            dispatch({ type: SUCCESS, payload: response.results })
        } catch (err) {
            console.log(err)
            dispatch({ type:ERROR })
        }
    }
}


export const getCharacterById = dispatch => async (id = 1) => {
    console.log(dispatch)
    try {
        dispatch({ type: FETCHING_CHAR })
        await new Promise((resolve) => setTimeout(resolve, 1200))
        const response = await fetch("https://rickandmortyapi.com/api/character/" + id).then(r => r.json())
        dispatch({ type: SUCCESS_CHAR, payload: response })
    } catch (err) {
        console.log(err)
        dispatch({ type:ERROR_CHAR })
    }
}