import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Remove the extends and disable all rules
  // ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Disable all rules by setting them to 'off'
      "no-unused-vars": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // Add more rules to disable if needed
      // You can disable all ESLint rules by explicitly setting them to "off"
    },
  },
];

export default eslintConfig;
