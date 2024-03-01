import { existsSync } from "node:fs"

/** @ts-expect-error: untyped */
import { default as nextPlugin } from "@next/eslint-plugin-next"
import { default as stylisticPlugin } from "@stylistic/eslint-plugin"
import * as tanstackQueryPlugin from "@tanstack/eslint-plugin-query"
import { default as typescriptPlugin } from "@typescript-eslint/eslint-plugin"
import { default as typescriptParser } from "@typescript-eslint/parser"
/** @ts-expect-error: untyped */
import { default as fpPlugin } from "eslint-plugin-fp"
/** @ts-expect-error: untyped */
import { default as importPlugin } from "eslint-plugin-import"
import { default as jsdocPlugin } from "eslint-plugin-jsdoc"
/** @ts-expect-error: untyped */
import { default as jsxA11yPlugin } from "eslint-plugin-jsx-a11y"
/** @ts-expect-error: untyped */
import { default as nodePlugin } from "eslint-plugin-node"
/** @ts-expect-error: untyped */
import { default as promisePlugin } from "eslint-plugin-promise"
/** @ts-expect-error: untyped */
import { default as reactPlugin } from "eslint-plugin-react"
/** @ts-expect-error: untyped */
import { default as reactHooksPlugin } from "eslint-plugin-react-hooks"
/** @ts-expect-error: untyped */
import { default as reactNativePlugin } from "eslint-plugin-react-native"
/** @ts-expect-error: untyped */
import { default as reactRefreshPlugin } from "eslint-plugin-react-refresh"
/** @ts-expect-error: untyped */
import { default as sortDestructureKeysPlugin } from "eslint-plugin-sort-destructure-keys"
/** @ts-expect-error: untyped */
import { default as sortKeysPlugin } from "eslint-plugin-sort-keys"
/** @ts-expect-error: untyped */
import { default as storybookPlugin } from "eslint-plugin-storybook"
/** @ts-expect-error: untyped */
import { default as typescriptSortKeysPlugin } from "eslint-plugin-typescript-sort-keys"
/** @ts-expect-error: untyped */
import { default as unicornPlugin } from "eslint-plugin-unicorn"
import { default as globals } from "globals"

const __dirname = new URL("../..", import.meta.url).pathname

const ignores = [
  "**/.expo/**",
  "**/android/**",
  "**/expo-env.d.ts",
  "**/ios/**",
  "**/node_modules/**"
]

