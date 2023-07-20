export const CODE_BLOCKS = [
  {
    lang: "javascript",
    text: `// ██ <- powerline symbols
import { useState } from 'react';
const a = x != y + 0.142;
// XXX this is tricky 
if( u !== undefined ){
    return 'is undef';
}
`,
  },
  {
    lang: "c++",
    text: `#include <string>
// XXX this is tricky 
if( c != nullptr && c->head == "a" ){
  return std::string();
}
`,
  },
  {
    lang: "asciidoc",
    text: `= This is header 1
:attr: value

_Some_ *silly* text:

* ijklm123x
* [ ] zero=0
* [x] LOBOTOMY

> Quote myself

[source,c++]
.This is a code sample
----
// this is just fun
unsigned int i{123};
----
`,
  },
  {
    lang: "yaml",
    text: `letters:
  abcdefghijklmnopqrstuvwxyz
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
digits:
  0123456789
punctuation:
  !"#$%&'()*+,-./:;<=>?
  @[\\]^_\`{|}~
`,
  },
];
