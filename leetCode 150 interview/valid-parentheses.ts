function isValid(s: string): boolean {
    let stack: string[] = [];

    let chars = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for(let i = 0 ; i< s.length ; i++){
        if(s[i] === '{' || s[i] === '(' || s[i] === '[' ){
            stack.push(s[i])
        }else{
            if(stack.length === 0 || stack.pop() !== chars[s[i]]){
                return false;
            }
        }
    }
    return stack.length === 0;
};