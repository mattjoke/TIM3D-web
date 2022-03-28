import {
    BrandFacebook,
    BrandGithub,
    BrandInstagram,
    BrandTwitter
} from "tabler-icons-react";
import { Group, MediaQuery, Menu } from "@mantine/core";

import Author from "./author";

const MenuComponent = (props: any) => {
    return (
        <Menu
            withArrow
            position={props.position}
            placement="end"
            gutter={15}
            control={<Author />}
        >
            <Menu.Label>Matej Hakoš</Menu.Label>
            <Menu.Item
                icon={<BrandGithub size={14} />}
                component="a"
                href="https://github.com/mattjoke"
                target="_blank"
            >
                GitHub
            </Menu.Item>
            <Menu.Item
                icon={<BrandTwitter size={14} />}
                component="a"
                href="https://twitter.com/matt_joke1"
                target="_blank"
            >
                Twitter
            </Menu.Item>
            <Menu.Item
                icon={<BrandFacebook size={14} />}
                component="a"
                href="https://www.facebook.com/hakos.matej/"
                target="_blank"
            >
                Facebook
            </Menu.Item>
            <Menu.Item
                icon={<BrandInstagram size={14} />}
                component="a"
                href="https://www.instagram.com/hakosmatej/"
            >
                Instagram
            </Menu.Item>
        </Menu>
    );
};

const AuthorMenu = () => {
    return (
        <Group position="center">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <MenuComponent position="top" />
            </MediaQuery>
        </Group>
    );
};

export default AuthorMenu;
