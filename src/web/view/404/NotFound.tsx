import { Div, RedCard, StyledP } from './NotFound.styles';

const NotFound = (): JSX.Element => (
    <Div>
        <RedCard />
        <StyledP>
            404 - It's a red for you. Page requested does not exist.
        </StyledP>
    </Div>
);

export default NotFound;
