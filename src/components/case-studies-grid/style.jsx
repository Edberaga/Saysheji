import styled, { themeGet } from "@theme/utils";
export const CaseCard = styled.div`
    margin-bottom: 40px;
`;
export const Thumb = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 25px;
    background-color: #f7faff;
    margin-bottom: 25px;
`;
export const CaseCardContent = styled.div`
    text-align: left;
`;
export const Title = styled.h4`
    margin-bottom: 5px;
    a {
        color: ${themeGet("colors.primary")};
    }
`;
export const Desination = styled.p`
    color: #fc7418;
`;
