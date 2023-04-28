import { Link } from "gatsby"
import "./style.css"

export const CareerCard = ({ title, img, category, link, content}) => {
    return (
      <div className="career-card">
          <img src={img} alt={title} className='career-card-icon'/>
          <h1 className="career-card-heading">{title}</h1>
          <p className="career-tag">{category}</p>
          <p className={`career-content ${styles.paragraph} mb-2 font-poppins text-sm text-black`}>{content}</p>
        
          <button className='career-apply-btn'>
            <Link to={link}>Apply Now </Link>
          </button>
      </div>
    )
  }