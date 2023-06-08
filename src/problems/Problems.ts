export type Problem = {
  id: string;
  title: string;
  level: string;
  category: string;
  order: number;
  solution: string;
};

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    level: "🟢",
    category: "Array",
    order: 1,
    solution: "",
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    level: "🟡",
    category: "Linked List",
    order: 2,
    solution: "",
  },
  {
    id: "jump-game",
    title: "Jump Game",
    level: "🟡",
    category: "Dynamic Programming",
    order: 3,
    solution: "",
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    level: "🟢",
    category: "Stack",
    order: 4,
    solution: "",
  },
  {
    id: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    level: "🔴",
    category: "Binary Search",
    order: 5,
    solution: "",
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    level: "🟡",
    category: "Two Pointers",
    order: 6,
    solution: "",
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    level: "🔴",
    category: "intervals",
    order: 7,
    solution: "",
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    level: "🟢",
    category: "Tree",
    order: 8,
    solution: "",
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    level: "🟢",
    category: "Array",
    order: 9,
    solution: "",
  },

  {
    id: "subsets",
    title: "Subsets",
    level: "🟡",
    category: "Backtracking",
    order: 10,
    solution: "",
  },
];
