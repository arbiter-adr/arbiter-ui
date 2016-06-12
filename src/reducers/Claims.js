const DEFAULT_CLAIMS_STATE = {
  openClaims : false,
  claims : []
}

export default function CLAIMS(state = DEFAULT_CLAIMS_STATE, action){
  switch(action.type){
    case "OPEN_CLAIMS":
      return {
        ...state,
        openClaims : action.openClaims,
        claims : action.claims
      };
      break;
    default:
      return state;
  }
}
