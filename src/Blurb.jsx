import { Alert, AlertTitle, Box, Link, Typography } from "@mui/material";
import { FONT_DEFS } from "./font-defs";
import { IS_DEVEL } from "./reducer";

const Blurb = () => {
  const googleHosted = FONT_DEFS.filter((def) => def.source == "Google Fonts")
    .map((def) => def.fontFamily)
    .join(", ");

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h3">Code Font Gallery</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Side-by-side comparison of some fonts for coding
      </Typography>
      <Typography variant="body1" paragraph>
        Inspired by{" "}
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
            {" "}Highlighting styles come from the list in the{" "}
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

      <Alert variant="outlined" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        As this is work-in-progress, please note only Google Fonts-hosted fonts
        {googleHosted && ` (${googleHosted})`} are showing correctly.
      </Alert>
    </Box>
  );
};

export default Blurb;
