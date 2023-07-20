// Font families are defined in public/fonts/defs.css

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
    subtitle: "With ligatures",
    body: 'Notice ligatures for "::", "!=", "!==", "->" and "<=>" and others.',
  },
  {
    fontFamily: "Cascadia Code PL",
    source: "Github",
    slug: "microsoft/cascadia-code",
    subtitle: "Cascadia Code + powerline symbols",
    body: 'Notice ligatures for "::", "!=", "!==", "->" and "<=>" and others.',
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
];
