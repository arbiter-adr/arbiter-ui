const DEFAULT_TRANSACTIONS_STATE = {
  unsignedTransactions : [],
  error : undefined
}

export default function TRANSACTIONS(state = DEFAULT_TRANSACTIONS_STATE, action){
  switch(action.type){
    case "UNSIGNED_TRANSACTIONS":
      return {
        ...state,
        unsignedTransactions : action.unsignedTransactions
      };
      break;
    case "TRANSACTIONS_ERROR":
      return {
        ...state,
        error : action.error
      };
      break;
    default:
      return state;
  }
}
