import { Anchor, Button, Text, Title } from "@mantine/core";
import { Dispatch, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const NoMatch = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, [setLoading]);
    return (
        <>
            <Title>Oh oh!</Title>
            <Title order={3}>Looks like you've found the end of the Internet!</Title>
            <Text>You are trying to acces something, that is not here.</Text>
            <Text mb={10}>Double check, if you have correct link, or something is misspeled.</Text>
            <Anchor onClick={()=> navigate("/")} >
                <Button>Back to Main Page</Button>
            </Anchor>
        </>
    );
};

export default NoMatch;
