import {
    Anchor,
    Button,
    Center,
    Container,
    Group,
    Text,
    Title,
} from "@mantine/core";
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
            <Center>
                <Container>
                    <Title
                        style={{
                            fontWeight: 900,
                            fontSize: '10em',
                            lineHeight: 1,
                        }}
                        align="center"
                    >
                        Oh-oh!
                    </Title>
                    <Group position="center" direction="column" mb={10}>
                        <Title order={3}>
                            Looks like you've found the end of the Internet!
                        </Title>
                        <Text>
                            You are trying to acces something, that is not here.
                        </Text>
                        <Text mb={10}>
                            Double check, if you have correct link, or something
                            is misspeled.
                        </Text>
                    </Group>
                    <Group position="center">
                        <Anchor onClick={() => navigate("/")}>
                            <Button>Back to Main Page</Button>
                        </Anchor>
                    </Group>
                </Container>
            </Center>
        </>
    );
};

export default NoMatch;
