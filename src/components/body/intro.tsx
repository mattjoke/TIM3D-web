import {
    Anchor,
    Button,
    Container,
    Grid,
    Group,
    Spoiler,
    Text,
    Title
} from "@mantine/core";
import { Box, BrandTabler, Rocket } from "tabler-icons-react";
import { Dispatch, useEffect, useState } from "react";

import { Factory } from "tim3d";
import { Link } from "react-router-dom";

const MainPage = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    const [factory, setFactory] = useState<Factory>();

    useEffect(() => {
        setLoading(true);
        const config = {
            container: document.getElementById("instance")!,
        };
        setFactory(new Factory(config));
        setLoading(false);
    }, [setLoading]);

    /*
    useEffect(() => {            
        return () => {
            factory?.destroy();
            setLoading(false);
        };
    }, [factory]);
    */

    return (
        <>
            <Container>
                <Title> Welcome!</Title>

                <Text mb={10}>
                    This is main page for the library called TIM 3D! If you
                    would like to try the library out, click the button bellow.
                </Text>

                <Spoiler
                    maxHeight={30}
                    showLabel="Show a demo"
                    hideLabel="Hide"
                >
                    <div
                        style={{
                            width: "min(90vw, 500px)",
                            height: "50vh",
                        }}
                        id="instance"
                    />
                </Spoiler>

                <Text mb={10}>
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
