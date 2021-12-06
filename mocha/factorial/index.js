const factorialHelper = (n) => {
  if(n === 0 || n === 1) {
    return 1;
  }
  else {
    return n * factorialHelper(n-1);
  }
}

const Calculate = {
  factorial(input) {
    return factorialHelper(input)
  }
}


module.exports = Calculate;


