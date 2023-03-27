import styled, { device } from "@theme/utils";
export const CaseStudiesSection = styled.section`
    .swiper-slide-active {
        .content-text {
            display: block;
        }
    }
    .case-studies-slider-button {
        position: relative;
        z-index: 3;
        ${device.large} {
            max-width: 1040px;
            margin: auto;
            padding: 0 20px;
        }
    }
    .case-studies-slider-button-prev,
    .case-studies-slider-button-next {
        background: linear-gradient(
            to right,
            #fc7318,
            #fe8415,
            #fe9515,
            #fea51a,
            #feb423
        );
        border: solid 2px transparent;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
            ),
            linear-gradient(101deg, #fc7318 0%, #feb423 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        -webkit-box-shadow: 2px 1000px 1px #f7faff inset;
        box-shadow: 2px 1000px 1px #f7faff inset;
        color: #fc7418;
        width: 55px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        border-radius: 50%;
        position: absolute;
        top: -150px;
        i {
            color: #fc7418;
        }
    }
    .case-studies-slider-button-next {
        right: 10px;
        left: auto;
    }
`;
export const CaseStudiesItemWrap = styled.div``;
