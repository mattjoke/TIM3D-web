import { NavigateFunction } from "react-router-dom";
import { TablerIconProps } from "@tabler/icons";
import { ThreeDCubeSphere } from "tabler-icons-react";

const buildAction = (
    input: {
        title: string;
        icon: TablerIconProps;
        url?: string;
    },
    navigate: NavigateFunction
) => {
    const { title, icon, url } = input;
    const linkUrl = `/${(url ?? title).replaceAll(" ", "-").toLowerCase()}`;
    return {
        title: title,
        onTrigger: () => {
            navigate(linkUrl);
        },
        icon: icon,
    };
};

interface Icon_Data {
    icon: JSX.Element;
    color: string;
    label: string;
}

const actions = (navigate: NavigateFunction, data: Icon_Data[]) => {
    let builder: { title: string; icon: JSX.Element; url?: string }[] = [
        {
            title: "Welcome Page",
            icon: <ThreeDCubeSphere />,
            url: "/",
        },
    ];
    data.forEach((val: Icon_Data) => {
        builder.push({
            title: val.label,
            icon: val.icon,
        });
    });

    var test = builder.map((item) => buildAction(item, navigate));
    return test;
};

export default actions;
