import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Link,
  Typography,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { Context } from "./Context";
import { DEFAULT_FONT_SIZE } from "./reducer";
import { getStyle } from "./hi-styles";
import { FONT_SOURCES } from "./font-defs";
import SyntaxHighlighter from "./SyntaxHighlighter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

const StyledBox = ({ fontFamily, fontSize, children, ...rest }) => {
  const StyledElement = styled(Box)({
    "& pre": {
      borderRadius: 8,
      fontSize,
    },
    "& code": {
      fontFamily,
      whiteSpace: "pre-wrap !important",
    },
  });

  return <StyledElement {...rest}>{children}</StyledElement>;
};

StyledBox.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
  rest: PropTypes.any,
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props; // eslint-disable-line no-unused-vars
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Showcase = ({
  codeBlocks,
  title,
  subtitle,
  fontFamily,
  source,
  slug,
  boxShadow = 1,
  body,
  href,
  defKey,
}) => {
  const { context, dispatch } = useContext(Context);
  const open = (context.open && context.open[defKey]) || false;

  const fontFamilyCss = `${fontFamily}, monospace`;
  const sourceHref = href || `${FONT_SOURCES[source]}${slug || fontFamily}`;
  const sourceLink =
    title ||
    (sourceHref && (
      <Link
        href={sourceHref}
        rel="noopener noreferrer nofollow noindex"
        target="_blank"
      >
        {title || fontFamily}
      </Link>
    ));
  const titleComponent = <Typography variant="h6">{sourceLink}</Typography>;

  const renderedBlocks = codeBlocks.map((code, idx) => (
    // XXX letter-spacing must be 0 for ligatures to work!
    <Box key={idx} sx={{ letterSpacing: 0 }}>
      <Typography color="text.disabled" variant="subtitle2">
        {code.lang.toLowerCase()}
      </Typography>
      <SyntaxHighlighter
        language={code.lang}
        style={getStyle(context.highlight.style)}
        showLineNumbers={code.noLineNumbers !== true}
      >
        {code.text.trim()}
      </SyntaxHighlighter>
    </Box>
  ));

  const avatarIcon = {
    "Google Fonts": <GoogleIcon />,
    Github: <GitHubIcon />,
  }[source] || <WebIcon />;

  return (
    <Card sx={{ p: 0, boxShadow, border: "solid 0px red" }}>
      <CardHeader
        avatar={avatarIcon}
        title={titleComponent}
        subheader={subtitle}
      ></CardHeader>
      <CardContent sx={{ p: 0 }}>
        <StyledBox
          fontFamily={fontFamilyCss}
          fontSize={`${context.highlight.fontSize || DEFAULT_FONT_SIZE}%`}
          sx={{ p: 1 }}
        >
          {/* <Typography variant="body2">{body}</Typography> */}
          {renderedBlocks.slice(0, 1)}
          <Collapse in={open} timeout="auto" unmountOnExit>
            {renderedBlocks.slice(1)}
          </Collapse>
        </StyledBox>
      </CardContent>
      <CardActions>
        {/* <Typography paragraph>{footer}</Typography> */}
        <Typography paragraph>{body}</Typography>
        <ExpandMore
          expand={open}
          onClick={() =>
            dispatch({
              type: "toggleOne",
              open,
              key: defKey,
            })
          }
          aria-expanded={open}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

Showcase.propTypes = {
  codeBlocks: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fontFamily: PropTypes.string,
  source: PropTypes.string,
  slug: PropTypes.string,
  footer: PropTypes.string,
  fontSize: PropTypes.string,
  boxShadow: PropTypes.number,
  body: PropTypes.string,
  href: PropTypes.string,
  defKey: PropTypes.any,
};

export default Showcase;
