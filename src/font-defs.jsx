// Font families are defined in public/fonts/defs.css
// XXX polyfill for toSorted missing in Firefox < 115.x
import 'core-js/actual/array/to-sorted';

export const FONT_SOURCES = {
  "Google Fonts": "https://fonts.google.com/specimen/",
  Github: "https://github.com/",
};

export const _FONT_DEFS = [
  {
    fontFamily: "monospace",
    title: "Default monospace",
    body: 'Default "monospace" font as defined in your browser.',
    order: -1,
  },
  {
    fontFamily: "Roboto Mono",
    source: "Google Fonts",
  },
  {
    fontFamily: "Source Code Pro",
    source: "Google Fonts",
  },
  {
    fontFamily: "Cascadia Code",
    source: "Github",
    slug: "microsoft/cascadia-code",
    subtitle: "With ligatures",
    body: 'Notice ligatures for "::", "!=", "!==", "->" and "<=>" and others.',
  },
  {
    fontFamily: "Cascadia Code PL",
    source: "Github",
    slug: "microsoft/cascadia-code",
    subtitle: "Cascadia Code + powerline symbols",
  },
  {
    fontFamily: "Cascadia Mono",
    source: "Github",
    slug: "microsoft/cascadia-code",
    subtitle: "Like Cascadia Code without ligatures",
  },
  {
    fontFamily: "Cascadia Mono PL",
    source: "Github",
    slug: "microsoft/cascadia-code",
    subtitle: "Cascadia Mono + powerline symbols",
  },
  {
    fontFamily: "Fira Mono",
    source: "Google Fonts",
  },
  {
    fontFamily: "Hack",
    source: "Github",
    slug: "source-foundry/Hack",
    subtitle: "A typeface designed for source code",
  },
  {
    fontFamily: "DejaVu Sans Mono",
    source: "Github",
    slug: "dejavu-fonts/dejavu-fonts",
  },
  {
    fontFamily: "JetBrains Mono NL",
    href: "https://www.jetbrains.com/lp/mono/",
  },
  {
    fontFamily: "Anonymous Pro",
    source: "Google Fonts",
  },
  {
    fontFamily: "Iosevka Curly",
    source: "Github",
    subtitle: "With ligatures",
    slug: "be5invis/Iosevka",
  },
  {
    fontFamily: "Iosevka Fixed Curly",
    source: "Github",
    subtitle: "No ligatures",
    slug: "be5invis/Iosevka",
  },
  {
    fontFamily: "Ubuntu Mono",
    href: "https://design.ubuntu.com/font",
  },
];

const fontSort = (a) =>
  a.toSorted((x, y) => {
    let keyX, keyY;
    if (x.order !== undefined && y.order !== undefined) {
      [keyX, keyY] = [x.order, y.order];
    } else if (x.order !== undefined) {
      return -1;
    } else if (y.order !== undefined) {
      return 1;
    } else {
      [keyX, keyY] = [x.fontFamily, y.fontFamily];
    }
    return keyX < keyY ? -1 : keyX > keyY ? 1 : 0;
  });

export const FONT_DEFS = fontSort(_FONT_DEFS);