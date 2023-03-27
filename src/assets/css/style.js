import React from "react";
import { Global, css, device, useTheme } from "@theme/utils";
import slelectimg from "@data/images/icons/arrow-down-white.png";

export const GlobalCSS = () => {
    const theme = useTheme();
    return (
        <Global
            styles={css`
                @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Ruda:wght@400;500;600;700;800;900&display=swap");

                *,
                *::before,
                *::after {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                html {
                    -webkit-text-size-adjust: 100%;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    scroll-behavior: smooth;
                    // Default
                    height: 100%;
                    font-size: 70.5%; // 1rem = 6px

                    // Medium Device >=768
                    ${device.medium} {
                        font-size: 73.75%; // 1rem = 7px
                    }

                    // Large Device >=992
                    ${device.large} {
                        font-size: 50%; // 1rem = 8px
                    }

                    // Extra Large Device >=1200
                    ${device.xlarge} {
                        font-size: 56.25%; // 1rem = 9px
                    }

                    // Extra Large Device >=1367
                    ${device.xxlarge} {
                        font-size: 82.5%; // 1rem = 10px
                    }
                }
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                nav,
                section,
                summary {
                    display: block;
                }
                audio,
                canvas,
                video {
                    display: inline-block;
                }
                audio:not([controls]) {
                    display: none;
                    height: 0;
                }
                [hidden] {
                    display: none;
                }
                html,
                button,
                input,
                select,
                textarea {
                    font-family: "Source Sans Pro", Helvetica, sans-serif;
                }
                a:focus {
                    outline: thin dotted;
                }
                a:active,
                a:hover {
                    outline: 0;
                }
                b,
                strong {
                    font-weight: bold;
                }
                blockquote,
                q {
                    -webkit-hyphens: none;
                    -moz-hyphens: none;
                    -ms-hyphens: none;
                    hyphens: none;
                    quotes: none;
                }
                small {
                    font-size: smaller;
                }
                sub,
                sup {
                    font-size: 75%;
                    line-height: 0;
                    position: relative;
                    vertical-align: baseline;
                }
                sup {
                    top: -0.5em;
                }
                sub {
                    bottom: -0.25em;
                }
                li > ul,
                li > ol {
                    margin: 0;
                }
                img {
                    -ms-interpolation-mode: bicubic;
                    border: 0;
                    vertical-align: middle;
                }
                svg:not(:root) {
                    overflow: hidden;
                }
                figure {
                    margin: 0;
                }
                form {
                    margin: 0;
                }
                button,
                input,
                select,
                textarea {
                    font-size: 100%;
                    margin: 0;
                    max-width: 100%;
                    vertical-align: baseline;
                }

                button,
                input {
                    line-height: normal;
                }

                button,
                html input[type="button"],
                input[type="reset"],
                input[type="submit"] {
                    -webkit-appearance: button;
                    -moz-appearance: button;
                    appearance: button;
                    cursor: pointer;
                }

                button[disabled],
                input[disabled] {
                    cursor: default;
                }

                input[type="checkbox"],
                input[type="radio"] {
                    padding: 0;
                }

                input[type="search"] {
                    -webkit-appearance: textfield;
                    -moz-appearance: textfield;
                    appearance: textfield;
                    appearance: textfield;
                    padding-right: 2px;
                    width: 100%;
                }

                input[type="search"]::-webkit-search-decoration {
                    -webkit-appearance: none;
                    appearance: none;
                }

                button::-moz-focus-inner,
                input::-moz-focus-inner {
                    border: 0;
                    padding: 0;
                }
                textarea {
                    overflow: auto;
                    vertical-align: top;
                }
                * {
                    box-sizing: border-box;
                }
                img {
                    max-width: 100%;
                }
                html {
                    overflow: hidden;
                    overflow-y: auto;
                }
                body {
                    overflow: hidden;
                    margin: 0;
                    padding: 0;
                    line-height: ${theme.lineHeights.body};
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    font-family: ${theme.fonts.body};
                    font-weight: ${theme.fontWeights.body};
                    color: ${theme.colors.text};
                    font-size: ${theme.fontSize.body};
                    background: ${theme.colors.background};
                }
                a {
                    transition: ${theme.transition};
                    color: ${theme.colors.text};
                    text-decoration: none;
                    &:hover {
                        text-decoration: none;
                        color: ${theme.colors.hover};
                    }
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                .h1,
                .h2,
                .h3,
                .h4,
                .h5,
                .h6 {
                    font-family: ${theme.fonts.heading};
                    line-height: ${theme.lineHeights.heading};
                    color: ${theme.colors.heading};
                    font-weight: ${theme.fontWeights.heading};
                    margin: 0;
                    margin-bottom: 8px;
                }
                h1,
                .h1 {
                    font-size: clamp(32px, 4.1vw, 75px);
                }
                h2,
                .h2 {
                    font-size: clamp(26px, 4.1vw, 55px);
                }
                h3,
                .h3 {
                    font-size: clamp(22px, 2.1vw, 30px);
                }
                h4,
                .h4 {
                    font-size: clamp(20px, 2.1vw, 25px);
                }
                h5,
                .h5 {
                    font-size: clamp(18px, 2.1vw, 22px);
                }
                h6,
                .h6 {
                    font-size: clamp(16px, 3.1vw, 20px);
                }
                p {
                    margin: 0 0 15px;
                    font-family: ${theme.fonts.body};
                    color: ${theme.colors.text};
                    &:last-child {
                        margin-bottom: 0;
                    }
                    &:only-child {
                        margin-bottom: 0;
                    }
                }
                input,
                button,
                select,
                textarea {
                    background: transparent;
                    border: 1px solid ${theme.colors.boder};
                    transition: ${theme.transition};
                    color: ${theme.colors.text};
                    &:focus,
                    &:active {
                        outline: none;
                        border-color: ${theme.colors.primary};
                    }
                }
                input,
                select,
                textarea {
                    width: 100%;
                }
                input,
                select {
                    height: 40px;
                    padding: 0 15px;
                }
                .form-select {
                    padding: 0px 20px 0 10px;
                    font-size: 16px;
                    max-width: 100%;
                    width: 100%;
                    outline: none;
                    border: none;
                    color: #333;
                    border-radius: 5px;
                    // background: transparent url(${slelectimg}) no-repeat center
                    //     right 5px;
                    background-color: #ddd;
                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }
                }
                .wrapper {
                    position: relative;
                }
                .container {
                    max-width: 100%;
                    padding-right: var(--bs-gutter-x, 2.5rem);
                    padding-left: var(--bs-gutter-x, 2.5rem);
                    ${device.medium} {
                        padding-right: var(--bs-gutter-x, 0.9375rem);
                        padding-left: var(--bs-gutter-x, 0.9375rem);
                        // max-width: 720px;
                        &.container-max {
                            max-width: 100%;
                        }
                        .container-max-lg {
                            max-width: 100%;
                        }
                    }
                    ${device.large} {
                        max-width: 960px;
                        &.container-max {
                            max-width: 1370px;
                        }
                        &.container-max-lg {
                            max-width: 1500px;
                        }
                    }
                    ${device.xlarge} {
                        max-width: 1200px;
                    }
                    @media (min-width: 1600px) {
                        &.container-max {
                            max-width: 1370px;
                        }
                    }
                }

                .link-overlay {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    text-indent: -99999px;
                }
            `}
        />
    );
};
