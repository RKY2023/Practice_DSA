
var isPrefixOfWord = function(sentence, searchWord) {
  let isFound = false;
    let space = 0;
    for(let i in sentence){
        if(isFound){
            break;
        }
        if(sentence[i] === ' '){
            space++;
        }
        else if(sentence[i] == searchWord[0] && (sentence[i-1] == ' ' || sentence[i-1] == undefined)){
           for(let j in searchWord){
            if(sentence[i] != searchWord[j]){
                break;
            } else if(j == (searchWord.length-1)){
                isFound = true;
            }
            i++;
           }
        }

    }
    if(isFound){
        return space+1;
    } else{
        return -1
    }
};

console.log(isPrefixOfWord('burgove eating burger','burg'));