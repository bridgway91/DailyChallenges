// In this kata you get an array with 9 strings, which contain the matches from the first match day.
// Every string has this format, where x and y are the number of goals for the teams, if the match has already been played:
// x:y [Team 1] - [Team 2]
// Example:
// 6:0 FC Bayern München - Werder Bremen
// -:- Eintracht Frankfurt - Schalke 04

// The team, which has shot more goals than the other team, wins the match.
// Your method should create and return the league table as one string.

// Every line in the table follows these rules:
//  1. Tableplace with two chars and a dot (" 1.", "12.")
//  2. Space
//  3. Name of the team/club padded right up to 30 chars (filled up with spaces).
//  4. Number of played matches (in this kata always only one digit)
//  5. Two spaces
//  6. Number of won matches (in this kata always only one digit)
//  7. Two spaces
//  8. Number of tie matches (in this kata always only one digit)
//  9. Two spaces
// 10. Number of lost matches (in this kata always only one digit)
// 11. Two spaces
// 12. Differences of goals (shot vs. gotten)
// 13. Two spaces
// 14. Count of points

// It is 3 points for a won match and 1 point for a tie.

// The table has to be sorted by these criteria:
// 1. Points
// 2. If the points are the same: The difference of goals. (2:0 is better than 1:0)
// 3. If the difference of goals is the same: More goals are better! (2:1 is better than 1:0)
// 4. Otherwise: The teams share the same place, but ordered by the name of the team (case-insensitive!)!

// Example with the two matches above, if the league WOULD only have 4 teams:
//  1. FC Bayern München             1  1  0  0  6:0  3 
//  2. Eintrach Frankfurt            0  0  0  0  0:0  0
//  2. Schalke 04                    0  0  0  0  0:0  0
//  4. Werder Bremen                 1  0  0  1  0:6  0

// You do not have to do a check for the input values. It will always be an array of 9 strings and all strings will be complete!


function table (results) { // this shit took so fucking long... what a waste of time..
    let teams = {}
    results.forEach(game=> { // # played matches, # wins, # ties, # lost, #scored:#gaveup , # points (win3,tie1)
      let score = game.slice(0,game.indexOf(' ')).split(':').map(e=>+e)
      let [t1,t2] = game.slice(game.indexOf(' ')).split('-').map(e=>e.trim())
      addData(teams, score, t1)
      addData(teams, score.reverse(), t2)
    })
    let t = [...Object.keys(teams)].map(e=>[e,teams[e]].flat())
      .sort((a,b)=>a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
      .sort((a,b)=>b[5]-a[5])
      .sort((a,b)=>(b[5]-b[6])-(a[5]-a[6]))
      .sort((a,b)=>b[7]-a[7])
    let pos = 1
    t = t.map((e,i)=>{
      if(i!=0) {
        if( e[7]!=t[i-1][8] || (e[5]-e[6])!=(t[i-1][6]-t[i-1][7]) || e[5]!=t[i-1][6]) { pos=i+1 } // important final realization, only the previous indexes needed to be increased by 1
      }
      e.unshift(pos)
      return e
    })
    t = t.map(e=>{
      return String(e[0]).padStart(2,' ') + '. ' + e[1].padEnd(30,' ') + e[2] + '  ' + e[3] + '  ' + e[4] + '  '
        + e[5] + '  ' + e[6] + ':' + e[7] + '  ' + e[8]
    })
    return t.join('\n')
  }
  function addData (teams, score, t) {
    if(Number.isNaN(score[0])) {
      if(!teams[t]) {
        teams[t] = [0,0,0,0,0,0,0]
      }
      return
    }
    if(teams[t]) {
        teams[t][0]++
        teams[t][1] += score[0]>score[1]?1:0
        teams[t][2] += score[0]==score[1]?1:0
        teams[t][3] += score[0]<score[1]?1:0
        teams[t][4] += score[0]
        teams[t][5] += score[1]
        teams[t][6] = teams[t][1]*3 + teams[t][2]*1
    } else {
        teams[t] = [ 1 , score[0]>score[1]?1:0 , score[0]==score[1]?1:0 , score[0]<score[1]?1:0, score[0] , score[1] ]
        teams[t].push(teams[t][1]*3 + teams[t][2]*1)
    }
  }
  