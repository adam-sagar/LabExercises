import { createTheme } from "@mui/material/styles";

//creates a new theme containing overrides for any defaults
//see https://mui.com/material-ui/customization/theming/#theme-configuration-variables for more
export const tealTheme = createTheme({
    palette: {
        primary: {
            main: '#214D4C',
            contrastText: '#efefef'
        },
        secondary: {
            main: '#3CA899',
            contrastText: '#ffffff'
        }
    },
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        h1: {
            fontSize: 30
        }
    },
    shape: {
        borderRadius: 0
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              a {
                color: #3CA899;
              }
            `,
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled'
            }
        }
    }
});
