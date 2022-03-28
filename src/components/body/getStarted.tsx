import { Container, List, Text, Title } from "@mantine/core";
import { Dispatch, useEffect } from "react";

import BottomLinks from "../utils/bottomLinks";
import { Link } from "react-router-dom";
import { Prism } from "@mantine/prism";
import { Rocket } from "tabler-icons-react";

const htmlExample1 = `
<script src="path/to/tim3d.js"></script>

<script type="module">

    import * as TIM3D from "tim3d";
    
    const factory = new TIM3D.Factory();

</script>
`;

const htmlExample2 = `
<script src="path/to/tim3d.js"></script>

<script type="module" src="path/to/another/file.js"></script>
`;

const bashExample1 = `
npm install tim3d
`;

const withoutScroll = {
    overflow: "hidden",
};

const GetStarted = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, [setLoading]);
    
    return (
        <>
            <Container>
                <Container>
                    <Title>
                        <Rocket />
                        Get started
                    </Title>
                    <Text>
                        TIM3D is fully built into one bundle, which means you
                        need to only import one file to whole project. The whole
                        library depends on{" "}
                        <Link to="https://eloquentjavascript.net/10_modules.html#h_hF2FmOVxw7">
                            ES modules
                        </Link>
                    </Text>
                    <Text>
                        You can use TIM 3D by these currently suported methods:
                    </Text>
                    <List>
                        <List.Item>As a static file or file from CDN</List.Item>
                        <List.Item>As a npm package</List.Item>
                    </List>
                </Container>
                {/* <Divider /> */}
                <Container>
                    <Title order={2}>Static file or CDN</Title>
                    <Text>
                        You can use TIM3D without any bundler. You only need to
                        include a link to library. You can download latest build
                        from GitHub, or <Link to="/">Builds</Link> section.
                    </Text>
                    <Text>
                        To get started with this method, you only need a file
                        (preferably HTML) and use one of these methods.
                    </Text>
                    <Prism withLineNumbers sx={withoutScroll} language="markup">
                        {htmlExample1}
                    </Prism>
                    <Text>Or you can use external .js file.</Text>
                    <Prism withLineNumbers language="markup">
                        {htmlExample2}
                    </Prism>
                </Container>
                <Container>
                    <Title order={2}>NPM package</Title>
                    <Text>
                        Alternatively you can use TIM3D as a{" "}
                        <Link to="https://www.npmjs.com/">npm</Link> package.
                    </Text>
                    <Text>
                        To get started with this method, you need to have{" "}
                        <Link to="https://nodejs.org/en/">Node.js</Link> and{" "}
                        <Link to="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">
                            npm
                        </Link>{" "}
                        installed.
                    </Text>
                    <Text>
                        Then open up the terminal and install tim3d package from
                        npm registry.
                    </Text>
                    <Prism trim language="markup" sx={withoutScroll}>
                        {bashExample1}
                    </Prism>
                </Container>
            </Container>

            <BottomLinks
                prev={{ name: "Welcome page", link: "/" }}
                next={{ name: "Introduction", link: "/introduction" }}
            />
        </>
    );
};

export default GetStarted;
