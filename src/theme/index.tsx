import { createTheme, Theme } from '@mui/material';
import { BreakpointsOptions } from '@mui/system';

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const theme: Theme = createTheme({
  breakpoints: breakpoints,
});

export default theme;
