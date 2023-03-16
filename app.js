import axios from 'axios'

async function getData(userid){
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id);

console.log(users);
console.log("post:" , posts);
}


export default getData;