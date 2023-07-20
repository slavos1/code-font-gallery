import PropTypes from "prop-types";
import { Light as OuterSyntaxHighlighter } from "react-syntax-highlighter";
import {
  javascript,
  cpp,
  asciidoc,
  yaml,
  python,
} from "react-syntax-highlighter/dist/esm/languages/hljs";

// XXX this may not make much change in local dev but resulting
// vite build is 400kB vs 1mB when not using Light
OuterSyntaxHighlighter.registerLanguage("javascript", javascript);
OuterSyntaxHighlighter.registerLanguage("c++", cpp);
OuterSyntaxHighlighter.registerLanguage("asciidoc", asciidoc);
OuterSyntaxHighlighter.registerLanguage("yaml", yaml);
OuterSyntaxHighlighter.registerLanguage("python", python);

const SyntaxHighlighter = ({ children, ...rest }) => (
  <OuterSyntaxHighlighter {...rest}>{children}</OuterSyntaxHighlighter>
);

SyntaxHighlighter.propTypes = {
  children: PropTypes.any,
  rest: PropTypes.any,
};

export default SyntaxHighlighter;
