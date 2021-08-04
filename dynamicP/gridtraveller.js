const gridtraveller=(m,n,memo={})=>{
    const key = m + ',' + n;
    if(key in memo)return memo[key];
    if(m === 1 && n === 1)return 1;
    if(m === 0 || n === 0)return 0;
    memo[key] = gridtraveller(m-1,n,memo) + gridtraveller(m,n-1,memo);
    return memo[key];
};
//test cases
console.log(gridtraveller(30,30));