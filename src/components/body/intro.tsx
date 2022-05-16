import {
    Anchor,
    Button,
    Container,
    Group,
    MediaQuery,
    Text,
    Title,
    Tooltip,
    createStyles
} from "@mantine/core";
import { Box, BrandTabler, Rocket } from "tabler-icons-react";

import DefaultManual from "./manuals/defaultManual";
import { Dispatch } from "react";
import { Link } from "react-router-dom";
import { useColorScheme } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    body: {
        display: "flex",
        width: "100%",
        height: "70vh",
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            flexDirection: "column",
            height: "100%",
        },
    },
    container: {
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        maxWidth: "500px",
        flexWrap: "wrap",
    },
    subcontent: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
    },
    title: {
        color: theme.colorScheme[6],
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.5,
    },
}));

const MainPage = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    const colorScheme = useColorScheme();
    const { classes } = useStyles();

    setLoading(false);

    return (
        <>
            <div className={classes.body}>
                <Container className={classes.container}>
                    <Title className={classes.title}>
                        Interactive 3D manual on the web!
                    </Title>
                    <Text mb={10}>
                    This is the main page for the library called TIM 3D! TIM 3D stands for Three.js Interactive Manual! If you would like to try the library out, click the buttons below.
                    </Text>
                    <Group position="center" spacing="xl" mb={30}>
                        <Tooltip
                            wrapLines
                            width={220}
                            withArrow
                            transition="fade"
                            position="bottom"
                            transitionDuration={200}
                            label="In this section, you can find basic installation links and tutorials."
                        >
                            <Anchor component={Link} to="/get-started">
                                <Button radius="lg" rightIcon={<Rocket />}>
                                    Get Started
                                </Button>
                            </Anchor>
                        </Tooltip>
                        <Tooltip
                            wrapLines
                            width={220}
                            withArrow
                            transition="fade"
                            position="bottom"
                            transitionDuration={200}
                            label="In this section, you can find basic step-by-step tutorial of how to use the TIM 3D"
                        >
                            <Anchor component={Link} to="/introduction">
                                <Button
                                    color="cyan"
                                    radius="lg"
                                    rightIcon={<BrandTabler />}
                                >
                                    Introduction
                                </Button>
                            </Anchor>
                        </Tooltip>
                        <Tooltip
                            wrapLines
                            width={220}
                            withArrow
                            transition="fade"
                            position="bottom"
                            transitionDuration={200}
                            label="This section contains more exotic functions and manuals, which you can use with your own manuals"
                        >
                            <Anchor component={Link} to="/examples">
                                <Button
                                    color="teal"
                                    radius="lg"
                                    rightIcon={<Box />}
                                >
                                    Examples
                                </Button>
                            </Anchor>
                        </Tooltip>
                    </Group>
                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                        <Text mb={10}>TIM 3D works on mobile devices too!</Text>
                    </MediaQuery>
                </Container>
                <DefaultManual
                    setLoading={setLoading}
                    customConfig={{
                        colors: {
                            backgroundColor:
                                colorScheme === "dark" ? "#f8f9fa" : "#232323",
                        },
                    }}
                    customJSON={{
                        files: [
                            {
                                id: "cube_id_2",
                                file: "https://gist.githubusercontent.com/mattjoke/b736d1b2edf54354780a990a87e23c0e/raw/f416082ee68c8e39a0ddb9dd6ea6f8093bbaad52/cube.obj",
                                name: "Cube loaded",
                                pose: {
                                    position: [0, 0, 0],
                                    orientation: [1, 0, 0, 0],
                                },
                            },
                        ],
                        steps: [
                            {
                                name: "First Step",
                                positions: [
                                    {
                                        id: "cube_id_2",
                                        pose: {
                                            position: [50, 0, 0],
                                        },
                                    },
                                ],
                                animation: "x120deg",
                            },
                            {
                                name: "Second Step",
                                positions: [
                                    {
                                        id: "cube_id_2",
                                        pose: {
                                            position: [0, 50, 0],
                                            orientation: [
                                                -0.8979618, 0.4013845,
                                                0.1647231, -0.0736304,
                                            ],
                                        },
                                    },
                                ],
                                animation: "y15deg",
                            },
                            {
                                name: "Third Step",
                                positions: [
                                    {
                                        id: "cube_id_2",
                                        pose: {
                                            position: [0, 0, 50],
                                            orientation: [
                                                0.5135532, -0.4270046,
                                                -0.7421897, -0.0555396,
                                            ],
                                        },
                                    },
                                ],
                                animation: "z91deg",
                            },
                        ],
                    }}
                />
            </div>
        </>
    );
};

export default MainPage;
