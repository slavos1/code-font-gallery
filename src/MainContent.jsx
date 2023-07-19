import Showcase from "./Showcase";
import { CODE_BLOCKS } from "./code-blocks";
import { Box, Button, Link, Typography } from "@mui/material";
import HiliteStyleSelect from "./HiliteStyleSelect";
import FontSizeSelect from "./FontSizeSelect";
import { useContext } from "react";
import { Context } from "./Context";
import Grid from "./Grid";
import { FONT_DEFS } from "./font-defs";
import VersionInfo from "./VersionInfo";

const MainContent = () => {
  const { context, dispatch } = useContext(Context);
  // const { fontSize } = context.highlight;
  const isDevel = import.meta.env.DEV && import.meta.env.MODE == "development";
  // console.log("import.meta.env=", import.meta.env);

  return (
    <Box sx={{ m: 1 }}>
      <Grid container columnSpacing={1} rowSpacing={1}>
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
                // onClick={() => setExpanded(expanded.map(() => false))}
                onClick={() => dispatch({ type: "collapseAll" })}
              >
                Collapse all
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="secondary"
                // size="small"
                // onClick={() => setExpanded(expanded.map(() => true))}
                onClick={() => dispatch({ type: "expandAll" })}
              >
                Expand all
              </Button>
            </Grid>
            <Grid>
              <HiliteStyleSelect
              // value={hiliteStyle}
              // setValue={setHiliteStyle}
              />
            </Grid>
            <Grid>
              <FontSizeSelect
              //   value={fontSize} setValue={setFontSize}
              />
            </Grid>
            {isDevel && (
              <Grid>
                <Box variant="pre">context={JSON.stringify(context)}</Box>
              </Grid>
            )}
          </Grid>
        </Grid>

        {/* fonts */}
        {FONT_DEFS.map((fontDef, idx) => (
          <Grid key={idx} xs={12} sm={6} md={3}>
            <Showcase
              position={idx}
              //   expanded={expanded[idx]}
              expanded={false}
              //   setExpanded={(value) =>
              //     setExpanded(replaceValueAt(expanded, idx, value))
              //   }
              setExpanded={() => null}
              codeBlocks={CODE_BLOCKS}
              //   styleName={hiliteStyle}
              //   fontSize={`${fontSize}%`}
              {...fontDef}
            />
          </Grid>
        ))}

        <Grid xs={12}>
          <VersionInfo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
