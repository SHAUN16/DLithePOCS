let fibonacci = (num,memo={}) => {
    if (num in memo) return memo[num];
    if(num < 2){
      return num;
    }
  
    memo[num] = fibonacci(num - 1,memo) + fibonacci(num - 2,memo);
    return memo[num];
  }

  console.log(fibonacci(1000));