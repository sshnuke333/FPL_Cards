import React from 'react';
import {
    StyledDiv,
    BannerText,
    StyledLink,
    HideBanner,
    Close,
} from './Banner.styles';
import { expandTarget, hideDisplay } from '../helpers/display';

export const Banner = () => {
    return (
        <StyledDiv id="alert" aria-label="alert">
            <BannerText>
                This is not a licensed Premier League app please read the
                complete{' '}
                <StyledLink
                    to="disclaimer"
                    onClick={() => hideDisplay('alert')}
                >
                    disclaimer
                </StyledLink>{' '}
            </BannerText>
            <HideBanner
                aria-label="close"
                aria-hidden="false"
                onClick={(e) => expandTarget(e, 'alert', 'none', 'aria-hidden')}
            >
                <Close verticalAlign="0" />
            </HideBanner>
        </StyledDiv>
    );
};
