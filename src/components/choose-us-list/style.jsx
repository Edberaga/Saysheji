import styled, { device } from "@theme/utils";
export const ChooseList = styled.div`
    margin-bottom: 25px;
    display: flex;
    &:last-child {
        margin-bottom: 0;
    }
`;
export const Icon = styled.div`
    background-color: white;
    box-shadow: 0px 15px 30px 0px rgb(2 18 106 / 5%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    margin-right: 20px;
    ${device.large} {
        width: 85px;
        height: 85px;
        margin-right: 40px;
    }
`;
export const ChooseListContent = styled.div`
    flex: 1;
`;
export const Title = styled.h5``;
export const DesText = styled.p``;
