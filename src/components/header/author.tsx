import {
    Avatar,
    Box,
    Divider,
    Group,
    Text,
    UnstyledButton,
    UnstyledButtonProps,
} from "@mantine/core";

import { ChevronRight } from "tabler-icons-react";
import { forwardRef } from "react";

interface AuthorProps extends UnstyledButtonProps {}

const Author = forwardRef<HTMLButtonElement, AuthorProps>(
    ({ ...others }: AuthorProps, ref) => (
        <>
        <Divider />
            <UnstyledButton
                ref={ref}
                sx={(theme) => ({
                    display: "block",
                    width: "100%",
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.black,

                    "&:hover": {
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[6]
                                : theme.colors.gray[0],
                    },
                })}
                {...others}
            >
                <Group>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/36647232?s=400&u=736a0724336918a987a52bbe958e552b15d3661d"
                        radius="xl"
                    />
                    <Box sx={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            Matej Hakoš
                        </Text>
                        <Text color="dimmed" size="xs">
                            @mattjoke
                        </Text>
                    </Box>
                    <ChevronRight size={16} />
                </Group>
            </UnstyledButton>
        </>
    )
);

export default Author;
