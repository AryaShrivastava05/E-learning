import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import Chart from "../../components/chart/Chart"
import { userData } from "../../useddata";

const Home = () => {
  return (
      <div className="home">
          <Featuredinfo />  
          <Chart data={userData} title="Course Analytics" grid dataKey= "Av"/>
    </div>
  )
}

export default Home