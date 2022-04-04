import {
    ActionIcon,
    Anchor,
    Avatar,
    Badge,
    Burger,
    Grid,
    Group,
    Input,
    MediaQuery,
    Text,
    Title,
    useMantineColorScheme,
    useMantineTheme
} from "@mantine/core";
import { MoonStars, Search, Sun, ThreeDCubeSphere } from "tabler-icons-react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useSpotlight } from "@mantine/spotlight";

type Props = {
    opened: boolean;
    setOpened: (active: boolean) => void;
};

const Header = ({ opened, setOpened }: Props) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const theme = useMantineTheme();
    const titleColor = dark ? theme.colors.dark[0] : theme.colors.dark[7];

    const [version, setVersion] = useState<string>("v0.1");
    const [badgeUrl, setBadgeUrl] = useState<string>("/");

    const spotlight = useSpotlight();

    useEffect(() => {
        let cancel = false;
        fetch("https://api.github.com/repos/mattjoke/tim3D/releases")
            .then((res) => res.json())
            .then((data) => {
                const version = data[0].tag_name;
                const url = data[0].html_url;
                if (cancel) return;
                setVersion(version);
                setBadgeUrl(url);
            });
        return () => {
            cancel = true;
        };
    }, []);

    return (
        <>
            <Group position="apart">
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened(!opened)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>

                <Grid justify="center" align="center">
                    <Grid.Col span={9}>
                        <Anchor
                            component={Link}
                            to="/"
                            onClick={() => setOpened(false)}
                            underline={false}
                        >
                            <Grid justify="center" align="center">
                                <Grid.Col span={3}>
                                    <Avatar mr="xl">
                                        <ThreeDCubeSphere />
                                    </Avatar>
                                </Grid.Col>

                                <Grid.Col span={6}>
                                    <Title
                                        sx={() => ({
                                            color: titleColor,
                                        })}
                                    >
                                        TIM3D
                                    </Title>
                                </Grid.Col>
                            </Grid>
                        </Anchor>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <MediaQuery
                            smallerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Badge
                                color="green"
                                variant="filled"
                                component="a"
                                href={badgeUrl}
                                style={{ cursor: "pointer" }}
                            >
                                <Text transform="lowercase" size="sm">
                                    {version}
                                </Text>
                            </Badge>
                        </MediaQuery>
                    </Grid.Col>
                </Grid>
                <Group>
                    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                        <Input
                            icon={<Search size={14} />}
                            placeholder="Search"
                            onClick={() => spotlight.openSpotlight()}
                            rightSectionWidth={90}
                            rightSection={
                                <Badge color="gray" radius="sm">
                                    Ctrl + K
                                </Badge>
                            }
                        />
                    </MediaQuery>
                    <ActionIcon
                        variant="default"
                        onClick={() => toggleColorScheme()}
                        size={30}
                    >
                        {dark ? <Sun size={16} /> : <MoonStars size={16} />}
                    </ActionIcon>
                </Group>
            </Group>
        </>
    );
};

export { Header as NavigationHeader };
