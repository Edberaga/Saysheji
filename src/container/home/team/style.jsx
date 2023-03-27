import styled, { device } from "@theme/utils";
import BeforeImge from "../../../data/images/team/shape-bottom.png";
import AfterImge from "../../../data/images/team/shape-top.png";
export const TeamSection = styled.section`
    padding: 100px 0px;
    ${device.medium} {
        padding: 190px 0px;
    }
    ${device.large} {
        padding: 190px 0px;
    }
    ${device.xlarge} {
        padding: 290px 0px;
    }
    position: relative;
    background-image: linear-gradient(
        to right,
        #03136b,
        #0d1e7f,
        #162993,
        #1c35a8,
        #2241be
    );
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
    .pattern {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
    }
    &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        content: "";
        background-image: url(${BeforeImge});
        background-position: left center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 11%;
    }
    &::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0;
        content: "";
        background-image: url(${AfterImge});
        background-position: left center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 11%;
    }
`;
