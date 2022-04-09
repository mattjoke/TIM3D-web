import {
    Anchor,
    Button,
    Container,
    Grid,
    Group,
    MediaQuery,
    Text,
    Title,
} from "@mantine/core";
import { Box, BrandTabler, Rocket, ThreeDCubeSphere } from "tabler-icons-react";

import DefaultManual from "./manuals/defaultManual";
import { Dispatch } from "react";
import { Link } from "react-router-dom";
import { useColorScheme } from "@mantine/hooks";

const MainPage = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    const colorScheme = useColorScheme();
    
    return (
        <>
            <Container>
                <Title>
                    <ThreeDCubeSphere /> Welcome!
                </Title>

                <Text mb={10}>
                    This is main page for the library called TIM 3D! If you
                    would like to try the library out, click the button bellow.
                </Text>

                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Text mb={10}>TIM 3D works on mobile devices too!</Text>
                </MediaQuery>

                <DefaultManual
                    setLoading={setLoading}
                    customConfig={{
                        colors:{
                            backgroundColor: colorScheme  === 'dark'? "#f8f9fa" : "#232323"
                        }
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
                                animation: 'x120deg'
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
                                animation: 'y15deg'
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
                                animation: 'z91deg'
                            },
                        ],
                    }}
                    />

                <Text mb={10} mt={10}>
                    TIM 3D is a 3D manual built over Three.js library. What can
                    you find here?
                </Text>

                <Group>
                    <Grid align="center" justify="center">
                        <Grid.Col span={5}>
                            <Anchor component={Link} to="/get-started">
                                <Button compact leftIcon={<Rocket />}>
                                    Get Started
                                </Button>
                            </Anchor>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text>
                                In this section, you can find basic installation
                                links and tutorials.
                            </Text>
                        </Grid.Col>
                    </Grid>
                    <Grid align="center" justify="center">
                        <Grid.Col span={5}>
                            <Anchor component={Link} to="/introduction">
                                <Button
                                    compact
                                    color="cyan"
                                    leftIcon={<BrandTabler />}
                                >
                                    Introduction
                                </Button>
                            </Anchor>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text>
                                In this section, you can find basic exmaple of
                                how to use this library.
                            </Text>
                        </Grid.Col>
                    </Grid>
                    <Grid align="center" justify="center">
                        <Grid.Col span={5}>
                            <Anchor component={Link} to="/examples">
                                <Button compact color="teal" leftIcon={<Box />}>
                                    Examples
                                </Button>
                            </Anchor>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text>
                                In this section, we will go step by step and
                                create our own TIM 3D manual!
                            </Text>
                        </Grid.Col>
                    </Grid>
                </Group>
                <Text>
                    And so much more! What are you waiting for? Go ahead and
                    explore!
                </Text>
            </Container>
        </>
    );
};

export default MainPage;
