import { ExternalLink, Forklift } from "tabler-icons-react";
import { Text, Title } from "@mantine/core";

import BottomLinks from "../utils/bottomLinks";
import { Dispatch } from "react";
import { NavLink } from "react-router-dom";

const LatestBuilds = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    setLoading(false);
    return (
        <>
            <Title>
                <Forklift />{" "}
                Latest builds
            </Title>
            <Text>
                In this section you will find latest builds of the library, CDN
                and npm info.
            </Text>
            <Title order={3}>Static file</Title>
            <Text mb={-20}>
                You can download the latest version of the library and import it
                directly to your code. Great example, how to use the library is
                in the <NavLink to="/introduction">Introduction</NavLink>{" "}
                section. This is the latest version of the library, which is
                build directly from main branch.{" "}
                <strong>
                    Use this with caution, because it may contain bugs!
                </strong>
            </Text>
            <Title order={4}>Production version</Title>
            <Text mb={-15}>
                You can download the latest production bundle (~.75 MB) from
                this{" "}
                <a href="https://raw.githubusercontent.com/mattjoke/TIM3D/gh-pages-build/docs/scripts/prod/bundle.js">
                    link
                    <sup>
                        <ExternalLink size={14} />
                    </sup>
                </a>
                . The main difference between production and non-production
                version is obviously library's size.
            </Text>
            <Title order={4}>Non-production version</Title>
            <Text mb={-15}>
                You can download the latest non-production bundle (~1.8 MB) from
                this{" "}
                <a href="https://raw.githubusercontent.com/mattjoke/TIM3D/gh-pages-build/docs/scripts/bundle.js">
                    link
                    <sup>
                        <ExternalLink size={14} />
                    </sup>
                </a>
                .
            </Text>
            <Title order={4}>NPM package</Title>
            <Text mb={40}>
                All the information about npm.js package you can access via npm.js registy.{" "}
                <a href="https://raw.githubusercontent.com/mattjoke/TIM3D/gh-pages-build/docs/scripts/prod/bundle.js">
                    Link to npm.js
                    <sup>
                        <ExternalLink size={14} />
                    </sup>
                </a>
            </Text>
            <BottomLinks
                prev={{ name: "Contribute", link: "/contribute" }}
                next={{ name: "Welcome Page", link: "/" }}
            />
        </>
    );
};

export default LatestBuilds;
