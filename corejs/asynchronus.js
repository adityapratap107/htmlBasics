// using timeout

const networkRequest = () => {
    setTimeout(() => {
      console.log('Async Code');
    }, 2000);
  };
  console.log('Hello World');
  networkRequest();