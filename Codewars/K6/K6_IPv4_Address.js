// Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.
// It should only accept addresses in canonical representation, so no leading 0s, spaces etc.

String.prototype.ipv4Address = function() { // so could have done a non-regex method easily enough, but challenge tag indicated it wanted a regex solution, so spent like 30mins trying to figure it out and couldnt get it... so looked at answers to get this
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
  };
/*
my understanding:
- there is a surrounding () with 2 sets of () inside it
  - first () deals w/ the numbers, making so no leading zeros and only up to 255
  - second () deals with the '.', saying the period can not be follow by the end of the string "(?!$)", with an | allowing for end of string after the previous number catch
- {4} makes sure there's exactly 4 instances of the previous pairing (number>period, or number>end)
- final $ makes sure string ends after those 4 instances found
*/