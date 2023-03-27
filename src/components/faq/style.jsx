import styled, { device, themeGet } from "@theme/utils";
export const FaqListItem = styled.div`
    .accordion-button {
        background: transparent;
        padding: 19px 40px;
        text-align: left;
        font-size: 18px;
        font-family: ${themeGet("fonts.heading")};
        font-weight: 700;
        &:focus {
            z-index: 3;
            border-color: #86b7fe;
            outline: 0;
            box-shadow: none;
            border: none;
        }
        &::after {
            flex-shrink: 0;
            margin-left: auto;
            content: "+";
            font-weight: 700;
            font-size: 16px;
            background-image: none;
            box-shadow: 0px 5px 8px 0px rgb(39 66 161 / 3%);
            width: 28px;
            height: 28px;
            z-index: 1;
            border-radius: 50%;
            background: white;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:not(.collapsed)::after {
            font-weight: 700;
            font-size: 16px;
            content: "-";
            transform: rotate(0deg);
            color: #feb423;
        }
        &:not(.collapsed) span {
            background: linear-gradient(to right, #fc7318 0%, #feb423 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        &:not(.collapsed) {
            background-color: transparent;
            box-shadow: none;
        }
    }
    .accordion-body {
        padding: 19px 40px;
        padding-top: 0px;
    }
`;
