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
import { SOURCES } from "./Fonts";
import SyntaxHighlighter from "react-syntax-highlighter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getStyle } from "./HiliteStyles";

const StyledBox = ({ fontFamily, children, ...rest }) => {
  const StyledElement = styled(Box)({
    "& pre": {
      borderRadius: 8,
    },
    "& code": {
      fontFamily,
    },
  });

  return <StyledElement {...rest}>{children}</StyledElement>;
};

StyledBox.propTypes = {
  fontFamily: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
  rest: PropTypes.any,
};

const capitalize = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : string;
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
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
  expanded,
  setExpanded,
  footer,
  styleName,
}) => {
  const fontFamilyCss = `${fontFamily}, monospace`;
  const sourceLink =
    (source && SOURCES[source] && (
      <Link
        href={`${SOURCES[source]}${slug || fontFamily}`}
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
      <SyntaxHighlighter language={code.lang} style={getStyle(styleName)}>
        {code.text}
      </SyntaxHighlighter>
    </Box>
  ));

  return (
    <Card sx={{ p: 1, boxShadow: 0 }}>
      {/* <CardHeader title={title || fontFamily} subheader={subtitle}></CardHeader> */}
      <CardHeader title={sourceLink} subheader={subtitle}></CardHeader>
      <CardContent>
        <StyledBox fontFamily={fontFamilyCss} sx={{ p: 1 }}>
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
          onClick={() => setExpanded(!expanded)}
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
  codeBlocks: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fontFamily: PropTypes.string,
  source: PropTypes.string,
  slug: PropTypes.string,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func,
  footer: PropTypes.string,
  styleName: PropTypes.string,
};

export default Showcase;
