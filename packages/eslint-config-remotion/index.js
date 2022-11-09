require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: ['plugin:@remotion/recommended'],
    plugins: ['@remotion'],
    rules: {
        '10x/auto-import': [
            'error',
            {
                imports: {
                    useCurrentFrame: "import { useCurrentFrame } from 'remotion';",
                    useVideoConfig: "import { useVideoConfig } from 'remotion';",
                    spring: "import { spring } from 'remotion';",
                    measureSpring: "import { measureSpring } from 'remotion';",
                    random: "import { random } from 'remotion';",
                    interpolate: "import { interpolate } from 'remotion';",
                    interpolateColors: "import { interpolateColors } from 'remotion';",
                    Easing: "import { Easing } from 'remotion';",
                    getInputProps: "import { getInputProps } from 'remotion';",
                    continueRender: "import { continueRender } from 'remotion';",
                    delayRender: "import { delayRender } from 'remotion';",
                    AbsoluteFill: "import { AbsoluteFill } from 'remotion';",
                    Sequence: "import { Sequence } from 'remotion';",
                    Composition: "import { Composition } from 'remotion';",
                    Audio: "import { Audio } from 'remotion';",
                    Video: "import { Video } from 'remotion';",
                    OffthreadVideo: "import { OffthreadVideo } from 'remotion';",
                    Series: "import { Series } from 'remotion';",
                    Still: "import { Still } from 'remotion';",
                    Freeze: "import { Freeze } from 'remotion';",
                    Loop: "import { Loop } from 'remotion';",
                    staticFile: "import { staticFile } from 'remotion';",
                    Config: "import { Config } from 'remotion';",
                    Img: "import { Img } from 'remotion';",
                    IFrame: "import { IFrame } from 'remotion';",
                    Folder: "import { Folder } from 'remotion';",
                },
            },
        ],
    },
};
