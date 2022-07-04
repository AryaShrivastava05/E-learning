import "./widgetsmall.css"
import { Visibility } from "@mui/icons-material"


const Widgetsmall = () => {
  return (
    <div className="Widgetsmall">
      <span className="WidgetsmallTitle">New Join Members</span>
      <ul className="WidgetsmallList">
        <li className="WidgetSmallListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="WidgetsmallImg" />
          <div className="WidgetsmallUser">
            <span className="WidgetsmallUsername">Ayushi</span>
            <span className="WidgetsmallUserTitle">Software Engineer</span>
          </div>
          <button className="WidgetsmallButton">
            <Visibility />
            Active
          </button>
        </li>
         <li className="WidgetSmallListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="WidgetsmallImg" />
          <div className="WidgetsmallUser">
            <span className="WidgetsmallUsername">Dev Aryan</span>
            <span className="WidgetsmallUserTitle">Software Engineer</span>
          </div>
          <button className="WidgetsmallButton">
            <Visibility className="WidgetsmallIcon"/>
            Active
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Widgetsmall