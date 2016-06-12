const DEFAULT_DISPUTES_STATE = {
  openDisputes : false,
  disputes : []
}

export default function DISPUTES(state = DEFAULT_DISPUTES_STATE, action){
  switch(action.type){
    case "OPEN_DISPUTES":
      return {
        ...state,
        openDisputes : action.openDisputes,
        disputes : action.disputes
      };
      break;
    default:
      return state;
  }
}
