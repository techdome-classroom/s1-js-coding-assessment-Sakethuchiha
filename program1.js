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

      // Mark the current cell as water to avoid re-visiting
      grid[i][j] = 'W';

      // Explore all four directions: up, down, left, and right
      dfs(i - 1, j); // up
      dfs(i + 1, j); // down
      dfs(i, j - 1); // left
      dfs(i, j + 1); // right
  };

  // Iterate over each cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // If the cell is land, it represents a new island
          if (grid[i][j] === 'L') {
              islandCount++;
              dfs(i, j); // Explore the entire island
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
