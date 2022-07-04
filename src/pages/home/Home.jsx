import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import Chart from "../../components/chart/Chart"
import { userData } from "../../useddata";
import Widgetsmall from "../../components/widgetsmall/Widgetsmall";
import Widgetlarge from "../../components/widgetlarge/Widgetlarge";

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} title="Course Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
              <Widgetsmall/>
              <Widgetlarge/>
          </div>
    </div>
  );
}

export default Home