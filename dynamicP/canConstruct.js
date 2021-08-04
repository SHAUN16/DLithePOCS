const canConstruct=(target, wordbank, memo={})=>{
    if(target in memo) return memo[target];
    if(target === '') return 1;
    
    for(let word of wordbank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordbank, memo) === true){
                memo[target] = 1;
                return 1;

            }
        }
    }
    memo[target]=false;
    return false;
};

//test cases

console.log(canConstruct("abcdef", ["ab","abc","cd","def","abcd"]));//average case
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["ee","eeee","eeeeee","eee","eeeeeeeeeeeee"]));//worst case

//m=target.length
//n=word.length
//time complexity is: O(n*m)
//space complexity is: O(m2)