import actionTypes from "../action/actionTypes";

const initialState={
    pedding:false,
    success:false,
    telephones:[],
    fail:false,
    error:""
}

const telephonesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.telephoneaction.GET_TELEPHONES_START:
            return{
                ...state,
                pedding:true
            }
            case actionTypes.telephoneaction.GET_TELEPHONES_SUCCESS:
            return{
                ...state,
                pedding:false,
                success:true,
                fail:false,
                telephones:action.payload
            }
            case actionTypes.telephoneaction.GET_TELEPHONES_FAİL:
                return{
                    ...state,
                    pedding:false,
                    success:false,
                    fail:true,
                    error:action.payload
                }
                case actionTypes.telephoneaction.DELETE_TELEPHONES_START:
                    return{
                        ...state,
                        pedding:true
                    }
                case actionTypes.telephoneaction.DELETE_TELEPHONES_SUCCESS:
                    let filteredtelephones=state.telephones.filter(item=>item.id !== action.payload)
                    return{
                        ...state,
                        pedding:false,
                        success:true,
                        fail:false,
                        telephones:filteredtelephones
                    }
                case actionTypes.telephoneaction.DELETE_TELEPHONES_FAİL:
                    return{
                        ...state,
                        pedding:false,
                        success:false,
                        fail:true,
                        error:action.payload
                    }
                case actionTypes.telephoneaction.ADD_TELEPHONES:
                    return{
                        ...state,
                        telephones:[...state.telephones,action.payload]
                    }
                    default:
                        return state
    }
}

export default telephonesReducer;