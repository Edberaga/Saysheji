import Button from "../../components/shared/button";
import { StaticImage } from "gatsby-plugin-image";
import {
    ErrorCard,
    PageNotFound,
    PageNotFoundItem,
    Title,
    Description,
    Number,
} from "./style";
const ErrorContent = () => {
    return (
        <ErrorCard>
            <PageNotFound>
                <PageNotFoundItem>
                    <StaticImage
                        src="../../data/images/page-not-found/1.png"
                        alt="images_not_found"
                    />
                    <Number>4</Number>
                </PageNotFoundItem>
                <PageNotFoundItem>
                    <StaticImage
                        src="../../data/images/page-not-found/2.png"
                        alt="images_not_found"
                    />
                    <Number>0</Number>
                </PageNotFoundItem>
                <PageNotFoundItem>
                    <StaticImage
                        src="../../data/images/page-not-found/3.png"
                        alt="images_not_found"
                    />
                    <Number>4</Number>
                </PageNotFoundItem>
            </PageNotFound>
            <Title>
                Sorry! <small> This Page is Not Found.</small>
            </Title>
            <Description>
                Lorem Ipsum is simply dummy text of others the printing and
                typesetting industry printer took a galley of type and scrambled
                make
            </Description>
            <Button size="large" path="/" shape="rounded5">
                <i className="icofont-rounded-double-left"></i> Back To Home
            </Button>
        </ErrorCard>
    );
};

export default ErrorContent;
