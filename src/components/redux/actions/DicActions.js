import {POST_START, SUCCESS, FAILURE} from "./actionType"

export const post_success = (torf) =>{
  return {
    type: POST_START,
    payload: torf
  }
}

export const success = (data) =>{
  return {
    type: SUCCESS,
    payload: data
  }
}

export const failure = (err) =>{
  return {
    type: FAILURE,
    payload: err
  }
}