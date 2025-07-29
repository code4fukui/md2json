export const md2json = (md) => {
  const ss = md.split("\n");
  let idx = 0;
  const getLine = () => {
    const s = ss[idx++];
    if (!s) return s;
    return s.trim();
  };
  const backLine = () => {
    idx--;
  };
  const parse = (level) => {
    const s = getLine();
    if (!s.startsWith(level + " ")) throw new Error("can't parse " + level);
    const title = s.substring(level.length + 1);
    const data = {};
    for (;;) {
      const s = getLine();
      if (s == null) {
        break;
      } else if (s.length == 0) {
        continue;
      } else if (s.startsWith(level + " ")) { // same level
        backLine();
        break;
      } else if (s.startsWith(level + "#" + " ")) { // low level
        backLine();
        const res = parse(level + "#");
        data[res.title] = res.data;
      } else if (s.charAt(0) == "#") { // high level
        backLine();
        break;
      } else if (s.startsWith("- ") && s.indexOf(":") >= 0) {
        const n = s.indexOf(":");
        const tag = s.substring(2, n);
        const val = s.substring(n + 1).trim();
        data[tag] = val;
      } else {
        if (data["text"]) {
          data["text"] += "\n" + s;
        } else {
          data["text"] = s;
        }
      }
    }
    return { title, data };
  };
  const { title, data } = parse("#");
  const res = {};
  res[title] = data;
  return res;
};

if (import.meta.main) {
  if (Deno.args.length == 0) {
    console.log("md2json [markdownfile.md]");
  }
  const fn = Deno.args[0];
  const txt = await Deno.readTextFile(fn);
  const res = md2json(txt);
  await Deno.writeTextFile(fn + ".json", JSON.stringify(res, null, 2));
  /*
  console.log(res);
  const title = Object.keys(res)[0];
  const list = res[title];
  console.log(Object.keys(list));
  console.log(Object.keys(Object.values(res)[0])); // same
  */
}
