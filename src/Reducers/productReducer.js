

const productReducer=(state, action)=> {
   switch (action.type) {
       case 'ADD_QUANTITY':
           state+= action.payload;
           break;
       
       case 'SUBTRACT':
           state-= action.payload
       default:
           break;
   }

   return state;
}

export default productReducer;