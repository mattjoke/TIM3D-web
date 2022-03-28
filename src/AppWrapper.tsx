import { AppShell, Header, Navbar } from "@mantine/core";

import AuthorMenu from "./components/header/authorMenu";
import Body from "./components/body/bodyWrapper";
import { MainLinks } from "./components/header/mainLinks";
import { NavigationHeader } from "./components/header/header";
import { useState } from "react";

const AppWrapper = () => {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            padding="md"
            fixed
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 300, lg: 400 }}
                >
                    <Navbar.Section grow mt="md">
                        <MainLinks setOpened={setOpened} />
                    </Navbar.Section>
                    <Navbar.Section>
                        <AuthorMenu />
                    </Navbar.Section>
                </Navbar>
            }
            header={
                <Header height={70} p="md">
                    <NavigationHeader opened={opened} setOpened={setOpened} />
                </Header>
            }
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[7]
                            : theme.colors.gray[0],
                },
            })}
        >
            <Body />
        </AppShell>
    );
};

export default AppWrapper;
