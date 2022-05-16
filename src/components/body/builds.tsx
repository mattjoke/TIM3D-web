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
                <Forklift /> Latest builds
            </Title>
            <Text>
            In this section, you will find the latest library builds, CDN, and npm info.
            </Text>
            <Title order={3}>Static file</Title>
            <Text mb={-20}>
            You can download the latest version of the library and import it directly to your code. A great example of using the library is in the <NavLink to="/introduction">Introduction</NavLink>{" "}
            section. This is the latest version of the library built directly from the main branch. {" "}
                <strong>
                Use this with caution because it may contain bugs!
                </strong>
            </Text>
            <Title order={4}>Production version</Title>
            <Text mb={-15}>
            You can download the latest production bundle (~.75 MB) from
                this{" "}
                <a
                    href="https://raw.githubusercontent.com/mattjoke/TIM3D/gh-pages-build/docs/scripts/prod/tim3d.js"
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    link
                    <ExternalLink size={16} />
                </a>
                . The main difference between the production and non-production version is the library's size.
            </Text>
            <Title order={4}>Non-production version</Title>
            <Text mb={-15}>
            You can download the latest non-production bundle (~1.8 MB) from this{" "}
                <a
                    href="https://raw.githubusercontent.com/mattjoke/TIM3D/gh-pages-build/docs/scripts/tim3d.js"
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    link
                    <ExternalLink size={16} />
                </a>
                .
            </Text>
            <Title order={4}>NPM package</Title>
            <Text mb={40}>
            All the information about the npm.js package can be accessed via the npm.js registry. {" "}
                <a
                    href="https://npmjs.com/package/tim3d"
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    Link to npm.js
                    <ExternalLink size={16} />
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
