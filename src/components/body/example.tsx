import { Container, Grid, Text, Title } from "@mantine/core";
import { Dispatch, useEffect } from "react";

import BottomLinks from "../utils/bottomLinks";
import { Box } from "tabler-icons-react";
import DefaultManual from "./manuals/defaultManual";
import { Prism } from "@mantine/prism";

const animationExample = `
// Steps array
{
    name: "First Step",
    positions: [
        {
            id: 'cube_id',
            pose: {
                position: [10, 0, 0],
            },
            // Animation applied to specfic object
            animation: 'z360deg' 
        }
    ],
    // Animation applied to the whole step
    animation: 'x360deg' 
}
`;

const sidebarConfig = `
const customConfig={
    container: div,
    sidebar:{
        visible: true,
        body: document.getElementById('sidebar')
    }
}
`;

const animationLoop = `
const customConfig = {
    container: div,
    animationLoop: [
        "First Step", 
        "Init state",
        "Fifth Step", 
        "Second Step"
    ]
}
`;

const Examples = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, [setLoading]);
    return (
        <>
            <Container>
                <Title>
                    <Box /> Examples
                </Title>

                <Text mb={20}>
                    In this tutorial, we will get through some more exotic
                    functions and abilities of the TIM 3D library.
                </Text>

                <Title order={5}>Animations</Title>

                <Text mb={20}>
                    Every step can have an animation, which will be applied to
                    every step defined by the manual. Animation can even be
                    applied to each object individually. However, these
                    animations are not pre-computed, and therefore their
                    transformations are added relative to the previous state.
                </Text>

                <Grid grow gutter={"xl"} align={"center"}>
                    <Grid.Col
                        md={10}
                        lg={3}
                        mb={20}
                        style={{ maxWidth: "100%" }}
                    >
                        <DefaultManual
                            setLoading={setLoading}
                            customConfig={{
                                colors: {
                                    backgroundColor: "#f8f9fa",
                                },
                            }}
                            customJSON={{
                                files: [
                                    {
                                        id: "cube_id",
                                        file: "https://gist.githubusercontent.com/mattjoke/b736d1b2edf54354780a990a87e23c0e/raw/f416082ee68c8e39a0ddb9dd6ea6f8093bbaad52/cube.obj",
                                        name: "Cube loaded",
                                        pose: {
                                            position: [40, 0, 0],
                                            orientation: [1, 0, 0, 0],
                                        },
                                    },
                                ],
                                steps: [
                                    {
                                        name: "First Step",
                                        positions: [
                                            {
                                                id: "cube_id",
                                                pose: {
                                                    position: [10, 0, 0],
                                                },
                                                animation: "z360deg",
                                            },
                                        ],
                                        animation: "x360deg",
                                    },
                                ],
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col md={2} lg={3} style={{ maxWidth: "100%" }}>
                        <Prism language="javascript">{animationExample}</Prism>
                    </Grid.Col>
                </Grid>

                <Title order={5}>Step looping</Title>

                <Text mb={20}>
                    The manual can loop through the steps automatically. This
                    can be enabled with the animationLoop array in the Config.
                    The rendering of the animations goes through the names
                    defined by the array. Any number of steps can be skipped.
                    The manual will always start on the 'Init state', and the
                    animation looping will start there.{" "}
                    <strong>
                        You can use 'Init state' in the looping array to
                        reference the initial state of the manual!
                    </strong>
                </Text>

                <Grid grow gutter={"xl"} align={"center"}>
                    <Grid.Col
                        md={10}
                        lg={3}
                        mb={20}
                        style={{ maxWidth: "100%" }}
                    >
                        <DefaultManual
                            setLoading={setLoading}
                            customConfig={{
                                colors: {
                                    backgroundColor: "#f8ff9a",
                                },
                                animationLoop: [
                                    "First Step",
                                    "Init state",
                                    "Fifth Step",
                                    "Second Step",
                                ],
                            }}
                            customJSON={{
                                files: [
                                    {
                                        id: "cube_id",
                                        file: "https://gist.githubusercontent.com/mattjoke/b736d1b2edf54354780a990a87e23c0e/raw/f416082ee68c8e39a0ddb9dd6ea6f8093bbaad52/cube.obj",
                                        name: "Cube loaded",
                                        pose: {
                                            position: [40, 0, 0],
                                            orientation: [1, 0, 0, 0],
                                        },
                                    },
                                ],
                                steps: [
                                    {
                                        name: "First Step",
                                        positions: [
                                            {
                                                id: "cube_id",
                                                pose: {
                                                    position: [-10, 0, 0],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        name: "Second Step",
                                        positions: [
                                            {
                                                id: "cube_id",
                                                pose: {
                                                    position: [-10, 0, 70],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        name: "Ommited Step",
                                        positions: [
                                            {
                                                id: "cube_id",
                                                pose: {
                                                    position: [10, 0, 10],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        name: "Fifth Step",
                                        positions: [
                                            {
                                                id: "cube_id",
                                                pose: {
                                                    position: [-10, 0, 40],
                                                },
                                            },
                                        ],
                                    },
                                ],
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col md={2} lg={3} style={{ maxWidth: "100%" }}>
                        <Prism language="javascript">{animationLoop}</Prism>
                    </Grid.Col>
                </Grid>

                <Title order={5}>Sidebar</Title>

                <Text mb={20}>
                    A sidebar is a container shown when the window enters the
                    fullscreen. The reference defines this sidebar's content to
                    the div. The content of this div is then used as the content
                    for the sidebar.
                </Text>

                <Grid grow gutter={"xl"} align={"center"}>
                    <Grid.Col
                        md={10}
                        lg={3}
                        mb={20}
                        style={{ maxWidth: "100%" }}
                    >
                        <DefaultManual
                            setLoading={setLoading}
                            customConfig={{
                                colors: {
                                    backgroundColor: "#f8ff9a",
                                },
                                sidebar: {
                                    visible: true,
                                },
                            }}
                            customJSON={{
                                files: [
                                    {
                                        id: "cube_id",
                                        file: "https://gist.githubusercontent.com/mattjoke/b736d1b2edf54354780a990a87e23c0e/raw/f416082ee68c8e39a0ddb9dd6ea6f8093bbaad52/cube.obj",
                                        name: "Cube loaded",
                                        pose: {
                                            position: [40, 0, 0],
                                            orientation: [1, 0, 0, 0],
                                        },
                                    },
                                ],
                                steps: [
                                    {
                                        name: "First Step",
                                        positions: [
                                            {
                                                id: "cube_id",
                                                pose: {
                                                    position: [10, 0, 0],
                                                },
                                            },
                                        ],
                                    },
                                ],
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col md={2} lg={3} style={{ maxWidth: "100%" }}>
                        <Prism language="javascript">{sidebarConfig}</Prism>
                    </Grid.Col>
                </Grid>

                <BottomLinks
                    prev={{ name: "Introduction", link: "/introduction" }}
                    next={{ name: "Documentation", link: "/documentation" }}
                />
            </Container>
        </>
    );
};

export default Examples;
