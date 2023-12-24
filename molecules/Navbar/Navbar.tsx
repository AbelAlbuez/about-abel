import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Abel Albuez
        </Typography>
        <Button color="inherit" component="a" href="/">
          Home
        </Button>
        <Button color="inherit" component="a" href="/work">
          Work
        </Button>
        <Button color="inherit" component="a" href="/skills">
          Skills
        </Button>
        <Button color="inherit" component="a" href="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};
