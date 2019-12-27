/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/



//wont work if thier is spaces between them  it is Solvable be using stack

/*
if ( [ { 
*/

var isBalanced = str => {

    let countParenthesis = 0;
    let countCurly = 0;
    let countBrackets = 0;
    let errorCount = 0;
    for (let i = 0; i < str.length; i++) {

        if (str[i] === '(') { countParenthesis++ }
        if (str[i] === ')') { countParenthesis-- }
        if (str[i] === '{') { countCurly++ }
        if (str[i] === '}') { countCurly-- }
        if (str[i] === '[') { countBrackets++ }
        if (str[i] === ']') { countBrackets-- }
        if (countParenthesis < 0 || countCurly < 0 || countBrackets < 0) 
        { return false }


        if (str[i] === '{' && str[i+1] === ']')
        	return false;
        if (str[i] === '{' && str[i+1] === ')')
        	return false;
        if (str[i] === '(' && str[i+1] === '}')
        	return false;
        if (str[i] === '(' && str[i+1] === ']')
        	return false;
        if (str[i] === '[' && str[i+1] === '}')
        	return false;
        if (str[i] === '[' && str[i+1] === ')')
        	return false;

        
        
}
  
    if (countParenthesis > 0 || countCurly > 0 || countBrackets > 0) {
        return false;
    }

    return true;
    
};
