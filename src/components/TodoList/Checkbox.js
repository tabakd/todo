import styled from 'styled-components';

const Checkbox = styled.input`
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    margin: 0;
    padding: 0;
    &:after {
        font-size: 20px;
        content: "\\2714";
        border: 1px solid #CFD8DC;
        border-radius: 3px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display:block;
        color: white;
    }
    &:checked:after {
        color: #CFD8DC;
    }
`

Checkbox.defaultProps = {
    type: 'checkbox'
}

export default Checkbox;