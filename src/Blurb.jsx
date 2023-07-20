import { Box, Link, Typography } from "@mui/material";
import { IS_DEVEL } from "./reducer";

const Blurb = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h3">Code Font Gallery</Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" component="em">
          Side-by-side comparison of some fonts for coding
        </Typography>
      </Box>
      <Typography variant="body1" paragraph>
        <Link
          href="https://kinsta.com/blog/best-programming-fonts/"
          rel="noopener noreferrer nofollow noindex"
          target="_blank"
        >
          15 Best Programming Fonts for Better Coding
        </Link>
        . Here you can see several various fixed-width fonts in
        &quot;action&quot; with code samples for your to compare.
        {IS_DEVEL && (
          <>
            {" "}
            Highlighting styles come from the list in the{" "}
            <Link
              href="https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_HLJS.MD"
              rel="noopener noreferrer nofollow noindex"
              target="_blank"
            >
              <tt>react-syntax-highlighter</tt> documentation
            </Link>
            .
          </>
        )}
      </Typography>
    </Box>
  );
};

export default Blurb;
