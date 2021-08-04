const bestSum=(targetSum, numbers, memo={})=>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    let shortestCombo = null;

    for (let num of numbers){
        const rem = targetSum - num;
        const res = bestSum(rem, numbers, memo);
        if(res !== null){
            const combo = [ ...res, num ];
            if( shortestCombo === null || combo.length < shortestCombo.length ){
                shortestCombo = combo;

            }
        }
    }
    memo[targetSum] = shortestCombo;
    return shortestCombo;
};

//test cases
console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(300, [7, 14]));