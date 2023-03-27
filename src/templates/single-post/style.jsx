import styled, { themeGet, device } from "@theme/utils";

export const BlogDetailsArea = styled.section`
    padding: 60px 0;
    ${device.medium} {
        padding: 80px 0;
    }
    ${device.large} {
        padding: 100px 0;
    }
    ${device.xlarge} {
        padding: 120px 0;
    }
`;

export const PostDetailsContentWrap = styled.div`
    ${device.large} {
        padding-left: 2.1875rem;
    }
`;
export const Title = styled.h3``;
export const PostDetailsBody = styled.div``;

export const Thumb = styled.div`
    margin-bottom: 30px;
    img {
        border-radius: 15px;
    }
    ${device.large} {
        margin-bottom: 40px;
    }
`;

export const SocialShareCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f7faff;
    padding: 30px;
    margin-bottom: 45px;
    border-radius: 15px;
    justify-content: space-between;
    ul {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: -15px;
        margin-left: -15px;
    }
    .social-share-item {
        margin-bottom: 15px;
        margin-left: 15px;
        text-align: center;
        padding: 20px;
        background-color: white;
        border-radius: 12px;
        i {
            display: block;
            color: #02126a;
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
    .social-share-wrap {
        display: inline-block;
        color: #02126a;
        font-weight: 700;
        line-height: 1;
        margin-right: 10px;
        font-size: 15px;
    }
`;
export const SingleBlogContent = styled.div`
    margin-top: 20px;
`;
export const Aside = styled.aside``;

export const MetaBox = styled.div`
    .meta-title {
        font-weight: bold;
        margin-right: 10px;
        color: #02126a;
        font-size: 14px;
    }
`;
export const Content = styled.div`
    blockquote {
        p {
            font-style: italic;
            background: #f7faff;
            padding: 20px;
        }
    }
`;
export const CommentArea = styled.div`
    margin-top: 30px;
`;
export const CommentTitle = styled.h4``;
