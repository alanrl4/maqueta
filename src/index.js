import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#006d38",
            contrastText: "#ffffff",
            container: "#9bf6b3",
            onContainer: "#00210b",
        },
        secondary: {
            main: "#506353",
            contrastText: "#ffffff",
            container: "#d2e8d3",
            onContainer: "#0d1f12",
        },
        tertiary: {
            main: "#3a646e",
            contrastText: "#ffffff",
        },
        error: {
            main: "#ba1b1b",
            contrastText: "#ffffff",
        },
        background: { default: "#fbfdf7", onBackground: '#1a1c1a' },
        text: {
            primary: "#006d39",
        },
        variant: {
            surface: "#dce5da",
            onSurface: "#414941",
        },
        outline: "#79747E",
    },
    typography: {
        fontFamily: "Noto Sans",
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
            <App />
        </HashRouter>
    </ThemeProvider>,
    document.getElementById("root")
);
