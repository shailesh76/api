import TransactionSchema from "./TransactionSchema.js";

//CRUD

// insert
export const insertTrans = (insertObj) => {
  return TransactionSchema(insertObj).save();
};

// Read all transaction, @filter must be an object {}
export const getAllUserTransactions = (filterObj) => {
  //   return TransactionSchema.find();
  return TransactionSchema.find(filterObj);
};

// Delete
export const deleteManyTrans = (ids, userId) => {
  return TransactionSchema.deleteMany({
    _id: {
      $in: ids,
    },
    userId,
  });
};
