import { Anchor, Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import {
    Box,
    BrandGithub,
    BrandTabler,
    Forklift,
    GitPullRequest,
    License,
    Rocket
} from "tabler-icons-react";
import React, { Dispatch, SetStateAction } from "react";

import { Link } from "react-router-dom";

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[0]
                        : theme.black,

                "&:hover": {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                },
            })}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const data = [
    { icon: <Rocket size={16} />, color: "blue", label: "Get Started" },
    { icon: <BrandTabler size={16} />, color: "cyan", label: "Introduction" },
    { icon: <Box size={16} />, color: "teal", label: "Examples" },
    { icon: <License size={16} />, color: "green", label: "Documentation" },
    {
        icon: <GitPullRequest size={16} />,
        color: "lime",
        label: "Stats and development process",
    },
    { icon: <BrandGithub size={16} />, color: "orange", label: "Contribute" },
    { icon: <Forklift size={16} />, color: "red", label: "Latest builds" },
];

export function MainLinks({
    setOpened,
}: {
    setOpened: Dispatch<SetStateAction<boolean>>;
}) {
    const links = data.map((link) => {
        const linkUrl = `/${link.label.replaceAll(" ", "-").toLowerCase()}`;
        return (
            <Anchor component={Link} to={linkUrl} key={link.label} onClick={()=>setOpened(false)} underline={false}>
                <MainLink {...link} key={link.label} />
            </Anchor>
        );
    });
    return <div> {links} </div>;
}
