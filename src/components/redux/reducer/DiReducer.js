import {POST_START, SUCCESS, FAILURE} from "../actions/actionType"

const initialState={
  load:false,
  data:[false],
  error:""
}

const DiReducer = (state = initialState, actions ) =>{
  switch(actions.type){
    case POST_START: return {...state, load:true}
    case SUCCESS: return {...state, load:false, data:actions.payload, error:""}
    case FAILURE: return {...state, load:false, error:actions.payload};
    default: return state
  }
}

export default DiReducer