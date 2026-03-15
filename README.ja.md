# md2json

MarkdownファイルをJSON形式に変換するツールです。

## デモ

[words.md](words.md)ファイルからJSONを生成します:

```js
deno --allow-read --allow-write https://code4fukui.github.io/md2json.js words.md
```
→ [words.md.json](words.md.json)

## 機能

- Markdownファイルを入力として受け取り、JSONに変換する
- タイトル、サブタイトル、本文などの構造を保持したJSONを出力する

## 必要環境

- Deno環境

## 使い方

Denoでmd2json.jsを実行します:

```
deno --allow-read --allow-write https://code4fukui.github.io/md2json.js [markdown-file.md]
```

変換結果のJSONファイルが出力されます。

## ライセンス

MIT License