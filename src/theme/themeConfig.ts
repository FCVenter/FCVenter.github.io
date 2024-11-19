// themeConfig.ts

export const getThemeClasses = (theme: "dark" | "light") => ({
  background: theme === "dark" ? "bg-gray-900" : "bg-gray-100",
  text: theme === "dark" ? "text-white" : "text-gray-900",
  mutedText: theme === "dark" ? "text-gray-400" : "text-gray-500",
  borderPurple: "border-purple-500",
  borderGreen: "border-green-500",
  hover: theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200",
  shadow: "shadow-lg",
  transition: "transition-all duration-300",
  progressColor: theme === "dark" ? "bg-purple-500" : "bg-indigo-600",
  progressBackground: theme === "dark" ? "bg-gray-700" : "bg-gray-300",
});
