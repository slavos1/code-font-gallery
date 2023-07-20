import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { Context } from "./Context";
import Grid from "./Grid";
import { FONT_DEFS } from "./font-defs";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const DrawerAppBar = ({ children, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dispatch } = useContext(Context);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const Logo = (props) => (
    <>
      <Typography variant="h6" {...props}>
        CFG
      </Typography>
    </>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo sx={{ my: 2 }} />
      <Divider />
      <List>
        <ListItem>
          <Button
            color="info"
            onClick={() => dispatch({ type: "collapseAll" })}
          >
            Collapse all
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="secondary"
            onClick={() => dispatch({ type: "expandAll" })}
          >
            Expand all
          </Button>
        </ListItem>
        {FONT_DEFS.map((fontDef, idx) => (
          <ListItem key={idx}>
            <Button href={`#${fontDef.fontFamily}`}>
              {fontDef.fontFamily}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const inputs = (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Grid container spacing={1}>
        <Grid>
          <Button
            variant="contained"
            color="info"
            onClick={() => dispatch({ type: "collapseAll" })}
          >
            Collapse all
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: "expandAll" })}
          >
            Expand all
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Logo
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          />
          {inputs}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  children: PropTypes.any,
};

export default DrawerAppBar;
