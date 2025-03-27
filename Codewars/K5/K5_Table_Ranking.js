// You organize a sports league in a round-robin-system. Each team meets all other teams. In your league a win gives a team 2 points, a draw gives both teams 1 point. After some games you have to compute the order of the teams in your league. You use the following criteria to arrange the teams:
// Points
// Scoring differential (the difference between goals scored and those conceded)
// Goals scored

// First you sort the teams by their points. If two or more teams reached the same number of points, the second criteria comes into play and so on. Finally, if all criteria are the same, the teams share a place.

// Input
// number: Number of teams in your league.
// games: An array of arrays. Each item represents a played game with an array of four elements [TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
// Output
// positions: An array of positions. The i-th item should be the position of the i-th team in your league.

// Example
// number = 6
// games = [[0, 5, 2, 2],   // Team 0 - Team 5 => 2:2
//          [1, 4, 0, 2],   // Team 1 - Team 4 => 0:2
//          [2, 3, 1, 2],   // Team 2 - Team 3 => 1:2
//          [1, 5, 2, 2],   // Team 1 - Team 5 => 2:2
//          [2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
//          [3, 4, 1, 1],   // Team 3 - Team 4 => 1:1
//          [2, 5, 0, 2],   // Team 2 - Team 5 => 0:2
//          [3, 1, 1, 1],   // Team 3 - Team 1 => 1:1
//          [4, 0, 2, 0]]   // Team 4 - Team 0 => 2:0

// You may compute the following table:
// Rank	Team	For : Against	GD	Points
// 1.	Team 4	5 : 1	+4	5
// 2.	Team 5	6 : 4	+2	4
// 3.	Team 3	4 : 3	+1	4
// 4.	Team 0	3 : 5	-2	2
// 4.	Team 1	3 : 5	-2	2
// 6.	Team 2	2 : 5	-3	1
// Team 5 and Team 3 reached the same number of points. But since Team 5 got a better scoring differential, it ranks better than Team 3. All values of Team 0 and Team 1 are the same, so these teams share the fourth place.
// In this example you have to return the array [4, 4, 6, 3, 1, 2].


function computeRanks(number, games) { // so already did something similar, so wasnt too hard
    let teams = new Array(number)
    for(let i=0; i<number; i++) { teams[i] = [i,0,0,0] } // [team#, score, concede, points]
    for (let g of games) {
      let t1 = g[0], t2 = g[1], s1 = g[2], s2 = g[3]
      teams[t1][1] += s1
      teams[t1][2] += s2
      teams[t2][1] += s2
      teams[t2][2] += s1
      if(s1>s2) { // points
        teams[t1][3] += 2
      } else if (s1<s2) {
        teams[t2][3] += 2
      } else {
        teams[t1][3] += 1
        teams[t2][3] += 1
      }
    }
    teams = teams.sort((a,b)=>b[1]-a[1]).sort((a,b)=>(b[1]-b[2])-(a[1]-a[2])).sort((a,b)=>b[3]-a[3])
  
    let res = new Array(number), rank=1
    teams.forEach((t,i)=>{
      if(i!=0) {
        if(t[1]!=teams[i-1][1] || t[2]!=teams[i-1][2] || t[3]!=teams[i-1][3]) { rank=i+1 }
      }
      res[t[0]] = rank
    })
  
    return res
  }
  
// or...

function computeRanks(number, games) { // important takeaways here : for methods, the typical 'e' element parameter can also be an array, to match with whatever argument's structure, so wont have to do something like e[0] / e[3] all over the place... also, can do "?:" comparisons (forget name) inside brackets for grabbing index or keys !!!
    const teams = [...Array(number)].map((_, i) => ({id: i, score: 0, goals: 0, diff: 0}));
    games.forEach(([a, b, x, y]) => {
      teams[a].goals += x;
      teams[b].goals += y;
      teams[a].diff += x - y;
      teams[b].diff += y - x;
      if (x === y) {
        teams[a].score += 1;
        teams[b].score += 1;
      }
      else {
        teams[x > y ? a : b].score += 2;
      }
    });
    const cmp = (a, b) => b.score - a.score || b.diff - a.diff || b.goals - a.goals;
    teams.sort(cmp);
    const r = Array(number).fill(0);
    for (let i = 0, prev = null, k; i < number; prev = teams[i++]) {
      if (!prev || cmp(prev, teams[i]) !== 0) {
        k = i + 1;
      }
      r[teams[i].id] = k;
    }
    return r;
  }