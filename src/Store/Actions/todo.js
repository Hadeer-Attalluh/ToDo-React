export const AddToDoAction = data => ({type:'Add_ToDo', data : data});
export const DeleteToDoAction = data => ({type:'Delete_ToDo',id:data});
export const unDeleteToDoAction = data => ({type:'unDelete_ToDo',id:data});
export const CompleteToDoAction = data => ({type:'Complete_ToDo',id:data});
export const UncompleteToDoAction = data => ({type:'Uncomplete_ToDo',id:data});