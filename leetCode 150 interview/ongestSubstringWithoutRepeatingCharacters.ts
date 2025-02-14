function lengthOfLongestSubstring(s: string): number {
    let i =0, j =0, max = 0;
    let uniqueSubStr = new Set();
  
    while(j < s.length) {
      if(!uniqueSubStr.has(s[j])) {
        uniqueSubStr.add(s[j++]);
        max = Math.max(max, uniqueSubStr.size);
      } else uniqueSubStr.delete(s[i++]);
    }
    return max;
  };