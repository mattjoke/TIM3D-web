import { Container, List, Text, Title } from "@mantine/core";
import { Dispatch, useEffect } from "react";
import { ExternalLink, Rocket } from "tabler-icons-react";

import BottomLinks from "../utils/bottomLinks";
import { Link } from "react-router-dom";
import { Prism } from "@mantine/prism";

const htmlExample1 = `
<script src="path/to/tim3d.js" type="module"></script>

<script type="module">
  
    const factory = new Factory();

</script>
`;

const htmlExample2 = `
<script src="path/to/tim3d.js"></script>

<script type="module" src="path/to/another/file.js"></script>
`;

const bashExample1 = `
npm install tim3d
`;
const npmusage = `
import { Factory } from "tim3d";

const manual = new Factory();

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
                        <Rocket /> Get started
                    </Title>
                    <Text>
                        TIM3D is fully built into one bundle, which means you
                        need only import one file to the whole project. The
                        whole library depends on{" "}
                        <a
                            href="https://eloquentjavascript.net/10_modules.html#h_hF2FmOVxw7/"
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            ES modules <ExternalLink size={16} />
                        </a>
                        .
                    </Text>
                    <Text>
                        You can use TIM 3D by these currently supported methods:
                    </Text>
                    <List>
                        <List.Item>As a static file or file from CDN</List.Item>
                        <List.Item>As an npm package</List.Item>
                    </List>
                </Container>
                {/* <Divider /> */}
                <Container>
                    <Title order={2}>Static file or CDN</Title>
                    <Text>
                        You can use TIM3D without any bundler. You only need to
                        include a link to the library. You can download the
                        latest build from GitHub or the{" "}
                        <Link to="/latest-builds">Latest Builds</Link> section.
                    </Text>
                    <Text>
                        You only need a file (preferably HTML) to get started
                        with this method and use one of these methods.
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
                        Alternatively, you can use TIM3D as an{" "}
                        <a
                            href="https://www.npmjs.com/package/tim3d"
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            npm
                            <ExternalLink size={16} />
                        </a>{" "}
                        package.
                    </Text>
                    <Text>
                        It would help if you had{" "}
                        <a
                            href="https://nodejs.org/en/"
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            Node.js
                            <ExternalLink size={16} />
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            npm
                            <ExternalLink size={16} />
                        </a>{" "}
                        installed to get started with this method.
                    </Text>
                    <Text>
                        Then open up the terminal and install the tim3d package
                        from the npm registry.
                    </Text>
                    <Prism trim language="bash" sx={withoutScroll}>
                        {bashExample1}
                    </Prism>
                    <Text>
                        Then you can use TIM 3D as any other npm package. For
                        example:
                    </Text>
                    <Prism trim language="javascript" sx={withoutScroll}>
                        {npmusage}
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
