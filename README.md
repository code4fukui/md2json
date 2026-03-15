# md2json

Convert Markdown to JSON.

## Usage

From a Markdown file:

```js
deno --allow-read --allow-write https://code4fukui.github.io/md2json.js words.md
```

This will generate a JSON file with the same name as the Markdown file.

## Sample

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

## License

MIT License