function capitalize(string){
    const strArray = string.split('');
    const firstLetter = strArray.shift();
    const firstCapLetter = firstLetter.toUpperCase();
    strArray.unshift(firstCapLetter);
    const capitalWord = strArray.join('');
    return capitalWord;
};

export default capitalize;