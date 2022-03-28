import "./styles/App.css";

import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";

import AppWrapper from "./AppWrapper";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";

const App = () => {
    const prefferedColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] =
        useState<ColorScheme>(prefferedColorScheme);
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider theme={{ colorScheme }}>
                <AppWrapper />
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default App;
