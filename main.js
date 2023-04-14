//Array squared

//const input = [1, 2, 3, 4, 5];
//result [1, 4, 9, 16, 25];

function square(arr) {
    const squaredArr = arr.map(n => Math.pow(n, 2));
    return squaredArr
  }
  
  //console.log(square(input))
  
  //Sum of every positive element
  
  //const input = [1, -4, 12, 0, -3, 29, -150];
  
  function positiveSum(arr) {
    const filterPositives = arr.filter(n => n > 0);
    const sumPositives = filterPositives.reduce((acc, cur) => acc + cur, 0)
    return sumPositives 
  }
  
  //console.log(positiveSum(input))
  
  //Calculate Median and Mean
  
  //const input = [12, 46, 32, 64];
  //result  { mean: 38.5, median: 39 }
  
  function medianAndMean(arr) {
    const mean = arr.reduce((acc, cur) => acc+cur, 0)/arr.length
    console.log(mean)
    const resultObj = { mean: 0, median: 0 }
    resultObj["mean"] = mean
    const sortArr = arr.sort()
    console.log(sortArr)
    const median = (sortArr[1] + sortArr[2])/2
    resultObj["median"] = median
    return resultObj;
  }
  
  //console.log(medianAndMean(input))
  
  //Get name initials
  
  //const input = "George Raymond Richard Martin";
  
  function initialize(str) {
    const strSplit = str.split(' ')
    const initial = strSplit.map(name => name[0])
    const joinInitial = initial.join('')
    return joinInitial
  }
  
  //console.log(initialize(input))
  
  /* const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ]; */
  
  //result [13, 67, 54];
  
  function oldYoungDif(arr) {
    const resultArr = [];
    const young = Math.min(...arr.map(n => n.age))
    const old = Math.max(...arr.map(n => n.age))
    const diff = old - young
    resultArr.push(young, old, diff)
    return resultArr
  }
  
  //console.log(oldYoungDif(input))
  
  //const input = "Every developer likes to mix kubernetes and javascript";
  // result "E3y d7r l3s to mix k8s and j8t";
  function numeronym(str) {
   return str[0] + (str.length-2) + str[str.length-1]
  }
  
  function createNumeronym(str) {
    const wordsWithNumber = str
      .split(' ')
      .map((word) => word.length >= 4 ? numeronym(word) : word)
      .join(' ')
    return wordsWithNumber
  }
  
  //console.log(createNumeronym(input));
  
  const input = 6;
  //result 720
  
  function factorial(n) {
    const start = [n];
    console.log(start)
    const fillStart = start.fill(null, 0, n)
    console.log(fillStart)
  }
  
  console.log(factorial(input))
  