// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)


const REGEXP = /^(?=(.)*[A-Z]+)(?=(.)*[a-z]+)(?=(.)*[0-9]+)[A-Za-z0-9]{6,}$/; // took quite a while to figure this out; already could handle doing each of those reqs individually, but all at once was throwing me for a loop... at first was thinking the look ahead/behind options wouldnt work while focusing on a specific character, but if i just do look-aheads from the start of the string, it works out great! ... little long tho


// or

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/; // yay, explanation ... ok, pretty much same as mine actually, just cleaned up a bit
//^ - matches the beginning of the string
//(?=.*[a-z]) - a positive lookahead that matches any character zero or more times, followed by a lowercase letter. This ensures that the password contains at least one lowercase letter.
//(?=.*[A-Z]) - a positive lookahead that matches any character zero or more times, followed by an uppercase letter. This ensures that the password contains at least one uppercase letter.
//(?=.*\d) - a positive lookahead that matches any character zero or more times, followed by a digit. This ensures that the password contains at least one digit.
//[a-zA-Z\d]{6,} - matches any alphanumeric character (excluding '_') six or more times. This ensures that the password is at least six characters long and only contains alphanumeric characters.
//$ - matches the end of the string.