import styled, { themeGet, device } from "@theme/utils";
export const ProfileCardBox = styled.div`
    background-color: #f7faff;
    padding: 30px;
    margin-bottom: 60px;
    border-radius: 15px;
    text-align: center;
`;
export const ProfileThumb = styled.div`
    margin-bottom: 35px;
`;
export const ProfileContent = styled.div``;
export const Title = styled.h6`
    margin-bottom: 10px;
    a {
        color: ${themeGet("colors.primary")};
    }
`;
export const Designation = styled.p`
    font-weight: 700;
    color: ${themeGet("colors.secondary")};
    text-transform: uppercase;
    font-size: 13px;
    margin-bottom: 35px;
`;
