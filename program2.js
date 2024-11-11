const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Initialize DP table
  const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));
  dp[0][0] = true; // empty pattern matches empty string

  // Handle patterns that start with '*', allowing it to match an empty sequence
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              // '*' can match any sequence, including an empty one
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
             
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  
  return dp[m][n];
};

module.exports = decodeTheRing;
