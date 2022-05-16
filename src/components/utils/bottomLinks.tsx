import { ArrowLeft, ArrowRight } from "tabler-icons-react";
import { Card, Group, MediaQuery, Text } from "@mantine/core";

// @ts-ignore
import { Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface props {
    next: {
        name: string;
        link: string;
    };
    prev: {
        name: string;
        link: string;
    };
}

const BottomLinks = ({ next, prev }: props) => {
    const navigate = useNavigate();
    return (
        <>
            <MediaQuery largerThan="lg" styles={{ display: "none" }}>
                <Stack mt={10}>
                    <Card
                        shadow="sm"
                        p="lg"
                        onClick={() => navigate(prev.link)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Group position="apart" style={{ marginBottom: 5 }}>
                            <Group position="center">
                                <ArrowLeft />
                                <Text weight={500}>Previous</Text>
                            </Group>
                            <Text size="xs" color="dimmed">
                                {prev.name}
                            </Text>
                        </Group>
                    </Card>

                    <Card
                        shadow="sm"
                        p="lg"
                        onClick={() => navigate(next.link)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Group position="apart" style={{ marginBottom: 5 }}>
                            <Text size="xs" color="dimmed">
                                {next.name}
                            </Text>
                            <Group position="center">
                                <Text weight={500}>Up next</Text>
                                <ArrowRight />
                            </Group>
                        </Group>
                    </Card>
                </Stack>
            </MediaQuery>

            <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
                <Group position="apart" grow mt={10}>
                    <Card
                        shadow="sm"
                        p="lg"
                        onClick={() => navigate(prev.link)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Group position="apart" style={{ marginBottom: 5 }}>
                            <Group position="center">
                                <ArrowLeft />
                                <Text weight={500}>Previous</Text>
                            </Group>
                            <Text size="xs" color="dimmed">
                                {prev.name}
                            </Text>
                        </Group>
                    </Card>

                    <Card
                        shadow="sm"
                        p="lg"
                        onClick={() => navigate(next.link)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Group position="apart" style={{ marginBottom: 5 }}>
                            <Text size="xs" color="dimmed">
                                {next.name}
                            </Text>
                            <Group position="center">
                                <Text weight={500}>Up next</Text>
                                <ArrowRight />
                            </Group>
                        </Group>
                    </Card>
                </Group>
            </MediaQuery>
        </>
    );
};

export default BottomLinks;
