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
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { Context } from "./Context";
import { DEFAULT_FONT_SIZE } from "./reducer";
import { getStyle } from "./hi-styles";
import { FONT_SOURCES } from "./font-defs";

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

const capitalize = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : string;
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
  position,
  codeBlocks,
  title,
  subtitle,
  fontFamily,
  source,
  slug,
  footer,
  boxShadow = 1,
  body,
}) => {
  const { context, dispatch } = useContext(Context);
  const expanded = context.expanded[position] || false;
  // const { fontSize, style:styleName } = ;
  // const fontSizePercent = ;

  const fontFamilyCss = `${fontFamily}, monospace`;
  const sourceLink =
    (source && FONT_SOURCES[source] && (
      <Link
        href={`${FONT_SOURCES[source]}${slug || fontFamily}`}
        rel="noopener noreferrer nofollow noindex"
        target="_blank"
      >
        {title || fontFamily}
      </Link>
    )) ||
    title;

  const renderedBlocks = codeBlocks.map((code, idx) => (
    <Box key={idx}>
      <Typography variant="h6">{capitalize(code.lang)}</Typography>
      {/* <SyntaxHighlighter language={code.lang} style={tomorrowNightBright}> */}
      <SyntaxHighlighter
        language={code.lang}
        style={getStyle(context.highlight.style)}
        showLineNumbers={true}
      >
        {code.text.trim()}
      </SyntaxHighlighter>
    </Box>
  ));

  return (
    <Card sx={{ p: 0, boxShadow, border: "solid 0px red" }}>
      <CardHeader
        title={sourceLink}
        subheader={subtitle}
      ></CardHeader>
      <CardContent sx={{ p: 0 }}>
        <StyledBox
          fontFamily={fontFamilyCss}
          fontSize={`${context.highlight.fontSize || DEFAULT_FONT_SIZE}%`}
          sx={{ p: 1 }}
        >
          <Typography variant="body2">{body}</Typography>
          {renderedBlocks.slice(0, 1)}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {renderedBlocks.slice(1)}
          </Collapse>
        </StyledBox>
      </CardContent>
      <CardActions>
        <Typography paragraph>{footer}</Typography>
        <ExpandMore
          expand={expanded}
          // onClick={() => setExpanded(!expanded)}
          onClick={() =>
            dispatch({
              type: "toggleOne",
              expanded,
              position,
            })
          }
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

Showcase.propTypes = {
  position: PropTypes.number,
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
};

export default Showcase;
