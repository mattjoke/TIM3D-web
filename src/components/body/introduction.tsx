import {
    BrandHtml5,
    BrandJavascript,
    BrandTabler,
    FileCode,
    ThreeDCubeSphere,
    Upload,
} from "tabler-icons-react";
import { Button, Code, Group, List, Stepper, Text, Title } from "@mantine/core";
import { Dispatch, useEffect, useState } from "react";

import BottomLinks from "../utils/bottomLinks";
import DefaultManual from "./manuals/defaultManual";
import { Link } from "react-router-dom";
import { Prism } from "@mantine/prism";
import { useForceUpdate } from "@mantine/hooks";

const htmlDoc = `
...
<body>
    <h1>Awesome Manual!</h1>
    <div id="container"></div>
...
`;

const htmlDocWithJS = `
...
<body>
    <h1>Awesome Manual!</h1>
    <div id="container"></div>
    <script src="path/to/tim3d.js" type="module"></script> 
    <script src="script.js"></script> 
...
`;

const cssDoc = `
#container {
    width: 300px;
    height: 300px;
}
`;

const jsDoc = `
    import * as TIM3D from "tim3d";

const div = document.getElementById("container");

const config = {
    container: div,
    colors:{
      backgroundColor: "#123456"  
    } 
};

const manual = new TIM3D.Factory(config);
`;
const jsonDoc = `
const uploaded = {
    files: [
        {
          id: 'cube_id',
          file: 'cube.obj',
          name: 'Loaded Cube!',
          pose: { 
              position: [0, 0, 0], 
              orientation: [1, 0, 0, 0] 
            }
        }
      ],
}

// Load the uploaded obejct with file definitions
manual.loadJSON(uploaded);
`;
const jsonDocExtended = `
const uplaodedWithManual = {
    files: [], // File array as defined earlier
    steps: [
        {
            name: "First Step",
            positions: [
                {
                    id: 'cube_id',
                    pose: {
                        position: [10, 0, 0],
                    }
                }
            ]
        },
        {
            name: "Second Step",
            positions: [
                {
                    id: 'cube_id',
                    pose: {
                        position: [0, 0, 0],
                    }
                }
            ]
        }
    ]
}
`;

