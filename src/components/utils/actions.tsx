import {
    Box,
    BrandGithub,
    BrandTabler,
    Forklift,
    GitPullRequest,
    License,
    Rocket,
    ThreeDCubeSphere
} from "tabler-icons-react";

import { NavigateFunction } from "react-router-dom";

const buildAction = (input: {
    title: string;
    description: string;
    icon: JSX.Element;
    url?: string;
}, navigate:NavigateFunction) => {
    const { title, description, icon, url } = input;
    const linkUrl = `/${(url ?? title).replaceAll(" ", "-").toLowerCase()}`;
    return {
        title: title,
        description: description,
        onTrigger: () => {
            navigate(linkUrl);
        },
        icon: icon,
    };
};

const actions = (navigate: NavigateFunction) => {
    const builder = [
        {
            title: "Welcome Page",
            description: "Come back to the main page!",
            icon: <ThreeDCubeSphere />,
            url: "/"
        },
        {
            title: "Get Started",
            description: "",
            icon: <Rocket />,
        },
        {
            title: "Introduction",
            description: "",
            icon: <BrandTabler />,
        },
        {
            title: "Examples",
            description: "",
            icon: <Box />,
        },
        {
            title: "Stats and development process",
            description: "",
            icon: <GitPullRequest />,
        },
        {
            title: "Documentation",
            description: "",
            icon: <License />,
        },
        {
            title: "Contribute",
            description: "",
            icon: <BrandGithub />,
        },
        {
            title: "Latest builds",
            description: "",
            icon: <Forklift />,
        },
    ];

    var test = builder.map((item) => buildAction(item, navigate));
    return test;
};

export default actions;
