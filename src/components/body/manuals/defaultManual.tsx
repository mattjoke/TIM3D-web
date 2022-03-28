import { Dispatch, useEffect, useState } from "react";
import { Factory, JSON } from "tim3d";

import { Center } from "@mantine/core";

const DefaultManual = ({
    setLoading,
    customJSON,
}: {
    setLoading: Dispatch<boolean>;
    customJSON?: JSON;
}) => {
    const [factory, setFactory] = useState<Factory>();
    const [loadedJSON, setLoadedJSON] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fun = async () => {
            if (customJSON && !loadedJSON) {
                factory?.loadJSON(customJSON);
                setLoadedJSON(true);
            }
        };
        fun();
        setLoading(false);
    }, [setLoadedJSON, loadedJSON, customJSON, factory, setLoading]);

    useEffect(() => {
        setLoading(true);
        const div = document.getElementById("container");
        if (div == null) {
            console.log("Could not find container");
            setLoading(false);
            return;
        }

        const config = {
            container: div,
            colors: {
                backgroundColor: "#123456",
            },
        };

        setFactory(new Factory(config));
        setLoading(false);
    }, [setLoading, setLoadedJSON]);

    useEffect(() => {
        return () => {
            // factory?.destroy();
            setLoadedJSON(false);
            setFactory(undefined);
        };
    }, [setFactory]);

    return (
        <Center>
            <div
                id="container"
                style={{
                    width: "300px",
                    height: "300px",
                }}
            />
        </Center>
    );
};

export default DefaultManual;
