# GAS template for Clasp

for `Vue.js`

## use env for deploy

if your environment is `Windows`, import npm package `cross-env` and set `deploy` script in `package.json` like:
```bash
dotenv cross-env \"clasp deploy -i $GAS_DEPLOYMENT_ID\"
```