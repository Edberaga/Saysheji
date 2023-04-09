import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";
import PageBreadcrumb from "../../components/pagebreadcrumb";
import ServicsArea from "../../container/services";
import { careerData } from '../../data/career/career'
import { normalizedData } from "@utils/functions";
import './style.css'

const CareerCard = ({ title, img, category, link, content}) => {
    return (
      <div className="career-card flex justify-start flex-col items-center sm:px-16 sm:py-16 px-4 py-8
      md:max-w-[350px] ss:max-w-[40%] max-w-[600px] career-card">
          <img src={img} alt={title} className='career-card-icon w-[100px] '/>
          <h1 className="career-card-heading font-poppins font-semibold  text-[18px] leading-[32px] text-black my-2">{title}</h1>
          <p className="career-tag">{category}</p>
          <p className={`${styles.paragraph} mb-2 font-poppins text-sm text-black`}>{content}</p>
        
          <button className='mt-auto font-semibold career-apply-btn text-[15px] pt-4'>
            <Link to={link}>Apply Now  </Link>
          </button>
      </div>
    )
  }

const CareerPages = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Career Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Careers"
            />
            <section className='career-section'>
                <header className="career-header">
                    <h1 className='font-semibold md:text-[55px] text-[43.5px] leading-[32px] my-8'>Career In Saysheji</h1>
                    <p>We are always looking for passionate people to join us to take over the digital world. <br/>
                    Check out the available positions below and send your resume to <span className='boss-mail'>kaseyfong@saysheji.com</span>
                    </p>
                </header>
                <section className="career-container flex flex-wrap justify-center feedback-container relative z-[1] mb-20">
                {careerData.map((item, index) => {
                return (
                    <CareerCard key={index} {...item} />
                    )}
                )}
                </section>
            </section>
            
        </Layout>
    );
};

CareerPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allServices: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query servicesPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        page(title: { eq: "servicesPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
                section_title {
                    ...SectionTitle
                }
            }
        }
        allServices(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...Services
            }
        }
    }
`;

export default CareerPages;