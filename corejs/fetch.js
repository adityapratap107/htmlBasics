// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response))
//       // .then(response => response.json())
//       // .then(json => console.log(json))

const abc = () => {
      const getData = fetch('https://jsonplaceholder.typicode.com/todos');
      // console.log(getData);
      getData.then(res => console.log(res))
}
abc();

// getData.then(response => console.log(response.json()))
