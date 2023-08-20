import styled from 'styled-components';

export const StyledLabelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const StyledSubmitContainer = styled.div`
    margin: .5rem .5rem 0 .5rem;
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`;