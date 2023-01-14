import Svg from './Background.styles';

interface IBackgroundProps {
    gradientStart: string;
    gradientEnd: string;
}

const Background = ({
    gradientStart,
    gradientEnd,
}: IBackgroundProps): JSX.Element => (
    <Svg width={'280'} height={'143'}>
        <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="213.39"
            y1="84.702"
            x2="-16.43"
            y2="46.492"
            gradientTransform="matrix(1 0 0 -1 0 144)"
        >
            <stop offset="0" stopColor={gradientStart} />
            <stop offset="1" stopColor={gradientEnd} />
        </linearGradient>
        <path
            d="M280 64.4V143h-60c-53.5-4.1-107.2-13.6-154.4-28.8l28-28.1C61.6 77.7 30.3 66.9 0 53.6V0h9.5c47 13.3 98.1 20.4 147.8 22.1L128 51.5c20.2 4.4 40.6 7.7 61.1 10 20.9 2.3 42 3.4 63.1 3.3 9.9 0 19.1-.1 27.8-.4z"
            fill="url(#gradient)"
        ></path>
    </Svg>
);

export default Background;
