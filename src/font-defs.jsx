export const FONT_SOURCES = {
  "Google Fonts": "https://fonts.google.com/specimen/",
  Github: "https://github.com/",
};

export const FONT_DEFS = [
  {
    fontFamily: "monospace",
    title: "Default monospace",
    body: 'Default "monospace" font as defined in your browser.',
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
    subtitle: 'With ligatures',
    body: 'Notice ligatures for "::", "!=", "!==", "->" and "<=>" and others.',
  },
  {
    fontFamily: "Cascadia Mono",
    source: "Github",
    slug: "microsoft/cascadia-code",
    subtitle: "Like Cascadia Code without ligatures",
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
];
