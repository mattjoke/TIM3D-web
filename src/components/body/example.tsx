import { Dispatch, useEffect } from "react";
import { Text, Title } from "@mantine/core";

import BottomLinks from "../utils/bottomLinks";
import { Box } from "tabler-icons-react";

const Examples = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, [setLoading]);
    return (
        <>
            <Title>
                <Box/>{" "}
                Examples
            </Title>

            <Text>
                In this tutorial we will get through some more exotic functions
                and abilities of TIM 3D library.
            </Text>

            <BottomLinks
                prev={{ name: "Introduction", link: "/introduction" }}
                next={{ name: "Documentation", link: "/documentation" }}
            />
        </>
    );
};

export default Examples;
