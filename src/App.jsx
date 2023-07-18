import Grid from "./Grid";
import { FONTS } from "./Fonts";
import Showcase from "./Showcase";
import { CODE_BLOCKS } from "./CodeBlocks";
import { Box, Button, Link, Typography } from "@mui/material";
import { useState } from "./useState";
import HiliteStyleSelect from "./HiliteStyleSelect";
import { DEFAULT_STYLE } from "./HiliteStyles";

const replaceValueAt = (array, idx, value) => {
  console.log("array before=", array);
  const updated = [
    // ...array.slice(0, idx < 1 ? 0 : idx - 1),
    ...array.slice(0, idx),
    value,
    ...array.slice(idx + 1),
  ];
  console.log("array before=", updated);
  return updated;
};

const App = () => {
  const [expanded, setExpanded] = useState(
    "expanded.all",
    Array(FONTS.length).fill(false)
  );
  const [hiliteStyle, setHiliteStyle] = useState("hilite.style", DEFAULT_STYLE);

  return (
    <Box sx={{ m: 1 }}>
      <Grid container spacing={2}>
        {/* intro */}
        <Grid xs={12}>
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
            . Here you can quickly see various fonts in &quot;action&quot; with
            code samples. Highlighting styles come from the list in the{" "}
            <Link
              href="https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_HLJS.MD"
              rel="noopener noreferrer nofollow noindex"
              target="_blank"
            >
              <tt>react-syntax-highlighter</tt> documentation
            </Link>
            .
          </Typography>
        </Grid>

        {/* input */}
        <Grid xs={12}>
          {/* buttons */}
          <Grid container spacing={3}>
            <Grid>
              <Button
                variant="contained"
                color="primary"
                // size="small"
                onClick={() => setExpanded(expanded.map(() => false))}
              >
                Collapse all
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="secondary"
                // size="small"
                onClick={() => setExpanded(expanded.map(() => true))}
              >
                Expand all
              </Button>
            </Grid>
            <Grid>
              <HiliteStyleSelect value={hiliteStyle} setValue={setHiliteStyle} />
            </Grid>
          </Grid>
        </Grid>

        {/* fonts */}
        {FONTS.map((fontDef, idx) => (
          <Grid key={idx} xs={12} sm={6} md={3}>
            <Showcase
              expanded={expanded[idx]}
              setExpanded={(value) =>
                setExpanded(replaceValueAt(expanded, idx, value))
              }
              codeBlocks={CODE_BLOCKS}
              styleName={hiliteStyle}
              {...fontDef}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
