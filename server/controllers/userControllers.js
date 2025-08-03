export const getUser = (req, res) => {
  return res.json({
    success: true,
    user: {
      name: "John Doe",
      referralCode: "johndoe2025",
      donations: 3700,
    },
  });
};
export const getLeaderboard = (req, res) => {
  return res.json({
    success: true,
    leaderboard: [
      { name: "Alice", donations: 4200 },
      { name: "John Doe", donations: 3700 },
      { name: "Bob", donations: 2300 },
      { name: "Charlie", donations: 2000 },
      { name: "David", donations: 1500 },
      { name: "Eve", donations: 1000 },
    ],
  });
};