const Introduction = ({ setLoading }: { setLoading: Dispatch<boolean> }) => {
    const MAX = 4;
    const [active, setActive] = useState(0);
    const forceUpdate = useForceUpdate();
    const nextStep = () => {
        setActive((current) => (current < MAX ? current + 1 : current));
        forceUpdate();
    };
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    useEffect(() => {
        setLoading(false);
    }, [setLoading]);

    return (
        <>
            <Title>
                <BrandTabler /> Introduction
            </Title>
            {active === 0 ? (
                <>
                    <Text mb={10}>
                        Welcome! In this extensive tutorial we will get through
                        basics and create our own TIM 3D manual!{" "}
                    </Text>
                </>
            ) : (
                <></>
            )}

            <Stepper active={active} onStepClick={setActive} breakpoint="md">
                <Stepper.Step
                    label="First Step"
                    description="Prepare HTML document"
                    icon={<BrandHtml5 />}
                >
                    <Title order={4}>Prepare HTML document</Title>
                    <Text>
                        TIM 3D needs a HTML Element to inject itself into and
                        begin drawing process. First we need to prepare our
                        HTML. Our HTML should have a <Code>div</Code> element in
                        it.
                    </Text>

                    <Prism withLineNumbers language="markup">
                        {htmlDoc}
                    </Prism>

                    <Text>
                        It is recommended that <Code>div</Code>, that will be
                        injected, should have defined width and/or height. This
                        is because TIM 3D fills-in the element.
                    </Text>

                    <Prism withLineNumbers language="css">
                        {cssDoc}
                    </Prism>
                </Stepper.Step>
                <Stepper.Step
                    icon={<BrandJavascript />}
                    label="Second step"
                    description="Prepare JS file"
                >
                    <Title order={4}>Prepare JavaScript file</Title>
                    <Text>
                        First create a file. We will call it
                        <Code>script.js</Code>. Then we need to include our
                        library into HTML page and our <Code>script.js</Code>
                        file as well. Our HTML file should look like this:
                    </Text>

                    <Prism language="markup">{htmlDocWithJS}</Prism>

                    <Text>
                        Dont't forget the <b>type</b> in script tag when
                        importing the library.
                    </Text>
                    <Text>
                        Good job! Now we can begin creating our own manual!
                    </Text>
                </Stepper.Step>
                <Stepper.Step
                    icon={<ThreeDCubeSphere />}
                    label="Third step"
                    description="Initialize TIM 3D"
                >
                    <Title order={4}>Initialize TIM 3D</Title>
                    <Text>
                        With imported library and imported
                        <Code>script.js</Code> file we can finally initialize
                        our first manual!
                    </Text>

                    <Text>
                        First we load the library and create selector for our
                        created div. Then we need to create <Code>Config</Code>{" "}
                        object which will contain all important setup data.
                    </Text>
                    <Prism withLineNumbers language="javascript">
                        {jsDoc}
                    </Prism>

                    <Text mb={10}>
                        If you've correctly done this, you should be able to see
                        "empty" manual like this. Go ahead and try to move the
                        screen with your mouse!
                    </Text>

                    <DefaultManual setLoading={setLoading} />
                </Stepper.Step>

                <Stepper.Step
                    icon={<Upload />}
                    label="Fourth Step"
                    description="Load files"
                >
                    <Title order={4}>Load files</Title>
                    <Text>
                        Our manual is working correctly, but now we just need to
                        add files. The library supports .stl and .obj files.
                        Thankfully there is one "box" available to download.{" "}
                        <a href="../../static/cube.obj">Download the cube</a>
                    </Text>

                    <Text>
                        We need to tell TIM 3D where to look during loading
                        models. We need to create an object with these paths.
                        There are more fields, that are needed for correct
                        behaviour. Lastly we need to initialize TIM 3D with this
                        config object.
                    </Text>
                    <Prism withLineNumbers language="javascript">
                        {jsonDoc}
                    </Prism>

                    <Text>
                        A little explanation about fields in <Code>Config</Code>{" "}
                        object.
                    </Text>
                    <List>
                        <List.Item>
                            <b>files</b> - mandatory field with object
                            definitions
                        </List.Item>
                        <List.Item>
                            <b>id</b> - Unique identifier of object in manual.
                            Must be unique!
                        </List.Item>
                        <List.Item>
                            <b>file</b> - A file path from where TIM 3D should
                            load the file
                        </List.Item>
                        <List.Item>
                            <b>name</b> - Name of the object, does not need to
                            be unique
                        </List.Item>
                        <List.Item>
                            <b>pose</b> - Specifies default position of loaded
                            obejct. Orientation is in Quaternions.
                        </List.Item>
                    </List>

                    <Text>
                        More information is accessible from{" "}
                        <Link to="/documentation">Documentation</Link>.
                    </Text>

                    <Text mb={10}>
                        If you've correctly done this, you should be able to see
                        manual like this. Go ahead and try to move it with your
                        mouse!
                    </Text>

                    <DefaultManual
                        setLoading={setLoading}
                        customJSON={{
                            files: [
                                {
                                    id: "cube_id",
                                    file: "https://gist.githubusercontent.com/mattjoke/b736d1b2edf54354780a990a87e23c0e/raw/f416082ee68c8e39a0ddb9dd6ea6f8093bbaad52/cube.obj",
                                    name: "Loaded Cube!",
                                    pose: {
                                        position: [0, 0, 0],
                                        orientation: [1, 0, 0, 0],
                                    },
                                },
                            ],
                        }}
                    />
                </Stepper.Step>

                <Stepper.Step
                    icon={<FileCode />}
                    label="Final Step"
                    description="Create a Manual"
                >
                    <Title order={4}>Create a Manual</Title>
                    <Text>
                        Now we have all the necessary information set up. Now we
                        just need to define a <Code>step</Code> array, which
                        contains positions of objects in time.
                    </Text>

                    <Text>
                        Add to the <Code>uploaded</Code> object new field called{" "}
                        <Code>steps</Code>. Steps array is an array of objects,
                        that should look like this.
                    </Text>
                    <Prism withLineNumbers language="javascript">
                        {jsonDocExtended}
                    </Prism>

                    <Text>
                        An explanation about fields in <Code>Config</Code>
                        object.
                    </Text>
                    <List>
                        <List.Item>
                            <b>steps</b> - Mandatory field with steps
                            definitions
                        </List.Item>
                        <List.Item>
                            <b>name</b> - Name of the step, which is currently
                            drawn.
                        </List.Item>
                        <List.Item>
                            <b>positions</b> - An array of objects, which should
                            move in given turn. These objects have fields
                            defined bellow:
                        </List.Item>
                        <List.Item>
                            <b>id</b> - Id of the object as defined in{" "}
                            <Code>files</Code> array.
                        </List.Item>
                        <List.Item>
                            <b>pose</b> - Specifies position and orientation of
                            given object on specified step. Orientation is in
                            Quaternions.
                        </List.Item>
                    </List>

                    <Text mb={10}>
                        The full definiton and all possible fields can be
                        accessed in{"    "}
                        <a href="https://mattjoke.github.io/TIM3D/docs/interfaces/JSON.html">
                            Documentation
                        </a>
                        .
                    </Text>

                    <Text mb={30}>
                        If you've correctly done all the steps correctly, you
                        should be able to see manual something like this:
                    </Text>

                    <DefaultManual
                        setLoading={setLoading}
                        customJSON={{
                            files: [
                                {
                                    id: "cube_id_2",
                                    file: "https://gist.githubusercontent.com/mattjoke/b736d1b2edf54354780a990a87e23c0e/raw/f416082ee68c8e39a0ddb9dd6ea6f8093bbaad52/cube.obj",
                                    name: "Cube loaded",
                                    pose: {
                                        position: [40, 0, 0],
                                        orientation: [1, 0, 0, 0],
                                    },
                                },
                            ],
                            steps: [
                                {
                                    name: "First Step",
                                    positions: [
                                        {
                                            id: "cube_id_2",
                                            pose: {
                                                position: [10, 0, 0],
                                            },
                                        },
                                    ],
                                },
                                {
                                    name: "Second Step",
                                    positions: [
                                        {
                                            id: "cube_id_2",
                                            pose: {
                                                position: [0, 0, 0],
                                            },
                                        },
                                    ],
                                },
                            ],
                        }}
                    />
                </Stepper.Step>
            </Stepper>

            <Group position="center" mb="xl" mt="xl">
                <Button
                    variant="default"
                    onClick={prevStep}
                    disabled={active === 0}
                >
                    Back
                </Button>
                <Button onClick={nextStep} disabled={active === MAX}>
                    Next step
                </Button>
            </Group>

            <BottomLinks
                prev={{ name: "Get Started", link: "/get-started" }}
                next={{
                    name: "Examples",
                    link: "/examples",
                }}
            />
        </>
    );
};

export default Introduction;
