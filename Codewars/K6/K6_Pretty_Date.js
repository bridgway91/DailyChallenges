// Write a helper function that accepts an argument (Ruby: a Time object / Others: number of seconds) and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

// toPretty(0) => "just now"
// toPretty(40000) => "11 hours ago"

// Specifics
// The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
// You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
// The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
// Only times in the past will be given, with the range "just now" to "52 weeks ago"


function toPretty(seconds) { // real drawn out, but should be very clear this way
    if(seconds == 0) return 'just now'
    if(seconds == 1) return 'a second ago'
    if(seconds < 60) return `${seconds} seconds ago`
    
    const min = Math.floor(seconds/60)
    if(min == 1) return 'a minute ago'
    if(min < 60) return `${min} minutes ago`
    
    const hr = Math.floor(min/60)
    if(hr == 1) return 'an hour ago'
    if(hr < 24) return `${hr} hours ago`
    
    const d = Math.floor(hr/24)
    if(d == 1) return 'a day ago'
    if(d < 7) return `${d} days ago`
    
    const w = Math.floor(d/7)
    if(w == 1) return 'a week ago'
    if(w < 53) return `${w} weeks ago`
  }

// or

function toPretty(t) { // so looks a little sloppy and unclear, but is less lines than mine... (not sure if overall more efficient)
    var arr = [604800, 86400, 3600, 60], names = ["a week# ago", "a day# ago", "an hour# ago", "a minute# ago"];
    for (key in arr) if (t >= arr[key])
        return (t / arr[key] | 0) == 1 ?names[key].replace("#", "")
            :(t / arr[key] | 0) + names[key].replace(/^an|a/, "").replace("#", "s");
    return t == 0 ?"just now" :t == 1 ?"a second ago" :t + " seconds ago";
}