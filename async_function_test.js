async function test(){
    return await new Promise((res, rej) => setTimeout(() => res(10), 1000));
}

// export async function test() {
//     return await new Promise((res, rej) => setTimeout(() => res(10), 1000));
// }

test().then(a => console.log(a));
