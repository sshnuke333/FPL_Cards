import React from 'react';
import {
    DisclaimerDiv,
    ExternalLink,
    Legal,
    StyledP,
} from './Disclaimer.styles';

export const Disclaimer = () => {
    return (
        <DisclaimerDiv>
            <Legal>Legal</Legal>
            <StyledP color="#f72135">
                This App is not a licensed Premier League product.
            </StyledP>
            <StyledP>
                This app uses data which is protected by copyright, database
                rights and other intellectual property and related rights owned
                by{' '}
                <ExternalLink
                    href="https://www.premierleague.com/"
                    target="_blank"
                >
                    Premier League
                </ExternalLink>{' '}
                and it's suppliers. Usage of these copyrighted works were not
                specifically authorized by{' '}
                <ExternalLink
                    href="https://www.premierleague.com/"
                    target="_blank"
                >
                    Premier League
                </ExternalLink>{' '}
                or it's suppliers but is being used fairly in good faith for
                non-commercial research study.
            </StyledP>
        </DisclaimerDiv>
    );
};
