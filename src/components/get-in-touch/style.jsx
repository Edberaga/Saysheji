import styled, { themeGet, device } from "@theme/utils";
export const ContactMediaList = styled.div`
    padding: 25px 40px;
    background-color: white;
    padding: 25px 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    &:last-type-of: {
        margin-bottom: 0px;
    }

    .icon {
        width: 54px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        border: 1px solid #eef0f8;
        border-radius: 50%;
        background-color: #f7faff;
        ${device.medium} {
            width: 74px;
            height: 74px;
            margin-right: 30px;
        }
        span {
            font-size: 30px;
            background: ${themeGet("colors.gradient")};
            background-clip: border-box;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .content {
        flex: 1 0 0;
        .text {
            line-height: 1;
            display: block;
            text-transform: capitalize;
            font-weight: 700;
            font-size: 15px;
            background: ${themeGet("colors.gradient")};
            background-clip: border-box;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .number {
            line-height: 1;
            font-weight: 700;
            color: #02126a;
            font-size: 16px;
            ${device.medium} {
                font-size: 20px;
            }
        }
    }
`;
