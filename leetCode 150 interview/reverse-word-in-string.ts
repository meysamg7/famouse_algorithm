function reverseWords(s: string): string {
    s = s.trim();
    let cleanWord = s.split(/\s+/)
    cleanWord.reverse();
    return cleanWord.join(" "); 
};