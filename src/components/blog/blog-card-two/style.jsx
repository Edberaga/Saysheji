import styled, { device } from "@theme/utils";
export const BlogGridCard = styled.div`
    background-color: #f7faff;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 30px;
    .blog-grid-thumb {
        display: block;
        border-radius: 15px;
        overflow: hidden;
        text-align: center;
        img {
            border-radius: 15px;
            transform: scale(1);
            transition: all 0.3s linear !important;
        }
    }
    &:hover {
        img {
            transform: scale(1.05) !important;
        }
    }
`;
export const BlogGridContent = styled.div`
    padding: 30px 30px;
    margin: 0 auto;
`;
export const MetaTag = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    font-size: 13px;
`;
export const MetaDate = styled.li``;
export const MetaComments = styled.li``;
export const Comments = styled.span``;
export const LinkShare = styled.span`
    margin-left: 15px;
`;
export const Title = styled.h6`
    font-weight: 700;
    a {
        color: #02126a;
    }
`;
export const DescriptionText = styled.p`
    font-size: 14px;
`;
