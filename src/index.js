module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = [];
  bracketsConfig.forEach(e => {
    brackets = brackets.concat(e);
  });
  let check = false;
  let same1;
  let same;
  for (let inputBracket of str){
    let bracketIndex;
    if (brackets[brackets.indexOf(inputBracket)] === brackets[brackets.indexOf(inputBracket) + 1]){
      if (!check) {
        if (same === brackets[brackets.indexOf(inputBracket)] || same1 === brackets[brackets.indexOf(inputBracket)]) {
          check = !check
          same = undefined;
        } else {
          if (same) same1 = same;
          same = brackets[brackets.indexOf(inputBracket)];
        }
      } else {
        if (same !== brackets[brackets.indexOf(inputBracket)]){
          same = brackets[brackets.indexOf(inputBracket)];
          check = false
        } else {
          check = true;
        }
      }
      if (check){
        bracketIndex = brackets.indexOf(inputBracket) + 1;
        check = !check;
        if (same === undefined && same1 === brackets[brackets.indexOf(inputBracket)]) same1 = undefined;
      } else {
        bracketIndex = brackets.indexOf(inputBracket);
      }
    } else bracketIndex = brackets.indexOf(inputBracket);
    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1);
    }else {
      if (stack.pop() !== bracketIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
}





