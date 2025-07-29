# md2json

convert to Markdown to JSON

## usage

from [words.md](words.md)
```js
deno --allow-read --allow-write https://code4fukui.github.io/md2json.js words.md
```
→ [words.md.json](words.md.json)

## sample

```
# title

this is demo of markdown

## subtitle

body

## subtitle2

body2
```
↓
```json
{
  "title": {
    "text": "this is demo of markdown",
    "subtitle": {
      "text": "body"
    },
    "subtitle2": {
      "text": "body2"
    }
  }
}
```
