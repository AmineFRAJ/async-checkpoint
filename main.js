//****************************************task 1******************************************************************
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function iterateWithAsyncAwait(arr) {
  for (let el of arr) {
    console.log(el);
    await delay(1500);
  }
}
//   let arr =[10 ,5 , 8 , 15 ,160];
let arr = ["h", "e", "l", "l", "o"];
//   iterateWithAsyncAwait(arr);

//***************************************task 2*********************************************************************
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched Data");
    }, 2000);
  });
}
async function awaitCall() {
  const data = await fetchData();
  console.log(data);
}
// awaitCall();

//***************************************task 3**********************************************************************
function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        console.log(randomNumber);
        resolve("Fetched Data");
      } else {
        console.log(randomNumber);
        reject(new Error("Failed to fetch Data"));
      }
    }, 1000);
  });
}
// // Usage
// asyncTask()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

//*****************************************task 3 chaining**************************************************************
async function Function1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 1 completed");
      resolve();
    }, 1000);
  });
}
async function Function2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 completed");
      resolve();
    }, 1000);
  });
}
async function Function3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 3 completed");
      resolve();
    }, 1000);
  });
}
async function chainedAsyncFunctions() {
  await Function1();
  await Function2();
  await Function3();
}

// chainedAsyncFunctions();

//************************************************task 04 promise.all ********************************************/
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function function1() {
  await delay(1000);
  return "First data";
}

async function function2() {
  await delay(3000);
  return "Second data";
}

async function concurrentRequests() {
  try {
    const [data1, data2] = await Promise.all([function1(), function2()]);
    console.log("Combined results:", data1, data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// concurrentRequests();

//********************************task 05*************************** *//
function fetch(url) {
  return new Promise((resolve) => {
    const simulatedDelay = url.length * 1000;
    setTimeout(() => {
      resolve(`Fetched data from ${url}`);
    }, simulatedDelay);
  });
}

async function parallelCalls(urls) {
  try {
    const fetchPromises = urls.map((url) => fetch(url));
    const responses = await Promise.all(fetchPromises);
    console.log("Responses:", responses);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage:
const urls = ["url1", "url2", "url3"];
parallelCalls(urls);
