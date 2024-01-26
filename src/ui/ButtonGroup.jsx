import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: ${(props) =>
    props.justify === "true" ? "space-between" : "flex-end"};
`;

export default ButtonGroup;
