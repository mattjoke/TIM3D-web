import { Config, Factory, JSON } from "tim3d";
import { Dispatch, useEffect, useRef, useState } from "react";

import { Center } from "@mantine/core";

const DefaultManual = ({
    setLoading,
    customConfig,
    customJSON,
}: {
    setLoading: Dispatch<boolean>;
    customJSON?: JSON;
    customConfig?: Config;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [lastJSON, setLastJSON] = useState<JSON>(customJSON ?? {});

    useEffect(() => {
        if (loaded) return;
        setLoading(true);

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
        setLoading(false);
        setLoaded(true);
    }, [
        setLoading,
        setLoaded,
        loaded,
        customConfig,
        customJSON,
        lastJSON,
        setLastJSON,
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
