import styled from "styled-components"

export const CheckBox = styled.input`
:checked + span {
    text-decoration: line-through
}
`