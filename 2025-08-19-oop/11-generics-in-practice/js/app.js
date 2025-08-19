(async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    const user = users[0];
    console.log(user);
    console.log(user.wife.name); // runtime error!!!
})();
