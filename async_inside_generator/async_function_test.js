/* This does not work, without an export keyword */
// async function test(){
//     return await new Promise((res, rej) => setTimeout(() => res(10), 1000));
// }

/* Now, this works with export. Why? */
export async function test() {
    return await new Promise((res, rej) => setTimeout(() => res(10), 1000));
}

function* Search(){
    let a = yield test();
    console.log(a)
}

test().then(a => console.log(a));
Search().next(20);
