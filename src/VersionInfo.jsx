import { Box, Link, Typography } from "@mui/material";
import meta from "../package.json";

const VersionInfo = () => {
  const tag = meta.version;

  return (
    <Box sx={{ float: "right" }}>
      <Typography variant="body2">
        <Link
          href={`https://github.com/slavos1/code-font-gallery/tree/${tag}`}
          rel="noopener noreferrer nofollow noindex"
          target="_blank"
        >
          {meta.name} v{tag}
        </Link>
      </Typography>
    </Box>
  );
};

export default VersionInfo;
