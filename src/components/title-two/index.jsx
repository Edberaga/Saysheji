import React from "react";
import PropTypes from "prop-types";
import {
    TitleBox,
    SubTitle,
    Title,
    ShortDec,
    DividerBar,
    showSubTitle,
} from "./style";
const SectionTitleTwo = ({
    subTitle,
    title,
    shortDec,
    showShortDec,
    showSubTitle,
    dividerBg,
}) => {
    const variantdata = {
        showShortDec: showShortDec || false,
        dividerBg: dividerBg || "secondary",
        showSubTitle: showSubTitle || false,
    };
    return (
        <TitleBox>
            {variantdata.showSubTitle && <SubTitle>{subTitle}</SubTitle>}
            <Title>{title}</Title>
            {variantdata.showShortDec && <ShortDec>{shortDec}</ShortDec>}
            {variantdata.dividerBg && (
                <DividerBar dividerBg={variantdata.dividerBg}></DividerBar>
            )}
        </TitleBox>
    );
};
SectionTitleTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    shortDec: PropTypes.string,
    showSubTitle: PropTypes.bool,
    showShortDec: PropTypes.bool,
    dividerBg: PropTypes.oneOf(["primary", "secondary"]),
};
export default SectionTitleTwo;
