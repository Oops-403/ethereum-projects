## Add a project
- a sub git repo project

```sh
git submodule add https://github.com/FairCrypto/XEN-crypto.git
```
- a local project

```sh
npm init
```

- use metamask deploy
update truffle-config.js
```js
    dashboard:{
      url:"http://127.0.0.1:24012/rpc",
      buildName:"local"
    },
```