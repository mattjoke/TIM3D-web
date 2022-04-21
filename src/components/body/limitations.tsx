import { Container, List, Text, Title } from "@mantine/core";

import { AlertTriangle } from "tabler-icons-react";
import BottomLinks from "../utils/bottomLinks";
import { Dispatch } from "react";
import { Prism } from "@mantine/prism";

const reactComponent = `
const DefaultManual = ({customConfig, customJSON }: { customJSON?: JSON; customConfig?: Config;}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [lastJSON, setLastJSON] = useState<JSON>(customJSON ?? {});

    useEffect(() => {
        if (loaded) return;

        const config = customConfig ?? {
            colors: {
                backgroundColor: "#123456",
            },
        };
        config.container = ref.current!;

        const json = lastJSON ?? {};

        const factory = new Factory(config);
        factory?.loadJSON(json);
        setLastJSON(json);
        setLoaded(true);
    }, [setLoaded, loaded, customConfig, customJSON, lastJSON, setLastJSON]);

    return (
        <Center>
            <div
                id="container"
                style={{
                    width: "300px",
                    height: "300px",
                }}
                ref={ref}
            />
        </Center>
    );
};
`;

const Limitations = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    setLoading(false);

    return (
        <>
            <Container>
                <Container>
                    <Title>
                        <AlertTriangle /> Limitations
                    </Title>
                    <Text>
                        TIM3D is still in the devleopment phase. That means,
                        that with evvery major release there are new
                        possibilites for the usage. However, in this time, there
                        are known limitaitons, which may impact the usability of
                        the TIM 3D library. All of these limitaitons are subject
                        to change with the dev cycle.
                    </Text>
                    <Title order={4}>Hot-swapping the config</Title>
                    TIM 3D does not support "hot-swap" of the config.
                    <Title order={4}>Supported input types</Title>
                    <Text>
                        TIM 3D currently supports these file formats natively:
                        <List>
                            <List.Item>.stl format</List.Item>
                            <List.Item>.obj format</List.Item>
                        </List>
                    </Text>
                    <Title order={4}>React and dynamic unmounting</Title>
                    <Text>
                        TIM 3D currently does not support dynamically build
                        content. That means, React and another JavaScript
                        frameworks may not work as intuitevly with the library.
                        Nevertheless, in the code below you can see example
                        component, that is used on this webpage for displaying
                        the manual.
                    </Text>
                    <Prism language="javascript">{reactComponent}</Prism>
                    What is known not to work with React (even with workaround):
                    <List>
                        <List.Item>
                            Seemingly rendered content (e.g. Mantine's Stepper
                            component) does not update the manual
                        </List.Item>
                    </List>
                </Container>
                <BottomLinks
                    prev={{ name: "Documentation", link: "/documentation" }}
                    next={{
                        name: "Stats and development process",
                        link: "/stats-and-development-process",
                    }}
                />
            </Container>
        </>
    );
};

export default Limitations;
