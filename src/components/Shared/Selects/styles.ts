import styled from 'styled-components';

export const StyledMainSelect = styled.select`
    padding: .8rem .8rem;
    border-radius: .4rem;
    border: 1px solid #ccc;
    font-size: 1rem;
    appearance: none;
    background-color: white;
    cursor: pointer;
    &:focus {
        border-color: #007bff;
        outline: none;
    }
    option {
        padding: .2rem .4rem;
    }
`;
