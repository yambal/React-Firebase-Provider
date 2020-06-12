+ Redux (Redux Thunk)
+ React Router Dom


## GitHub Pages
build を GitHub Pages に公開する手段として gh-pages を採用した

### 前提
あらかじめ、該当リポジトリに GitHub Pages 公開ブランチとして ```gh-pages``` を作成しておくこと

### 実施内容
↓ ライブラリ追加  
```yarn add gh-pages -d```

package.json に Github Pages への公開を簡素化するスクリプトを記載しておく  
また、GitHub Pages の公開URL の特徴から ```"homepage": "./"```を指定する。これによって、ビルドされた static なコードへのリンク切れが解消される。
``` package.json
  "homepage": "./",
  "scripts": {
    ...
    "preghpages": "yarn build",
    "ghpages": "gh-pages -d build"
    ...
  },
```

↓ 以下のコマンドで Github Pages への公開が行われる  
```yarn run ghpages```

ただ、厄介なのは React-ruiter-dom で、こればかりは GitHub Pages の公開URL を自動的に考慮する方法が思いつかなかった。  
なので .env に記載し、configModule で store に流し、basename に設定している。  
これにはいくつもの他の解消方法が考えられる（context を使うなど）

### WPA として
↓ ```src/manifest.js``` に以下を追記している
``` src/manifest.js
  "display": "standalone",
  "start_url": "./",
  "screenshots": [],
  "orientation": "portrait",
  "lang":"ja"
}
```

