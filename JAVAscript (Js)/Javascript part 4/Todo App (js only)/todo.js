// let Todo = [];
// let request = prompt('What do you want to do? (new/1 , list/2 , delete/3, quit/4');
// //while loop to keep asking for input until user quits
// while (request !== 'quit' && request !== '4') {
//     if (request === 'new' || request === '1') {
//         let newtodo = prompt('what do you want to add?');
//         Todo.push(newtodo);
//         console.log(`Added '${newtodo} to the  list.👀`);
//     } else if (request === 'list') {
//         console.log('**********');
//         for (let i = 0; i < Todo.length; i++) {
//             console.log(i + 1, Todo[i]);
//         }
//     } else if(request === 'delete' || request === '3') {
//         if (Todo.length === 0) {
//             console.log('Todo list is empty. Nothing to delete.');}
//         let index = parseInt(prompt('please enter the index of the todo list you want to delete'));
    
//         if (index >= 0 && index < Todo.length) {
//             let deleted = Todo.splice(index, 1);
//             console.log(`Deleted ${deleted} from the list.`);
//         }
    
//         else {
//             console.log('Invalid index. Please try again.');
//         }


//     }


//     console.log('You quit the app.');
let Todo = [];
let request = prompt('What do you want to do? (new/1 , list/2 , delete/3, quit/4)');

while (request !== 'quit' && request !== '4') {
    if (request === 'new' || request === '1') {
        let newtodo = prompt('What do you want to add?');
        Todo.push(newtodo);
        console.log(`Added '${newtodo}' to the list. 👀`);
    } else if (request === 'list' || request === '2') {
        console.log('**********');
        for (let i = 0; i < Todo.length; i++) {
            console.log(i + 1, Todo[i]);
        }
        console.log('**********');
    } else if (request === 'delete' || request === '3') {
        if (Todo.length === 0) {
            console.log('Todo list is empty. Nothing to delete.');
        } else {
            let index = parseInt(prompt('Enter the index (starting from 1) of the todo you want to delete:')) - 1;
            if (index >= 0 && index < Todo.length) {
                let deleted = Todo.splice(index, 1);
                console.log(`Deleted '${deleted}' from the list.`);
            } else {
                console.log('Invalid index. Please try again.');
            }
        }
    } else {
        console.log('Invalid command. Try again.');
    }

    request = prompt('What do you want to do? (new/1 , list/2 , delete/3, quit/4)');
}

console.log('You quit the app. 👋');
