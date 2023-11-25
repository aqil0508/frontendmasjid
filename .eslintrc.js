module.exports = {
    "env": {
        "browser": true,
        "es2021": true,

    
    },
    "extends": [
        "eslint:recommended",
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        
    ],
    "prettier/prettier": ["error", {
        "endOfLine":"auto"
        
      }],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
        "import/no-extraneous-dependencies": {"root":true, "indent":["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}]},
        "no-console": "0",
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto",
              "singleQuote": true,
              "parser": "flow"
            }
          ],
        "react/jsx-uses-react": "0",   
        "react/jsx-uses-vars": "0",
        "no-unused-vars": [
            "0",
            {
                "varsIgnorePattern": "React"
            }
        ]
    }
}
