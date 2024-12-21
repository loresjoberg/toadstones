import react from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config({
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
        react.configs["recommended-type-checked"],
    ],
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            projectService: true,
        },
    },
    rules: {
        // Put rules you want to override here
    },
});
