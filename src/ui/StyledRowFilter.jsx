import styled, { css } from "styled-components";

const StyledRowFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    align-items: start;

    flex-direction: column;
    gap: 1.6rem;
  }
`;

export default StyledRowFilter;
