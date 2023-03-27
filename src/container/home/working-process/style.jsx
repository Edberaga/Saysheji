import styled, { device, keyframes } from "@theme/utils";
import WorkingProcessSectionBg from "../../../data/images/working/bg.png";
import circleImage from "../../../data/images/working/circle.png";

const rotation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
`;

export const WorkingProcessSection = styled.section`
    background-image: url(${WorkingProcessSectionBg});
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 130px 0px 115px;
    .working-process {
        .working-process-list {
            margin-bottom: 30px;
            position: relative;
            text-align: center;
            &:nth-of-type(odd) {
                margin-top: 0px;
                ${device.large} {
                    margin-top: 100px;
                }
                ${device.xlarge} {
                    margin-top: 125px;
                }
            }
            &:nth-of-type(even) {
                .arrow-shape {
                    display: none !important;
                    ${device.large} {
                        display: block !important;
                        top: 100px;
                    }
                    ${device.xlarge} {
                        top: 125px;
                    }
                }
            }
            &:last-child {
                .arrow-shape {
                    display: none !important;
                }
            }
            &:hover {
                .icon {
                    &::before {
                        position: absolute;
                        left: -8px;
                        top: -8px;
                        content: "";
                        background-image: url(${circleImage});
                        width: 110%;
                        height: 110%;
                        background-position: center center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        z-index: 9;
                        opacity: 0;
                        visibility: hidden;
                    }
                    &::before {
                        animation: ${rotation} 10s infinite linear;
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }
    .arrow-shape {
        position: absolute !important;
        top: 60px;
        right: -30px;
        display: none !important;
        ${device.small} {
            display: block !important;
        }
        ${device.large} {
            top: -10px;
        }
        ${device.xlarge} {
            top: -10px;
        }
    }
`;
