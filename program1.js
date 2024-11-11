const getTotalIsles = function (grid) {
  // Edge case: if grid is empty, return 0 islands
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  
  const dfs = (i, j) => {
    
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
          return;
      }

      
      grid[i][j] = 'W';

      dfs(i - 1, j); // up
      dfs(i + 1, j); // down
      dfs(i, j - 1); // left
      dfs(i, j + 1); // right
  };

 
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          
          if (grid[i][j] === 'L') {
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
