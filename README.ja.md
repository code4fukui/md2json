# md2json

Markdownファイルを JSON 形式に変換するツールです。

## デモ

[words.md](words.md) ファイルから JSON を生成します:

```js
deno --allow-read --allow-write https://code4fukui.github.io/md2json.js words.md
```
→ [words.md.json](words.md.json)

## 機能

- Markdown ファイルを入力として受け取り、JSON に変換する
- タイトル、サブタイトル、本文などの構造を保持した JSON を出力する

## 必要環境

- Deno 環境

## 使い方

Deno で md2json.js を実行します:

```
deno --allow-read --allow-write https://code4fukui.github.io/md2json.js [markdown-file.md]
```

変換結果の JSON ファイルが出力されます。

## ライセンス

MIT License