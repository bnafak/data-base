// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response)) // .jsom is not similar but close to JSON.parse
//   .then(json => console.log(json))

// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))
function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function loadUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((json) => displayUsers(json));
}
function displayUsers(data){
  console.log(data);
}
