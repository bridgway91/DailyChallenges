// The internet is a very confounding place for some adults. Tom has just joined an online forum and is trying to fit in with all the teens and tweens. It seems like they're speaking in another language! Help Tom fit in by translating his well-formatted English into n00b language.

// The following rules should be observed:
// - "to" and "too" should be replaced by the number 2, even if they are only part of a word (E.g. today = 2day)
// - Likewise, "for" and "fore" should be replaced by the number 4
// - Any remaining double o's should be replaced with zeros (E.g. noob = n00b)
// - "be", "are", "you", "please", "people", "really", "have", and "know" should be changed to "b", "r", "u", "plz", "ppl", "rly", "haz", and "no" respectively (even if they are only part of the word)
// - When replacing words, always maintain case of the first letter unless another rule forces the word to all caps.
// - The letter "s" should always be replaced by a "z", maintaining case
// - "LOL" must be added to the beginning of any input string starting with a "w" or "W"
// - "OMG" must be added to the beginning (after LOL, if applicable,) of a string 32 characters1 or longer
// - All evenly numbered words2 must be in ALL CAPS (Example: Cake is very delicious. becomes Cake IZ very DELICIOUZ)
// - If the input string starts with "h" or "H", the entire output string should be in ALL CAPS
// - Periods ( . ), commas ( , ), and apostrophes ( ' ) are to be removed
// - 3A question mark ( ? ) should have more question marks added to it, equal to the number of words2 in the sentence (Example: Are you a foo? has 4 words, so it would be converted to r U a F00????)
// - 3Similarly, exclamation points ( ! ) should be replaced by a series of alternating exclamation points and the number 1, equal to the number of words2 in the sentence (Example: You are a foo! becomes u R a F00!1!1)

// 1 Characters should be counted After: any word conversions, adding additional words, and removing punctuation. Excluding: All punctuation and any 1's added after exclamation marks ( ! ). Character count includes spaces.
// 2 For the sake of this kata, "words" are simply a space-delimited substring, regardless of its characters. Since the output may have a different number of words than the input, words should be counted based on the output string.
// Example: whoa, you are my 123 <3 becomes LOL WHOA u R my 123 <3 = 7 words
// 3The incoming string will be punctuated properly, so punctuation does not need to be validated.


function n00bify(s){ // i would like it to be made clear that i couldve solved this if i had 3 hrs... so many stupid rules got to be too annoying, so here's someone else's soln... would mine be 2-3x as long and involve unneeded steps? most likely, but w/e... clear difference is that i had been trying to solve it line-by-line for each rule in order, but seems like the ideal method jumps around a bit...
    const d = {be:'b',are:'r',you:'u',please:'plz',people:'ppl','really':'rly',have:'haz',know:'no'}
    s = s.replace(/[.,']/g,'')
    s = s.replace(/too?/gi,'2')
    s = s.replace(/fore?/gi,'4')
    s = s.replace(new RegExp(Object.keys(d).join`|`,'gi'),e=>d[e.toLowerCase()])
    s = s.replace(/oo/gi,'00')
    s = s.replace(/s/g,'z').replace(/S/g,'Z')
    s = /^w/i.test(s) ? 'LOL ' + s : s
    s = s.replace(/[^\w ]/g,'').length>=32 ? (/^LOL/.test(s) ? s.replace(/^LOL/,'LOL OMG') : 'OMG '+s) : s
    s = s.split` `.map((e,i)=>i%2 ? e.toUpperCase() : e).join` `
    s = /^h/i.test(s) ? s.toUpperCase() : s
    s = s.replace(/\?/g,e=>'?'.repeat(s.split` `.length))
    s = s.replace(/!/g,e=>'!1'.repeat(x=s.split` `.length).slice(0,x))
    return s
  }