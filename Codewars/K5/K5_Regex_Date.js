// Your task is to write regular expression that validates gregorian date in format "DD.MM.YYYY"

// Correct date examples:
// "23.12.2008"
// "01.08.1994"
// Incorrect examples:
// "12.23.2008"
// "01-Aug-1994"
// " 01.08.1994"

// Notes:
// maximum length of validator is 400 characters to avoid hardcoding. (shortest solution to date is 170 characters)
// validator should process leap days (February, 29) correctly.
// the date is Gregorian, it's important to determine if year is leap: https://en.wikipedia.org/wiki/Gregorian_calendar


date_validator = /^(?:(?:29\.02\.(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:[02468][048]|[13579][26])00))|(?:0[1-9]|1[0-9]|2[0-8])\.02\.(?:[1-9]\d{3})|(?:0[1-9]|[12][0-9]|30)\.(?:04|06|09|11)\.(?:[1-9]\d{3})|(?:0[1-9]|[12][0-9]|3[01])\.(?:01|03|05|07|08|10|12)\.(?:[1-9]\d{3}))$/ // all CGPT, i never would have the patience for something stupid like this, honestly not even really worth doing