/** @type {import("eslint").Linter.FlatConfig[]} */
const flatConfig = [
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.node },
      /* prettier-ignore */
      parser:
        /** @type {import("eslint").Linter.ParserModule} */
        (typescriptParser),
      parserOptions: {
        linterOptions: {
          reportUnusedDisableDirectives: "warn"
        },
        project: [
          "tsconfig.json",
          "app/tsconfig.json",
          "doc/tsconfig.json",
          "lib/tsconfig.json",
          "sql/tsconfig.json",
          "web/tsconfig.json"
        ]
          .map(
            (path) =>
              existsSync(`${__dirname}/${path}`) &&
              `${__dirname}/${path}`
          )
          .filter(Boolean)
          .concat(`${__dirname}/pkg/*/tsconfig.json`),
        tsconfigRootDir: __dirname
      }
    }
  },
  {
    files: ["**/*.cjs"],
    ignores,
    languageOptions: {
      parserOptions: {
        sourceType: "script"
      }
    }
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores,
    languageOptions: {
      parserOptions: {
        sourceType: "module"
      }
    }
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ignores,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    rules: {
      "for-direction": "error",
      "no-async-promise-executor": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-else-if": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-fallthrough": "error",
      "no-global-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-misleading-character-class": "error",
      "no-new-native-nonconstructor": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal": "error",
      "no-prototype-builtins": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-unexpected-multiline": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-useless-backreference": "error",
      "no-useless-catch": "error",
      "no-useless-escape": "error",
      "no-with": "error",
      "require-yield": "error",
      "use-isnan": "error",
      "valid-typeof": "error"
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    ignores,
    plugins: {
      /* prettier-ignore */
      "@typescript-eslint": /** @type {?} */ (typescriptPlugin)
    },
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/ban-tslint-comment": "error",
      "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-implied-eval": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-loss-of-precision": "error",
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing":
        "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain":
        "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-throw-literal": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare":
        "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-useless-template-literals": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/non-nullable-type-assertion-style": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/unbound-method": "error",
      "@typescript-eslint/unified-signatures": "error",
      "dot-notation": "off",
      "no-array-constructor": "off",
      "no-empty-function": "off",
      "no-implied-eval": "off",
      "no-new-symbol": "off",
      "no-throw-literal": "off",
      "no-useless-constructor": "off",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-promise-reject-errors": "off",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "require-await": "off"
    }
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      /* prettier-ignore */
      "@tanstack/query": /** @type {?} */ (tanstackQueryPlugin)
    },
    rules: {
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/no-rest-destructuring": "warn",
      "@tanstack/query/stable-query-client": "error"
    }
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      fp: fpPlugin
    },
    rules: {
      "fp/no-arguments": "off",
      "fp/no-class": "off",
      "fp/no-delete": "off",
      "fp/no-events": "off",
      "fp/no-get-set": "off",
      "fp/no-let": "off",
      "fp/no-loops": "off",
      "fp/no-mutating-assign": "off",
      "fp/no-mutating-methods": "off",
      "fp/no-mutation": "off",
      "fp/no-nil": "off",
      "fp/no-proxy": "off",
      "fp/no-rest-parameters": "off",
      "fp/no-this": "off",
      "fp/no-throw": "off",
      "fp/no-unused-expression": "off",
      "fp/no-valueof-field": "off"
    }
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      import: importPlugin
    },
    rules: {
      "import/consistent-type-specifier-style": [
        "warn",
        "prefer-top-level"
      ],
      "import/default": "error",
      "import/dynamic-import-chunkname": "off",
      "import/export": "error",
      "import/exports-last": "warn",
      "import/extensions": [
        "warn",
        "never",
        { css: "always", json: "always" }
      ],
      "import/first": "warn",
      "import/group-exports": "off",
      "import/max-dependencies": [
        "warn",
        { ignoreTypeImports: true, max: 25 }
      ],
      "import/named": "error",
      "import/namespace": "off",
      "import/newline-after-import": "off",
      "import/no-absolute-path": "error",
      "import/no-amd": "off",
      "import/no-anonymous-default-export": "off",
      "import/no-commonjs": "off",
      "import/no-cycle": "warn",
      "import/no-default-export": "warn",
      "import/no-deprecated": "off",
      "import/no-duplicates": "error",
      "import/no-dynamic-require": "off",
      "import/no-empty-named-blocks": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          bundledDependencies: false,
          devDependencies: [
            "**/*.config.cjs",
            "**/*.config.js",
            "**/*.config.ts",
            "**/*.stories.tsx",
            "**/*.test.js",
            "**/*.test.jsx",
            "**/*.test.ts",
            "**/*.test.tsx"
          ],
          optionalDependencies: false,
          peerDependencies: false
        }
      ],
      "import/no-import-module-exports": "error",
      "import/no-internal-modules": "off",
      "import/no-mutable-exports": "off",
      "import/no-named-as-default": "error",
      "import/no-named-as-default-member": "warn",
      "import/no-named-default": "off",
      "import/no-named-export": "off",
      "import/no-namespace": "off",
      "import/no-nodejs-modules": "off",
      "import/no-relative-packages": "off",
      "import/no-relative-parent-imports": "off",
      "import/no-restricted-paths": "off",
      "import/no-self-import": "error",
      "import/no-unassigned-import": "off",
      "import/no-unresolved": "off",
      "import/no-unused-modules": ["off", { missingExports: true }],
      "import/no-useless-path-segments": "warn",
      "import/no-webpack-loader-syntax": "error",
      "import/order": [
        "error",
        {
          "alphabetize": { caseInsensitive: true, order: "asc" },
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "unknown"
          ],
          "newlines-between": "always",
          "pathGroups": [
            {
              group: "external",
              pattern: "@/**",
              position: "after"
            }
          ],
          "pathGroupsExcludedImportTypes": ["react"]
        }
      ],
      "import/prefer-default-export": "off",
      "import/unambiguous": "warn"
    }
  },
  {
    files: [
      "{app,web}/src/{app,pages}/**/*.{ts,tsx}",
      "**/*.config.{js,ts}",
      "**/*.stories.tsx",
      "**/.storybook/*.ts"
    ],
    ignores,
    rules: {
      "import/no-default-export": "off"
    }
  },
  {
    files: ["app/src/**/*.{ts,tsx}"],
    ignores,
    rules: {
      "import/no-nodejs-modules": "error"
    }
  },
  {
    files: ["**/*.cjs"],
    ignores,
    rules: {
      "import/no-unused-modules": "off"
    }
  },
  {
    files: ["**/*.{js,jsx}"],
    ignores,
    plugins: {
      jsdoc: jsdocPlugin
    },
    rules: {
      "jsdoc/check-access": "off",
      "jsdoc/check-alignment": "off",
      "jsdoc/check-examples": "off",
      "jsdoc/check-indentation": [
        "warn",
        { excludeTags: ["example", "returns"] }
      ],
      "jsdoc/check-line-alignment": [
        "warn",
        "never",
        {
          customSpacings: {
            postDelimiter: 1,
            postTag: 1,
            postType: 1
          },
          wrapIndent: "  "
        }
      ],
      "jsdoc/check-param-names": ["warn", { enableFixer: true }],
      "jsdoc/check-property-names": ["warn", { enableFixer: true }],
      "jsdoc/check-syntax": "warn",
      "jsdoc/check-tag-names": [
        "warn",
        {
          definedTags: ["ts-expect-error:"],
          jsxTags: true
        }
      ],
      "jsdoc/check-types": "warn",
      "jsdoc/check-values": "warn",
      "jsdoc/empty-tags": "warn",
      "jsdoc/implements-on-classes": "warn",
      "jsdoc/imports-as-dependencies": "off",
      "jsdoc/informative-docs": "warn",
      "jsdoc/match-description": "warn",
      "jsdoc/match-name": "off",
      "jsdoc/multiline-blocks": "warn",
      "jsdoc/no-bad-blocks": "warn",
      "jsdoc/no-blank-block-descriptions": "warn",
      "jsdoc/no-blank-blocks": ["warn", { enableFixer: true }],
      "jsdoc/no-defaults": "warn",
      "jsdoc/no-missing-syntax": "off",
      "jsdoc/no-multi-asterisks": "warn",
      "jsdoc/no-restricted-syntax": "off",
      "jsdoc/no-types": "off",
      "jsdoc/no-undefined-types": "warn",
      "jsdoc/require-asterisk-prefix": ["warn", "never"],
      "jsdoc/require-description": "off",
      "jsdoc/require-description-complete-sentence": "off",
      "jsdoc/require-example": "off",
      "jsdoc/require-file-overview": "off",
      "jsdoc/require-hyphen-before-param-description": [
        "warn",
        "always",
        { tags: { returns: "never" } }
      ],
      "jsdoc/require-jsdoc": ["warn", { enableFixer: false }],
      "jsdoc/require-param": "warn",
      "jsdoc/require-param-description": "off",
      "jsdoc/require-param-name": "warn",
      "jsdoc/require-param-type": "warn",
      "jsdoc/require-property": "warn",
      "jsdoc/require-property-description": "off",
      "jsdoc/require-property-name": "warn",
      "jsdoc/require-property-type": "warn",
      "jsdoc/require-returns": [
        "warn",
        {
          forceRequireReturn: true
        }
      ],
      "jsdoc/require-returns-check": "warn",
      "jsdoc/require-returns-description": "off",
      "jsdoc/require-returns-type": "warn",
      "jsdoc/require-throws": "warn",
      "jsdoc/require-yields": [
        "warn",
        {
          forceRequireNext: true,
          forceRequireYields: true
        }
      ],
      "jsdoc/require-yields-check": "warn",
      "jsdoc/sort-tags": "warn",
      "jsdoc/tag-lines": [
        "warn",
        "always",
        { applyToEndTag: false, startLines: 1 }
      ],
      "jsdoc/text-escaping": "off",
      "jsdoc/valid-types": "warn"
    },
    settings: {
      jsdoc: {
        mode: "typescript"
      }
    }
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ignores,
    plugins: {
      "jsx-a11y": jsxA11yPlugin
    },
    rules: {
      "jsx-a11y/accessible-emoji": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/anchor-ambiguous-text": "off",
      "jsx-a11y/anchor-has-content": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/aria-activedescendant-has-tabindex": "off",
      "jsx-a11y/aria-props": "off",
      "jsx-a11y/aria-proptypes": "off",
      "jsx-a11y/aria-role": "off",
      "jsx-a11y/aria-unsupported-elements": "off",
      "jsx-a11y/autocomplete-valid": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/control-has-associated-label": "off",
      "jsx-a11y/heading-has-content": "off",
      "jsx-a11y/html-has-lang": "off",
      "jsx-a11y/iframe-has-title": "off",
      "jsx-a11y/img-redundant-alt": "off",
      "jsx-a11y/interactive-supports-focus": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/label-has-for": "off",
      "jsx-a11y/lang": "off",
      "jsx-a11y/media-has-caption": "off",
      "jsx-a11y/mouse-events-have-key-events": "off",
      "jsx-a11y/no-access-key": "off",
      "jsx-a11y/no-aria-hidden-on-focusable": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/no-distracting-elements": "off",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
      "jsx-a11y/no-noninteractive-tabindex": "off",
      "jsx-a11y/no-onchange": "off",
      "jsx-a11y/no-redundant-roles": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/prefer-tag-over-role": "off",
      "jsx-a11y/role-has-required-aria-props": "off",
      "jsx-a11y/role-supports-aria-props": "off",
      "jsx-a11y/scope": "off",
      "jsx-a11y/tabindex-no-positive": "off"
    }
  },
  {
    files: ["web/src/**/*.{jsx,tsx}"],
    ignores,
    plugins: {
      "@next/next": nextPlugin
    },
    rules: nextPlugin.configs["core-web-vitals"].rules,
    settings: {
      next: {
        rootDir: `${__dirname}/web`
      }
    }
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      node: nodePlugin
    },
    rules: {
      "node/callback-return": "off",
      "node/exports-style": "off",
      "node/file-extension-in-import": "off",
      "node/global-require": "off",
      "node/handle-callback-err": "off",
      "node/no-callback-literal": "off",
      "node/no-deprecated-api": "off",
      "node/no-exports-assign": "off",
      "node/no-extraneous-import": "off",
      "node/no-extraneous-require": "off",
      "node/no-missing-import": "off",
      "node/no-missing-require": "off",
      "node/no-mixed-requires": "off",
      "node/no-new-require": "off",
      "node/no-path-concat": "off",
      "node/no-process-env": "off",
      "node/no-process-exit": "off",
      "node/no-restricted-import": "off",
      "node/no-restricted-require": "off",
      "node/no-sync": "off",
      "node/no-unpublished-bin": "off",
      "node/no-unpublished-import": "off",
      "node/no-unpublished-require": "off",
      "node/no-unsupported-features/es-builtins": "off",
      "node/no-unsupported-features/es-syntax": "off",
      "node/no-unsupported-features/node-builtins": "off",
      "node/prefer-global/buffer": "off",
      "node/prefer-global/console": "off",
      "node/prefer-global/process": "off",
      "node/prefer-global/text-decoder": "off",
      "node/prefer-global/text-encoder": "off",
      "node/prefer-global/url": "off",
      "node/prefer-global/url-search-params": "off",
      "node/prefer-promises/dns": "off",
      "node/prefer-promises/fs": "off",
      "node/process-exit-as-throw": "off",
      "node/shebang": "off"
    }
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      promise: promisePlugin
    },
    rules: {
      "promise/always-return": "error",
      "promise/avoid-new": "warn",
      "promise/catch-or-return": "error",
      "promise/no-callback-in-promise": "warn",
      "promise/no-multiple-resolved": "off",
      "promise/no-native": "off",
      "promise/no-nesting": "warn",
      "promise/no-new-statics": "error",
      "promise/no-promise-in-callback": "warn",
      "promise/no-return-in-finally": "warn",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/prefer-await-to-callbacks": "off",
      "promise/prefer-await-to-then": "off",
      "promise/valid-params": "warn"
    }
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ignores,
    plugins: {
      react: reactPlugin
    },
    rules: {
      "react/boolean-prop-naming": "off",
      "react/button-has-type": "off",
      "react/default-props-match-prop-types": "off",
      "react/destructuring-assignment": "off",
      "react/display-name": "off",
      "react/forbid-component-props": "off",
      "react/forbid-dom-props": "off",
      "react/forbid-elements": "off",
      "react/forbid-foreign-prop-types": "off",
      "react/forbid-prop-types": "off",
      "react/function-component-definition": "off",
      "react/hook-use-state": "off",
      "react/iframe-missing-sandbox": "off",
      "react/jsx-boolean-value": "off",
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-brace-presence": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-fragments": "off",
      "react/jsx-handler-names": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-key": "off",
      "react/jsx-max-depth": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-no-bind": "off",
      "react/jsx-no-comment-textnodes": "off",
      "react/jsx-no-constructed-context-values": "off",
      "react/jsx-no-duplicate-props": "off",
      "react/jsx-no-leaked-render": "off",
      "react/jsx-no-literals": "off",
      "react/jsx-no-script-url": "off",
      "react/jsx-no-target-blank": "off",
      "react/jsx-no-undef": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-pascal-case": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-sort-default-props": "off",
      "react/jsx-sort-props": "off",
      "react/jsx-space-before-closing": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "off",
      "react/jsx-wrap-multilines": "off",
      "react/no-access-state-in-setstate": "off",
      "react/no-adjacent-inline-elements": "off",
      "react/no-array-index-key": "off",
      "react/no-arrow-function-lifecycle": "off",
      "react/no-children-prop": "off",
      "react/no-danger": "off",
      "react/no-danger-with-children": "off",
      "react/no-deprecated": "off",
      "react/no-did-mount-set-state": "off",
      "react/no-did-update-set-state": "off",
      "react/no-direct-mutation-state": "off",
      "react/no-find-dom-node": "off",
      "react/no-invalid-html-attribute": "off",
      "react/no-is-mounted": "off",
      "react/no-multi-comp": "off",
      "react/no-namespace": "off",
      "react/no-object-type-as-default-prop": "off",
      "react/no-redundant-should-component-update": "off",
      "react/no-render-return-value": "off",
      "react/no-set-state": "off",
      "react/no-string-refs": "off",
      "react/no-this-in-sfc": "off",
      "react/no-typos": "off",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "off",
      "react/no-unsafe": "off",
      "react/no-unstable-nested-components": "off",
      "react/no-unused-class-component-methods": "off",
      "react/no-unused-prop-types": "off",
      "react/no-unused-state": "off",
      "react/no-will-update-set-state": "off",
      "react/prefer-es6-class": "off",
      "react/prefer-exact-props": "off",
      "react/prefer-read-only-props": "off",
      "react/prefer-stateless-function": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/require-optimization": "off",
      "react/require-render-return": "off",
      "react/self-closing-comp": "off",
      "react/sort-comp": "off",
      "react/sort-default-props": "off",
      "react/sort-prop-types": "off",
      "react/state-in-constructor": "off",
      "react/static-property-placement": "off",
      "react/style-prop-object": "off",
      "react/void-dom-elements-no-children": "off"
    }
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      "react-hooks": reactHooksPlugin
    },
    rules: {
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error"
    }
  },
  {
    files: ["app/src/**/*.{jsx,tsx}"],
    ignores,
    plugins: {
      "react-native": reactNativePlugin
    },
    rules: {
      "react-native/no-color-literals": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-raw-text": "warn",
      "react-native/no-single-element-style-arrays": "warn",
      "react-native/no-unused-styles": "warn",
      "react-native/sort-styles": "warn",
      "react-native/split-platform-components": "warn"
    }
  },
  {
    files: ["{lib,web}/src/**/*.{jsx,tsx}"],
    ignores,
    plugins: {
      "react-refresh": reactRefreshPlugin
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  },
  {
    files: ["lib/src/**/*.stories.{jsx,tsx}"],
    ignores,
    plugins: {
      storybook: storybookPlugin
    },
    rules: storybookPlugin.configs.recommended.rules
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      unicorn: unicornPlugin
    },
    rules: {
      "unicorn/better-regex": "warn",
      "unicorn/catch-error-name": "off",
      "unicorn/consistent-destructuring": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/custom-error-definition": "off",
      "unicorn/empty-brace-spaces": "off",
      "unicorn/error-message": "off",
      "unicorn/escape-case": "off",
      "unicorn/expiring-todo-comments": "off",
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": "off",
      "unicorn/import-style": "off",
      "unicorn/new-for-builtins": "off",
      "unicorn/no-abusive-eslint-disable": "off",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-method-this-argument": "off",
      "unicorn/no-array-push-push": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/no-console-spaces": "off",
      "unicorn/no-document-cookie": "off",
      "unicorn/no-empty-file": "off",
      "unicorn/no-for-loop": "off",
      "unicorn/no-hex-escape": "off",
      "unicorn/no-instanceof-array": "off",
      "unicorn/no-invalid-remove-event-listener": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-lonely-if": "off",
      "unicorn/no-negated-condition": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-new-array": "off",
      "unicorn/no-new-buffer": "off",
      "unicorn/no-null": "off",
      "unicorn/no-object-as-default-parameter": "off",
      "unicorn/no-process-exit": "off",
      "unicorn/no-static-only-class": "off",
      "unicorn/no-thenable": "off",
      "unicorn/no-this-assignment": "off",
      "unicorn/no-typeof-undefined": "off",
      "unicorn/no-unnecessary-await": "off",
      "unicorn/no-unnecessary-polyfills": "off",
      "unicorn/no-unreadable-array-destructuring": "off",
      "unicorn/no-unreadable-iife": "off",
      "unicorn/no-unused-properties": "off",
      "unicorn/no-useless-fallback-in-spread": "off",
      "unicorn/no-useless-length-check": "off",
      "unicorn/no-useless-promise-resolve-reject": "off",
      "unicorn/no-useless-spread": "off",
      "unicorn/no-useless-switch-case": "off",
      "unicorn/no-useless-undefined": "off",
      "unicorn/no-zero-fractions": "off",
      "unicorn/number-literal-case": "off",
      "unicorn/numeric-separators-style": "off",
      "unicorn/prefer-add-event-listener": "off",
      "unicorn/prefer-array-find": "off",
      "unicorn/prefer-array-flat": "off",
      "unicorn/prefer-array-flat-map": "off",
      "unicorn/prefer-array-index-of": "off",
      "unicorn/prefer-array-some": "off",
      "unicorn/prefer-at": "off",
      "unicorn/prefer-blob-reading-methods": "off",
      "unicorn/prefer-code-point": "off",
      "unicorn/prefer-date-now": "off",
      "unicorn/prefer-default-parameters": "off",
      "unicorn/prefer-dom-node-append": "off",
      "unicorn/prefer-dom-node-dataset": "off",
      "unicorn/prefer-dom-node-remove": "off",
      "unicorn/prefer-dom-node-text-content": "off",
      "unicorn/prefer-event-target": "off",
      "unicorn/prefer-export-from": "off",
      "unicorn/prefer-includes": "off",
      "unicorn/prefer-json-parse-buffer": "off",
      "unicorn/prefer-keyboard-event-key": "off",
      "unicorn/prefer-logical-operator-over-ternary": "off",
      "unicorn/prefer-math-trunc": "off",
      "unicorn/prefer-modern-dom-apis": "off",
      "unicorn/prefer-modern-math-apis": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-native-coercion-functions": "off",
      "unicorn/prefer-negative-index": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-number-properties": "off",
      "unicorn/prefer-object-from-entries": "off",
      "unicorn/prefer-optional-catch-binding": "off",
      "unicorn/prefer-prototype-methods": "off",
      "unicorn/prefer-query-selector": "off",
      "unicorn/prefer-reflect-apply": "off",
      "unicorn/prefer-regexp-test": "off",
      "unicorn/prefer-set-has": "off",
      "unicorn/prefer-set-size": "off",
      "unicorn/prefer-spread": "off",
      "unicorn/prefer-string-replace-all": "off",
      "unicorn/prefer-string-slice": "off",
      "unicorn/prefer-string-starts-ends-with": "off",
      "unicorn/prefer-string-trim-start-end": "off",
      "unicorn/prefer-switch": "off",
      "unicorn/prefer-ternary": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prefer-type-error": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/relative-url-style": "off",
      "unicorn/require-array-join-separator": "off",
      "unicorn/require-number-to-fixed-digits-argument": "off",
      "unicorn/require-post-message-target-origin": "off",
      "unicorn/string-content": "off",
      "unicorn/switch-case-braces": "off",
      "unicorn/template-indent": "off",
      "unicorn/text-encoding-identifier-case": "off",
      "unicorn/throw-new-error": "off"
    }
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      /* prettier-ignore */
      "@stylistic":
      /** @type {import("eslint").ESLint.Plugin} */ (stylisticPlugin)
    },
    rules: {
      "@stylistic/array-bracket-newline": ["warn", "consistent"],
      "@stylistic/array-bracket-spacing": ["warn", "never"],
      "@stylistic/array-element-newline": ["warn", "consistent"],
      "@stylistic/arrow-parens": ["warn", "always"],
      "@stylistic/arrow-spacing": [
        "warn",
        { after: true, before: true }
      ],
      "@stylistic/block-spacing": ["warn", "always"],
      "@stylistic/brace-style": [
        "warn",
        "1tbs",
        { allowSingleLine: true }
      ],
      "@stylistic/comma-dangle": ["warn", "never"],
      "@stylistic/comma-spacing": [
        "warn",
        { after: true, before: false }
      ],
      "@stylistic/comma-style": ["warn", "last"],
      "@stylistic/computed-property-spacing": ["warn", "never"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": ["warn", "always"],
      "@stylistic/function-call-argument-newline": [
        "warn",
        "consistent"
      ],
      "@stylistic/function-call-spacing": ["warn", "never"],
      "@stylistic/function-paren-newline": ["off", "consistent"],
      "@stylistic/generator-star-spacing": [
        "warn",
        { after: true, before: true }
      ],
      "@stylistic/implicit-arrow-linebreak": "off",
      "@stylistic/indent": ["off", 2, { SwitchCase: 1 }],
      "@stylistic/indent-binary-ops": ["off", 2],
      "@stylistic/jsx-child-element-spacing": "warn",
      "@stylistic/jsx-closing-bracket-location": [
        "warn",
        "line-aligned"
      ],
      "@stylistic/jsx-closing-tag-location": "warn",
      "@stylistic/jsx-curly-brace-presence": [
        "warn",
        {
          children: "never",
          propElementValues: "always",
          props: "never"
        }
      ],
      "@stylistic/jsx-curly-newline": ["warn", "consistent"],
      "@stylistic/jsx-curly-spacing": ["warn", "never"],
      "@stylistic/jsx-equals-spacing": ["warn", "never"],
      "@stylistic/jsx-first-prop-new-line": [
        "warn",
        "multiline-multiprop"
      ],
      "@stylistic/jsx-indent": [
        "warn",
        2,
        { indentLogicalExpressions: true }
      ],
      "@stylistic/jsx-indent-props": ["warn", 2],
      "@stylistic/jsx-max-props-per-line": [
        "warn",
        { when: "multiline" }
      ],
      "@stylistic/jsx-newline": [
        "off",
        { allowMultilines: true, prevent: true }
      ],
      "@stylistic/jsx-one-expression-per-line": [
        "off",
        { allow: "single-child" }
      ],
      "@stylistic/jsx-props-no-multi-spaces": "warn",
      "@stylistic/jsx-quotes": ["warn", "prefer-double"],
      "@stylistic/jsx-self-closing-comp": [
        "warn",
        { component: true, html: true }
      ],
      "@stylistic/jsx-sort-props": [
        "warn",
        {
          callbacksLast: false,
          ignoreCase: true,
          locale: "auto",
          multiline: "ignore",
          noSortAlphabetically: false,
          reservedFirst: false,
          shorthandFirst: false,
          shorthandLast: false
        }
      ],
      "@stylistic/jsx-tag-spacing": [
        "warn",
        {
          afterOpening: "never",
          beforeClosing: "allow",
          beforeSelfClosing: "always",
          closingSlash: "never"
        }
      ],
      "@stylistic/jsx-wrap-multilines": [
        "warn",
        {
          arrow: "parens-new-line",
          assignment: "parens-new-line",
          condition: "parens-new-line",
          declaration: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
          return: "parens-new-line"
        }
      ],
      "@stylistic/key-spacing": [
        "warn",
        { afterColon: true, beforeColon: false, mode: "strict" }
      ],
      "@stylistic/keyword-spacing": [
        "warn",
        { after: true, before: true }
      ],
      "@stylistic/linebreak-style": ["warn", "unix"],
      "@stylistic/lines-around-comment": [
        "warn",
        {
          afterBlockComment: false,
          afterLineComment: false,
          allowArrayEnd: true,
          allowArrayStart: true,
          allowBlockEnd: true,
          allowBlockStart: true,
          allowObjectEnd: true,
          allowObjectStart: true,
          beforeBlockComment: false,
          beforeLineComment: false,
          ignorePattern: "^ ?[*|:]:? "
        }
      ],
      "@stylistic/lines-between-class-members": ["warn", "always"],
      "@stylistic/max-len": [
        "warn",
        { code: 100, ignoreStrings: true, ignoreUrls: true }
      ],
      "@stylistic/max-statements-per-line": ["warn", { max: 1 }],
      "@stylistic/member-delimiter-style": [
        "off",
        {
          multiline: { delimiter: "comma", requireLast: false },
          multilineDetection: "brackets",
          singleline: { delimiter: "comma", requireLast: false }
        }
      ],
      "@stylistic/multiline-ternary": ["off", "always-multiline"],
      "@stylistic/new-parens": ["warn", "always"],
      "@stylistic/newline-per-chained-call": [
        "warn",
        { ignoreChainWithDepth: 2 }
      ],
      "@stylistic/no-confusing-arrow": ["off", { allowParens: true }],
      "@stylistic/no-extra-parens": [
        "off",
        "all",
        {
          allowParensAfterCommentPattern: "@type",
          conditionalAssign: false,
          enforceForArrowConditionals: false,
          enforceForFunctionPrototypeMethods: false,
          enforceForNewInMemberExpressions: false,
          enforceForSequenceExpressions: false,
          ignoreJSX: "all",
          nestedBinaryExpressions: false,
          returnAssign: false,
          ternaryOperandBinaryExpressions: false
        }
      ],
      "@stylistic/no-extra-semi": "warn",
      "@stylistic/no-floating-decimal": "warn",
      "@stylistic/no-mixed-operators": "warn",
      "@stylistic/no-mixed-spaces-and-tabs": "warn",
      "@stylistic/no-multi-spaces": "warn",
      "@stylistic/no-multiple-empty-lines": ["warn", { max: 1 }],
      "@stylistic/no-tabs": "warn",
      "@stylistic/no-trailing-spaces": [
        "warn",
        { ignoreComments: true }
      ],
      "@stylistic/no-whitespace-before-property": "warn",
      "@stylistic/nonblock-statement-body-position": "warn",
      "@stylistic/object-curly-newline": [
        "warn",
        { consistent: true }
      ],
      "@stylistic/object-curly-spacing": [
        "warn",
        "always",
        { arraysInObjects: true, objectsInObjects: true }
      ],
      "@stylistic/object-property-newline": "off",
      "@stylistic/one-var-declaration-per-line": "off",
      "@stylistic/operator-linebreak": [
        "warn",
        "after",
        { overrides: { ":": "before", "=": "ignore", "?": "before" } }
      ],
      "@stylistic/padded-blocks": ["warn", "never"],
      "@stylistic/padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          next: "*",
          prev: ["const", "let", "var"]
        },
        {
          blankLine: "any",
          next: ["const", "let", "var"],
          prev: ["const", "let", "var"]
        }
      ],
      "@stylistic/quote-props": ["warn", "consistent-as-needed"],
      "@stylistic/quotes": [
        "warn",
        "double",
        { allowTemplateLiterals: true, avoidEscape: true }
      ],
      "@stylistic/rest-spread-spacing": "warn",
      "@stylistic/semi": ["warn", "never"],
      "@stylistic/semi-spacing": [
        "warn",
        { after: true, before: false }
      ],
      "@stylistic/semi-style": ["warn", "last"],
      "@stylistic/space-before-blocks": ["warn", "always"],
      "@stylistic/space-before-function-paren": [
        "warn",
        {
          anonymous: "always",
          asyncArrow: "always",
          named: "never"
        }
      ],
      "@stylistic/space-in-parens": ["warn", "never"],
      "@stylistic/space-infix-ops": "warn",
      "@stylistic/space-unary-ops": [
        "warn",
        { nonwords: false, words: true }
      ],
      "@stylistic/spaced-comment": [
        "warn",
        "always",
        { markers: ["!"] }
      ],
      "@stylistic/switch-colon-spacing": [
        "warn",
        { after: true, before: false }
      ],
      "@stylistic/template-curly-spacing": ["warn", "never"],
      "@stylistic/template-tag-spacing": ["warn", "never"],
      "@stylistic/type-annotation-spacing": "warn",
      "@stylistic/type-generic-spacing": "warn",
      "@stylistic/type-named-tuple-spacing": "warn",
      "@stylistic/wrap-iife": [
        "warn",
        "inside",
        { functionPrototypeMethods: true }
      ],
      "@stylistic/wrap-regex": "off",
      "@stylistic/yield-star-spacing": ["warn", "both"]
    }
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    ignores,
    plugins: {
      "sort-destructure-keys": sortDestructureKeysPlugin,
      "sort-keys": sortKeysPlugin,
      "typescript-sort-keys": typescriptSortKeysPlugin
    },
    rules: {
      "sort-destructure-keys/sort-destructure-keys": ["warn"],
      "sort-imports": [
        "warn",
        {
          allowSeparatedGroups: false,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false
        }
      ],
      "sort-keys": ["off"],
      "sort-keys/sort-keys-fix": [
        "warn",
        "asc",
        {
          caseSensitive: false,
          minKeys: 2,
          natural: true
        }
      ],
      "sort-vars": ["warn"],
      "typescript-sort-keys/interface": ["warn"],
      "typescript-sort-keys/string-enum": ["warn"]
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    ignores,
    rules: {
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off"
    }
  }
]

export default flatConfig
