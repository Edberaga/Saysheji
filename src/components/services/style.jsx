import styled, { device, themeGet, keyframes } from "@theme/utils";

const rotation = keyframes`
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(359deg);
    }
`;
export const ServiceCard = styled.div`
    display: flex;
    position: relative;
    background: #f7faff;
    padding: 30px 25px 30px 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    ${device.xlarge} {
        padding: 40px 40px 40px 50px;
    }
    .line {
        position: absolute !important;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
`;
export const ServiceIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 22px 35px 0px rgb(2 18 106 / 8%);
    min-width: 100px;
    height: 100px;
    margin-right: 25px;
    border-radius: 100%;
    ${device.xlarge} {
        min-width: 115px;
        height: 115px;
        margin-right: 50px;
    }
`;
export const RotedAround = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    span {
        animation: ${rotation} 10s infinite linear;
        position: relative;
        display: block;
        height: 100%;
        &::before,
        &::after {
            position: absolute;
            width: 8px;
            height: 8px;
            content: "";
            border-radius: 50%;
            background: ${themeGet("colors.gradient")};
        }
        &::before {
            left: 15px;
            bottom: 10px;
        }
        &::after {
            right: 15px;
            top: 10px;
        }
    }
    &.actionOne {
        span {
            &::before,
            &::after {
                background: -webkit-linear-gradient(
                    -45deg,
                    #fd4485 0%,
                    #ffa38d 100%
                );
            }
        }
    }
    &.actionTwo {
        span {
            &::before,
            &::after {
                background: -webkit-linear-gradient(
                    -45deg,
                    #fd6300 0%,
                    #ffe121 100%
                );
            }
        }
    }
    &.actionThree {
        span {
            &::before,
            &::after {
                background: -webkit-linear-gradient(
                    -45deg,
                    #505eff 0%,
                    #03bdff 100%
                );
            }
        }
    }
    &.actionFour {
        span {
            &::before,
            &::after {
                background: -webkit-linear-gradient(
                    -45deg,
                    #b241ff 0%,
                    #fe86ff 100%
                );
            }
        }
    }
`;
export const ServiceContent = styled.div``;
export const Title = styled.h4``;
export const DisText = styled.p`
    margin-bottom: 20px;
    margin-top: 20px;
`;
