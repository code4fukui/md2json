import * as t from "https://deno.land/std/testing/asserts.ts";
import { md2json } from "./md2json.js";

Deno.test("simple", () => {
  const md = `# title

this is demo of markdown

## subtitle

body

## subtitle2

body2`;
  t.assertEquals(md2json(md), {
    title: {
      text: "this is demo of markdown",
      subtitle: {
        text: "body",
      },
      subtitle2: {
        text: "body2",
      },
    },
  }
  );
});
