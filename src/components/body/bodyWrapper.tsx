import {
    Affix,
    Button,
    Container,
    LoadingOverlay,
    Transition,
    TypographyStylesProvider,
} from "@mantine/core";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScrollLock, useWindowScroll } from "@mantine/hooks";

import { ArrowUp } from "tabler-icons-react";
import Contribute from "./contribute";
import Docs from "./docs";
import Examples from "./example";
import GetStarted from "./getStarted";
import Introduction from "./introduction";
import LatestBuilds from "./builds";
import MainPage from "./intro";
import NoMatch from "./noMatch";
import Stats from "./stats";

const BodyWrapper = () => {
    const location = useLocation();
    const [scroll, scrollTo] = useWindowScroll();

    const [_, setScrollLocked] = useScrollLock();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        scrollTo({ y: 0 });
    }, [location, scrollTo]);

    useEffect(() => {
        setScrollLocked(!loading);
        const timer = setTimeout(() => {
            setScrollLocked(loading);
        }, 1000);
        return () => clearTimeout(timer);
    }, [loading, setScrollLocked]);

    return (
        <TypographyStylesProvider>
            <Container>
                <LoadingOverlay visible={loading} />
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage setLoading={setLoading} />}
                    />
                    <Route
                        path="get-started"
                        element={<GetStarted setLoading={setLoading} />}
                    />
                    <Route
                        path="introduction"
                        element={<Introduction setLoading={setLoading} />}
                    />
                    <Route
                        path="examples"
                        element={<Examples setLoading={setLoading} />}
                    />
                    <Route
                        path="documentation"
                        element={<Docs setLoading={setLoading} />}
                    />
                    <Route
                        path="stats-and-development-process"
                        element={<Stats setLoading={setLoading} />}
                    />
                    <Route
                        path="contribute"
                        element={<Contribute setLoading={setLoading} />}
                    />
                    <Route
                        path="latest-builds"
                        element={<LatestBuilds setLoading={setLoading} />}
                    />
                    <Route
                        path="*"
                        element={<NoMatch setLoading={setLoading} />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace={true} />}
                    />
                </Routes>
                <Affix position={{ bottom: 100, right: 10 }}>
                    <Transition transition="slide-up" mounted={scroll.y > 0}>
                        {(transitionStyles) => (
                            <Button
                                px="xs"
                                style={transitionStyles}
                                onClick={() => scrollTo({ y: 0 })}
                            >
                                <ArrowUp />
                            </Button>
                        )}
                    </Transition>
                </Affix>
            </Container>
        </TypographyStylesProvider>
    );
};

export default BodyWrapper;
