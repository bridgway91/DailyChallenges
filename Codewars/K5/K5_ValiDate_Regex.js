// Your task is to write a regular expression (regex) that will match a string only if it contains at least one valid date, in the format [mm-dd] (that is, a two-digit month, followed by a dash, followed by a two-digit date, surrounded by square brackets).

// You should assume the year in question is not a leap year. Therefore, the number of days each month should have are as follows:
// 1. January - 31 days
// 2. February - 28 days (leap years are ignored)
// 3. March - 31 days
// 4. April - 30 days
// 5. May - 31 days
// 6. June - 30 days
// 7. July - 31 days
// 8. August - 31 days
// 9. September - 30 days
// 10. October - 31 days
// 11. November - 30 days
// 12. December - 31 days
// All text outside a valid date can be ignored, including other invalid dates.

// For example:
// "[01-23]" // January 23rd is a valid date
// "[02-31]" // February 31st is an invalid date
// "[02-16]" // valid
// "[ 6-03]" // invalid format
// "ignored [08-11] ignored" // valid
// "[3] [12-04] [09-tenth]" // December 4th is a valid date


var validDate = /\[(0[1,3-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\]|\[(0[4,6,9]|11)-(0[1-9]|[12][0-9]|30)\]|\[(02)-(0[1-9]|[12][0-8])\]/; // so i knew the general premise of what i needed to do, match the numbers checking for months then dates, and i got it done for february but it was taking way too long for just that 1 month and it seemed to get too confusing dealing with the opening and closing sections, so i asked chatgpt, and managed to get this answer which worked right away!

// or...

// Valid Date Regex:
// Note: in general, OR pipes (|) are bad in a regex, they are hard to optimize
// and cause a lot of back-tracking.  This uses a lot more than would be preferential,
// but that's because this is a terrible, terrible idea.
// In the real world, you should simply match on /\[(\d\d)-(\d\d)\]/, then validate the date
// by passing it into a date object.
//
//  \[                       Start with an open bracket
//  (?:                      Non-capturing group for entire contents
//
//    (?:                    Non-capturing group for February
//      02-                  literal 0 2 -
//      (?:                  Non-capturing group for February days
//        0[1-9]             00-09
//        |                  OR
//        1\d                10-19
//        |                  OR
//        2[0-8]             20-28
//      )
//    )
//    |                      OR
//
//    (?:                    Non-capturing group for months with 31 days
//      (?:                  Non-capturing group for month
//        0[13578]           01, 03, 05, 07, 08
//        |                  OR
//        1[02]              10, 12
//      )
//      -                    literal -
//      (?:                  Non-capturing group for days
//        0[1-9]             00-09
//        |                  OR
//        [12]\d             10-29
//        |                  OR
//        3[01]              30, 31
//      )
//    )
//    |                      OR
//
//    (?:                    Non-capturing group for months with 30 days
//      (?:                  Non-capturing group for month
//        0[469]             04, 06, 09
//        |                  OR
//        11                 literal 1 1
//      )
//      -                    literal -
//      (?:                  Non-capturing group for days
//        0[1-9]             00-09
//        |                  OR
//        [12]\d             10-29
//        |                  OR
//        30                 literal 3 0
//      )
//    )
//  )
//  \]                       End with a closing bracket
//
var validDate = /\[(?:(?:02-(?:0[1-9]|1\d|2[0-8]))|(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01]))|(?:(?:0[469]|11)-(?:0[1-9]|[12]\d|30)))\]/;