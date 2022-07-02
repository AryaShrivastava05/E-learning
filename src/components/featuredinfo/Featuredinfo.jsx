import "./Featuredinfo.css"
//import { ArrowDownward } from "@material-ui/icons"

const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
              <span className="FeaturedTitle">Total Hours Stayed</span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">45hr38min</span>
                  <span className="featuredMoneyRate">
                  </span>
              </div>
            <span className="featuredSub"></span>
          </div>
          <div className="featuredItem">
              <span className="FeaturedTitle">Total Tutors</span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">45</span>
                  <span className="featuredMoneyRate">
                  </span>
              </div>
            <span className="featuredSub"></span>
          </div>
          <div className="featuredItem">
              <span className="FeaturedTitle">Total Work Done</span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">+38</span>
                  <span className="featuredMoneyRate">
                  </span>
              </div>
            <span className="featuredSub"></span>
      </div>
     </div>
  )
}

export default Featuredinfo
