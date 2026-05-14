# md2json

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Deno script to convert Markdown files into a nested JSON structure. It preserves heading hierarchy as nested objects and extracts key-value metadata from list items.

## Features

- Converts Markdown headings (`#`, `##`, etc.) into nested JSON keys.
- Aggregates body text under a `text` property.
- Parses unordered list items with colons (e.g., `- key: value`) as key-value pairs.
- A simple, single-file Deno script with zero dependencies.

## Requirements

- [Deno](https://deno.land) runtime

## Usage

To convert a Markdown file, run the script with Deno. For example, to convert the provided `words.md` file:

```bash
deno run --allow-read --allow-write https://code4fukui.github.io/md2json.js words.md
```

This command reads `words.md` and generates a structured `words.md.json` file in the same directory.

## Conversion Rules

The script follows a few simple rules to map Markdown elements to a JSON structure.

### 1. Headings and Text

Headings (`#`, `##`, `###`, etc.) become keys in the JSON object. The heading level determines the nesting depth. Any text following a heading is aggregated into a `text` property.

**Input (`example.md`)**
```markdown
# Title

This is the main body text.

## Subtitle 1

Body text for the first subtitle.

## Subtitle 2

Body text for the second subtitle.
```

**Output (`example.md.json`)**
```json
{
  "Title": {
    "text": "This is the main body text.",
    "Subtitle 1": {
      "text": "Body text for the first subtitle."
    },
    "Subtitle 2": {
      "text": "Body text for the second subtitle."
    }
  }
}
```

### 2. Metadata and Nested Headings

Unordered list items containing a colon (`- key: value`) are parsed as key-value pairs. This is useful for adding metadata. Deeper heading levels create more deeply nested objects.

**Input (from `words.md`)**
```markdown
## インクルーシブ教育システム

人間の多様性の尊重等を強化し、障害者が精神的及び身体的な能力等を可能な最大限度まで発達させ、自由な社会に効果的に参加することを可能とするとの目的の下、障害のある者と障害のない者が共に学ぶ仕組み

- 出典: [次期学習指導要領等に向けたこれまでの審議のまとめ](courseofstudy2020.md)

### 要件

- 障害のある者が一般的な教育制度から排除されないこと
- 自己の生活する地域において初等中等教育の機会が与えられること
- 個人に必要な「合理的配慮」が提供されること等
```

**Output (from `words.md.json`)**
```json
{
  "インクルーシブ教育システム": {
    "text": "人間の多様性の尊重等を強化し、障害者が精神的及び身体的な能力等を可能な最大限度まで発達させ、自由な社会に効果的に参加することを可能とするとの目的の下、障害のある者と障害のない者が共に学ぶ仕組み",
    "出典": "[次期学習指導要領等に向けたこれまでの審議のまとめ](courseofstudy2020.md)",
    "要件": {
      "text": "- 障害のある者が一般的な教育制度から排除されないこと\n- 自己の生活する地域において初等中等教育の機会が与えられること\n- 個人に必要な「合理的配慮」が提供されること等"
    }
  }
}
```

## License

MIT License — see [LICENSE](LICENSE).