let s = [
   "];\n",
  "printf(\"let s = [\\n\");\n",
  "for (let i = 0; i < s.length; i++) {\n",
  "  printf(\"  %j,\\n\", s[i]);\n",
  "}\n",
  "printf(\"%s\", s.join(\"\"));\n",
  "function printf(format, str) {\n",
  "  let util = require(\"util\");\n",
  "  process.stdout.write(util.format(format, str || \"\"));\n",
  "}\n",
];
printf("let s = [\n");
for (let i = 0; i < s.length; i++) {
  printf("  %j,\n", s[i]);
}
printf("%s", s.join(""));
function printf(format, str) {
  let util = require("util");
  process.stdout.write(util.format(format, str || ""));
}

