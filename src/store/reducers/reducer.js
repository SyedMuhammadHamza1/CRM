const INITIAL_STATE = {
     criminalData :[]

}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case 'CRIMINAL_DATA':
            return ({
                ...state,
                criminalData: action.payload
            })
         
        default:
            return state;
    }

}