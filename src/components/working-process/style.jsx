import styled, { device, keyframes } from "@theme/utils";

export const WorkingProcessList = styled.div``;
export const Icon = styled.div`
    margin: 0 auto 5px;
    position: relative;
    border: 5px solid #132580;
    border-radius: 50%;
    background-color: #02126a;
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${device.large} {
        width: 140px;
        height: 140px;
    }
    ${device.xlarge} {
        width: 170px;
        height: 170px;
    }
`;
export const Title = styled.h3`
    color: #fff;
    margin-top: 30px;
`;
