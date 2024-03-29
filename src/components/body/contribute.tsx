import { Code, Container, List, Text, Title } from "@mantine/core";

import BottomLinks from "../utils/bottomLinks";
import { BrandGithub } from "tabler-icons-react";
import { Dispatch } from "react";

const Contribute = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    setLoading(false);
    return (
        <>
            <Container>
                <Title>
                    <BrandGithub /> Contribute
                </Title>

                <Text mb={10}>
                    There are many ways you can contribute to this library, and
                    we are thankful!
                </Text>

                <Title order={4}>Ways you can help</Title>

                <Text>
                    This library is a living ecosystem, and without your help,
                    it cannot improve. You can help the development process in
                    various ways:
                </Text>

                <List>
                    <List.Item>
                        <b>Improve code</b> - Update, delete or change a code
                    </List.Item>
                    <List.Item>
                        <b>Update documentation</b> - Add, improve and fine-tune
                        the library's autogenerated documentation
                    </List.Item>
                    <List.Item>
                        <b>Improve this site</b> - Improvements not only in the
                        functional but also in the User Experience
                    </List.Item>
                </List>

                <Text>
                    Under each of these categories, there are many ways how you
                    can help the library.
                </Text>

                <Title order={4}>Git branches</Title>

                <Text>
                    There are two GitHub repositories. The first one, called
                    TIM3D, contains the library's base code and main
                    functionality. The library performs an automatic build of
                    itself and documentation. However, the web page must be
                    built manually and then updated.
                </Text>

                <Text mt={10}>
                    Most impornant GitHub branches in <Code>TIM3D</Code>
                    repository:
                </Text>
                <List>
                    <List.Item>
                        <Code>main</Code> -Contains the latest published and
                        built release. When pushed to this branch, GitHub will
                        build the latest documentation and latest bundle for
                        production. These files are then published to{" "}
                        <Code>gh-pages-build</Code> branch
                    </List.Item>
                    <List.Item>
                        <Code>development</Code> - Contains actual development
                        code. After the review phase, the code is merged with
                        the
                        <Code>master</Code> branch
                    </List.Item>
                    <List.Item>
                        <Code>gh-pages-build</Code> - Contains files accessible
                        by GitHub pages and that are visible to the Internet
                    </List.Item>
                </List>

                <Text>
                    Most important GitHub branches in <Code>TIM3D-web</Code>
                    repository:
                </Text>

                <List>
                    <List.Item>
                        <Code>main</Code> -Contains the latest published version
                        of the Webpage
                    </List.Item>
                    <List.Item>
                        <Code>development</Code> - Contains actual development
                        and the current state of the library
                    </List.Item>
                </List>

                <Title order={4}>Development process</Title>

                <Text>
                    When you want to help develop the library, you create a
                    Pull-request as you would in any other FOSS library. TIM3D
                    is no different. The following list is recommended approach.
                </Text>

                <List type="ordered">
                    <List.Item>
                        Fork the repository to your own GitHub
                    </List.Item>
                    <List.Item>
                        Clone or download your forked repository to your
                        computer
                    </List.Item>
                    <List.Item>
                        Install all the dependencies with the
                        <Code>npm install</Code> command
                    </List.Item>
                    <List.Item>
                        To start the development server run{" "}
                        <Code>npm run dev</Code> command
                    </List.Item>
                    <List.Item>Make some changes to the codebase</List.Item>
                    <List.Item>
                        Run the <Code>npm run prettier:check</Code> and{" "}
                        <Code>npm run lint:check</Code> to be sure that the code
                        is according to the Prettier config file
                    </List.Item>
                    <List.Item>Push your changes to the GitHub</List.Item>
                    <List.Item>Submit a Pull-request</List.Item>
                </List>

                <Title order={4}>NPM scripts</Title>
                <Text>
                    When developing as described in the previous step, you can
                    use this npm script to help you with development.
                </Text>
                <List>
                    <List.Item>
                        <Code>build</Code> - Builds a non-production version of
                        the library
                    </List.Item>
                    <List.Item>
                        <Code>build:prod</Code> - Builds a production version of
                        the library
                    </List.Item>
                    <List.Item>
                        <Code>dev</Code> - Starts a Webpack live sever,
                        automatically builds the library and exposes it to
                        localhost
                    </List.Item>
                    <List.Item>
                        <Code>lint:check</Code> - Performs an ESLint check
                    </List.Item>
                    <List.Item>
                        <Code>lint:fix</Code> - Tries to fix solvable ESLint
                        errors
                    </List.Item>
                    <List.Item>
                        <Code>prettier:check</Code> - Scans all files and checks
                        if they correspond to the Prettier config
                    </List.Item>
                    <List.Item>
                        <Code>prettier:write</Code> - Scans all files and
                        updates them with the correct Prettier config
                    </List.Item>
                    <List.Item>
                        <Code>docs:gen</Code> - Generates documentation from the
                        whole library
                    </List.Item>
                </List>
            </Container>
            <BottomLinks
                prev={{
                    name: "Stats and development process",
                    link: "/stats-and-development-process",
                }}
                next={{ name: "Latest builds", link: "/latest-builds" }}
            />
        </>
    );
};

export default Contribute;
