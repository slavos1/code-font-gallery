import Showcase from "./Showcase";
import { CODE_BLOCKS } from "./code-blocks";
import { Box } from "@mui/material";
import HiliteStyleSelect from "./HiliteStyleSelect";
import FontSizeSelect from "./FontSizeSelect";
import { useContext } from "react";
import { Context } from "./Context";
import Grid from "./Grid";
import { FONT_DEFS, fontDefKey } from "./font-defs";
import VersionInfo from "./VersionInfo";
import Blurb from "./Blurb";
import { IS_DEVEL } from "./reducer";

const MainContent = () => {
  const { context } = useContext(Context);

  const debug = null && IS_DEVEL && (
    <Grid>
      <Box>context={JSON.stringify(context)}</Box>
    </Grid>
  );

  return (
    <Box sx={{ m: 1 }}>
      <Grid container columnSpacing={1} rowSpacing={2}>
        {/* intro */}
        <Grid xs={12}>
          <Blurb />
        </Grid>

        {/* input */}
        <Grid container spacing={3} xs={12}>
          <Grid xs={6} md={3}>
            <HiliteStyleSelect />
          </Grid>
          <Grid xs={6} md={3}>
            <FontSizeSelect />
          </Grid>
          {debug}
        </Grid>

        {/* fonts */}
        <Grid container spacing={1}>
          {FONT_DEFS.map((fontDef, idx) => (
            <Grid id={fontDef.fontFamily} key={idx} xs={12} sm={6} md={3}>
              <Showcase
                codeBlocks={CODE_BLOCKS}
                boxShadow={2}
                defKey={fontDefKey(fontDef)}
                {...fontDef}
              />
            </Grid>
          ))}
        </Grid>

        <Grid xs={12}>
          <VersionInfo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
