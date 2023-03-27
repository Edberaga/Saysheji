import styled, { themeGet } from "@theme/utils";
export const CaseCard = styled.div``;
export const Thumb = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 25px;
    background-color: #f7faff;
    margin-bottom: 40px;
`;
export const CaseCardContent = styled.div`
    text-align: center;
    display: none;
`;
export const Title = styled.h4`
    margin-bottom: 15px;
    a {
        color: ${themeGet("colors.primary")};
    }
`;
export const Desination = styled.p`
    color: #fc7418;
`;
