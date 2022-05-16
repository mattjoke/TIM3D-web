import { Center, useMantineColorScheme } from "@mantine/core";
import { Config, Factory, JSON } from "tim3d";
import { Dispatch, useEffect, useRef, useState } from "react";

const DefaultManual = ({
    setLoading,
    customConfig,
    customJSON,
}: {
    setLoading: Dispatch<boolean>;
    customJSON?: JSON;
    customConfig?: Config;
}) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const ref = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [lastJSON, setLastJSON] = useState<JSON>(customJSON ?? {});

    useEffect(() => {
        if (loaded ) return;
        setLoading(true);        

        const config = customConfig ?? {
            colors: {
                backgroundColor: colorScheme === "dark" ? "#fcfafa" : "#123456",
            },
        };
        config.container = ref.current!;

        const factory = new Factory(config);
        const json = lastJSON ?? {};

        factory?.loadJSON(json);
        setLoading(false);
        setLoaded(true);
        setLastJSON(json);
    }, [
        setLoading,
        setLoaded,
        loaded,
        customConfig,
        customJSON,
        lastJSON,
        setLastJSON,
        colorScheme
    ]);

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

export default DefaultManual;
