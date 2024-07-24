// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const result = await promise.json();

//     const posts = result.filter(element => element.userId === userId)

//     console.log(posts);
// }

// postsByUser(4)

async function firstSixIncomplete(trueFalse) {
    

    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    
    const result = await promise.json();
        
    const incomplete = result.filter(element => !element.completed).slice(0, 6)


    console.log(incomplete) 


}

firstSixIncomplete(false)