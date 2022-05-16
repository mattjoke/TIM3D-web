import "./styles/App.css";

import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider
} from "@mantine/core";

import AppWrapper from "./AppWrapper";
import { Search } from "tabler-icons-react";
import { SpotlightProvider } from "@mantine/spotlight";
import actions from "./components/utils/actions";
import { data } from "./components/header/mainLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    const navigate = useNavigate();
    const buildActions = actions(navigate, data);

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider theme={{ colorScheme }}>
                <SpotlightProvider
                    actions={buildActions}
                    searchIcon={<Search size={18} />}
                    searchPlaceholder="Search..."
                    shortcut="mod + k"
                    nothingFoundMessage="Nothing found..."
                >
                    <AppWrapper />
                </SpotlightProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default App;
