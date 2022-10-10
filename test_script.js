// This module supposed to contain unit tests for the todo application 
// However, If I had more time, I prefered uding "jest" library 
// and writing more more unit tests :)

// Variables
const script = window.todo_script;
const item = script.item;
let item_id = 3;

describe('checkItem', () => {
   it('Should check item', () => {
       item(checkItem(item_id)).to.deep.equal(5)
   })
})
