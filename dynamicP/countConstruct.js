const countConstruct=(target, wordbank, memo={})=>{
    if(target in memo) return memo[target];
    if(target === '') return 1;
    let totalCount=0;
    for(let word of wordbank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const num=countConstruct(suffix, wordbank, memo);
            totalCount+=num;
                //memo[target] = 1;
                //return 1;

            
        }
    }
    memo[target]=totalCount;
   return totalCount;
};

//test cases

console.log(countConstruct("abcdef", ["ab","abc","cd","def","abcd"]));//average case
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["ee","eeee","eeeeee","eee","eeeeeeeeeeeee"]));//worst case

//m=target.length
//n=word.length
//time complexity is: O(n*m)
//space complexity is: O(m2)