export const SOURCES = {
  "Google Fonts": "https://fonts.google.com/specimen/",
  Github: "https://github.com/",
};

export const FONTS = [
  {
    fontFamily: "monospace",
    title: "Default monospace",
    subtitle: 'Default browser "monospace" font',
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
    subtitle: 'Has ligatures',
    footer: 'Notice many ligatures; for example, "::", "!=", "!==", "->" and "<=>".',
  },
  {
    fontFamily: "Cascadia Mono",
    source: "Github",
    slug: "microsoft/cascadia-code",
    subtitle: "Like Cascadia Code but no ligatures",
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
