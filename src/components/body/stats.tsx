import {
    ColorSwatch,
    Container,
    Group,
    Image,
    MediaQuery,
    RingProgress,
    Text,
    Title,
} from "@mantine/core";
import { Dispatch, useEffect, useState } from "react";
import {
    ExternalLink,
    GitCommit,
    GitFork,
    GitPullRequest,
    Star,
} from "tabler-icons-react";

import BottomLinks from "../utils/bottomLinks";
import img from "../../static/trello.png";

interface data {
    value: number;
    color: string;
}

interface githubData {
    value: number;
}

const Stats = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    const [trelloData] = useState<data[]>([
        { value: 0, color: "blue" },
        { value: 0, color: "green" },
        { value: 0, color: "orange" },
        { value: 0, color: "yellow" },
    ]);
    useEffect(() => {
        setLoading(true);
        const arr = [
            "616c74d616ae67611a4444c8",
            "616c74db2c5c361a4f77907a",
            "616c74bcc45da4620b162689",
            "616c74e8d8b09a056d9c0c7a",
        ];
        let count = 0;
        arr.forEach((id, index) => {
            const url = `https://trello.com/1/lists/${id}/cards`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    trelloData[index].value = data.length - 1;
                    count += data.length - 1;
                    trelloData.forEach((item) => item.value / count);
                });
            setLoading(false);
        });
    }, [trelloData, setLoading]);

    const [githubData, setGithubData] = useState<githubData[]>([]);
    useEffect(() => {
        setLoading(true);
        const obj = [
            { value: 0 }, // Stars
            { value: 0 }, // Forks
            { value: 0 }, // Commits
            { value: 0 }, // Pull Requests
        ];
        fetch("https://api.github.com/repos/mattjoke/TIM3D/stargazers")
            .then((res) => res.json())
            .then((data) => {
                obj[0].value = data.length;
            })
            .catch(() => {
                obj[0].value = 0;
            });
        fetch("https://api.github.com/repos/mattjoke/tim3D/forks")
            .then((res) => res.json())
            .then((data) => {
                obj[1].value = data.length;
            })
            .catch(() => {
                obj[1].value = 0;
            });

        fetch("https://api.github.com/repos/mattjoke/tim3D/commits")
            .then((res) => res.json())
            .then((data) => {
                obj[2].value = data.length;
            })
            .catch(() => {
                obj[2].value = 0;
            });
        fetch("https://api.github.com/repos/mattjoke/TIM3D/pulls")
            .then((res) => res.json())
            .then((data) => {
                obj[3].value = data.length;
            })
            .catch(() => {
                obj[3].value = 0;
            });
        setGithubData(obj);
        setLoading(false);
    }, [setGithubData, setLoading]);

    const [releaseVersion, setReleaseVersion] = useState<string>("/");

    useEffect(() => {
        setLoading(true);
        fetch("https://api.github.com/repos/mattjoke/tim3D/releases")
            .then((res) => res.json())
            .then((data) => {
                const url = data[0].tag_name;
                setReleaseVersion(url);
                setLoading(false);
            })
            .catch(() => {
                setReleaseVersion("v0.9");
                setLoading(false);
            });
    }, [setLoading]);

    return (
        <>
            <Container>
                <Title>
                    <GitPullRequest /> Stats and development
                </Title>

                <Title order={3}>Versions</Title>
                <Text>
                    In these two graphs, you can see the latest development and
                    released numbers. You will get to the corresponding GitHub
                    repository when you click on the number.
                </Text>
                <Group>
                    <Group
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                            document.location.href =
                                "https://github.com/mattjoke/tim3D/releases";
                        }}
                    >
                        <RingProgress
                            size={120}
                            thickness={12}
                            roundCaps
                            label={
                                <Text
                                    color="green"
                                    weight={700}
                                    align="center"
                                    size="xl"
                                >
                                    {releaseVersion ?? "v0.1.0"}
                                </Text>
                            }
                            sections={[{ value: 100, color: "green" }]}
                        />
                        <Text>The latest published release</Text>
                    </Group>
                    <Group
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                            document.location.href =
                                "https://github.com/mattjoke/tim3D";
                        }}
                    >
                        <RingProgress
                            size={120}
                            thickness={12}
                            label={
                                <Text
                                    color="teal"
                                    weight={700}
                                    align="center"
                                    size="xl"
                                >
                                    {`${releaseVersion.substring(
                                        0,
                                        releaseVersion.length - 1
                                    )}${
                                        Number(
                                            releaseVersion.substring(
                                                releaseVersion.length - 1
                                            )
                                        ) + 1
                                    }`}
                                </Text>
                            }
                            sections={[{ value: 100, color: "teal" }]}
                        />
                        <Text>Current dev version</Text>
                    </Group>
                </Group>

                <Title order={3}>Stats</Title>
                <Text>
                    In these two graphs, you can see the summary information
                    about the development cycle. Trello is used as primary task
                    management software.
                </Text>
                <Title order={4}>Trello</Title>
                <Group>
                    <Group>
                        <RingProgress
                            size={120}
                            thickness={12}
                            label={
                                <Text weight={700} align="center" size="xl">
                                    Trello
                                </Text>
                            }
                            sections={trelloData}
                        />
                        <Group>
                            <ColorSwatch color={"blue"} />
                            <Text>Finished tasks</Text>
                            <ColorSwatch color={"green"} />
                            <Text>Tasks in review</Text>
                            <ColorSwatch color={"orange"} />
                            <Text>Not started</Text>
                            <ColorSwatch color={"yellow"} />
                            <Text>Currently working on</Text>
                        </Group>
                    </Group>
                </Group>

                <Title order={4}>GitHub</Title>
                <Group>
                    <Text>
                        The GitHub repository can be accessed with this GitHub
                        repository can be accessed by this{" "}
                        <a href="https://github.com/mattjoke/TIM3D/tree/main">
                            link
                            <sup>
                                <ExternalLink size={12} />
                            </sup>
                        </a>
                        . Bellow, a few stats shows the current Star, Fork,
                        Commit and Pull-Request count.
                    </Text>
                    <Group>
                        <Star />
                        <Text>{githubData[0] ? githubData[0].value : 0}</Text>
                    </Group>
                    <Group>
                        <GitFork />
                        <Text>{githubData[1] ? githubData[1].value : 0}</Text>
                    </Group>
                    <Group>
                        <GitCommit />
                        <Text>{githubData[2] ? githubData[2].value : 0}</Text>
                    </Group>
                    <Group>
                        <GitPullRequest />
                        <Text>{githubData[3] ? githubData[3].value : 0}</Text>
                    </Group>
                </Group>

                <Title order={3}>Development</Title>
                <Text>
                    TIM 3D is an open-source library, and significant
                    development cycles work using Pull Requests. If you want to
                    learn more about how you can help improve this library,
                    check out the next section!
                </Text>

                <Title order={3}>Trello</Title>
                <Text mb={10}>
                    You can track the whole development process on the public{" "}
                    <a
                        href="https://trello.com/b/hXZva22f/threejs-library-to-do"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Trello
                        <ExternalLink size={16} />
                    </a>
                    .
                </Text>
                <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                    <Image
                        height={250}
                        src={img}
                        radius={3}
                        fit="contain"
                        alt="With default placeholder"
                        withPlaceholder
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                            (document.location.href =
                                "https://trello.com/b/hXZva22f/threejs-library-to-do")
                        }
                    />
                </MediaQuery>

                <MediaQuery largerThan="md" styles={{ display: "none" }}>
                    <Image
                        height={150}
                        src={img}
                        radius={3}
                        fit="contain"
                        alt="With default placeholder"
                        withPlaceholder
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                            (document.location.href =
                                "https://trello.com/b/hXZva22f/threejs-library-to-do")
                        }
                    />
                </MediaQuery>
            </Container>
            <BottomLinks
                prev={{ name: "Documentation", link: "/documentation" }}
                next={{
                    name: "Contribute",
                    link: "/contribute",
                }}
            />
        </>
    );
};

export default Stats;
