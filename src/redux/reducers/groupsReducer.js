import actionTypes from "../action/actionTypes";

const initialState={
    pedding:false,
    success:false,
    groups:[],
    fail:false,
    error:""
}

const groupsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.groupaction.GET_GROUPS_START:
            return{
                ...state,
                pedding:true
            }

        case actionTypes.groupaction.GET_GROUPS_SUCCESS:
            return{
                ...state,
                pedding:false,
                success:true,
                fail:false,
                groups:action.payload
            }
        case actionTypes.groupaction.GET_GROUPS_FAİL:
            return{
                ...state,
                pedding:false,
                success:false,
                fail:true,
                error:action.payload
            }
        default:
            return state
    }
}

export default groupsReducer;