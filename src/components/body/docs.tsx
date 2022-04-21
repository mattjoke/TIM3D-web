import { Dispatch, useEffect } from "react";
import { ExternalLink, License } from "tabler-icons-react";
import { Image, MediaQuery, Text, Title } from "@mantine/core";

import BottomLinks from "../utils/bottomLinks";
import img from "../../static/docs.png";

const Docs = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [setLoading]);

    return (
        <>
            <Title>
                <License />{" "}
                Documentation
            </Title>
            <Text mb={10}>
                The whole documentation can be accessed by this{"    "}
                <a
                    href="https://mattjoke.github.io/TIM3D/docs/"
                    target="_blank"
                    rel="noreferrer"
                >
                    link
                    <sup>
                        <ExternalLink size={12} />
                    </sup>
                </a>
                .
            </Text>

            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                <Image
                    height={250}
                    src={img}
                    radius={3}
                    fit="contain"
                    alt="With default placeholder"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        document.location.href =
                            "https://mattjoke.github.io/TIM3D/docs/";
                    }}
                    withPlaceholder
                />
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Image
                    height={150}
                    src={img}
                    radius={3}
                    fit="contain"
                    alt="With default placeholder"
                    withPlaceholder
                    onClick={() => {
                        document.location.href =
                            "https://mattjoke.github.io/TIM3D/docs/";
                    }}
                    sx={{ cursor: "pointer" }}
                />
            </MediaQuery>

            <Text>
                The whole library is automatically generated from the library
                when pushed to GitHub. On the link above, you can always see the
                latest documentation.
            </Text>

            <Text>
                If you've found a bug in documentation or want to add something
                to the documentation, please check out the next page with all
                helpful and necessary development information.
            </Text>

            <BottomLinks
                prev={{ name: "Examples", link: "/examples" }}
                next={{
                    name: "Limitations",
                    link: "/limitations",
                }}
            />
        </>
    );
};

export default Docs;
