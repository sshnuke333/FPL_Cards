import React from 'react';
import {
    StyledDiv,
    BannerText,
    StyledLink,
    HideBanner,
    Close,
} from './Banner.styles';
import { toggleDisplay } from '../helpers/toggleDisplay';

export const Banner = () => {
    return (
        <StyledDiv id="alert" aria-label="alert">
            <BannerText>
                This is not a licensed Premier League app please read the
                complete <StyledLink to="disclaimer">disclaimer</StyledLink>{' '}
            </BannerText>
            <HideBanner
                aria-hidden="false"
                onClick={(e) =>
                    toggleDisplay(e, 'alert', 'none', 'aria-hidden')
                }
            >
                <Close verticalAlign="0" />
            </HideBanner>
        </StyledDiv>
    );
};
