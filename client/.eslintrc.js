module.exports = {
  extends: ["airbnb-typescript-prettier", "react-app"],
  rules: {
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
      },
    ],
    eqeqeq: ["error", "smart"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: true,
      },
    ],
    "react/require-default-props": [
      "warn",
      { forbidDefaultForRequired: false, ignoreFunctionalComponents: true },
    ],

    "@typescript-eslint/no-empty-interface": [
      "off",
      {
        allowSingleExtends: false,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["off"],
    "react/no-array-index-key": "warn",
    "no-var": "warn",
    "no-param-reassign": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-underscore-dangle": "off",
    "react-hooks/exhaustive-deps": "error",
  },
};
