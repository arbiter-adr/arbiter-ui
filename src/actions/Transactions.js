
// exports.signTransaction = (unsignedTransaction) => {
//   return (dispatch) => {
//
//   }
// }

exports.Action = (type, payload) => {
  switch(type){
    case "UNSIGNED_TRANSACTIONS":
      return {
        type,
        unsignedTransactions : payload
      };
      break;
      default:
        var error = new Error("Needs Action Type");
        return {
          type : "TRANSACTIONS_ERROR",
          error
        };
  }
}

let Action = module.exports.Action;
