import React from 'react'
import "./sidebar.css"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  BarChart,
  Report,
  PermIdentity,
  Storefront,
  WorkOutline,
  ChatBubbleOutline
}
from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
          <div className="sidebarWrapper">
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Activity</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem active">
                          <LineStyle className="sidebarIcon"/>
                        Dashboard
                      </li>
                       <li className="sidebarListItem">
                          <Timeline className="sidebarIcon" />
                          Projects
                      </li>
                       <li className="sidebarListItem">
                          <TrendingUp className="sidebarIcon" />
                          Homeworks
                      </li>
                  </ul>
        </div>
        <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Analysis</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem active">
                          <BarChart className="sidebarIcon"/>
                          Reports
                      </li>
                       <li className="sidebarListItem">
                          <Report className="sidebarIcon" />
                          Time-spent 
                      </li>
                       <li className="sidebarListItem">
                          <WorkOutline className="sidebarIcon" />
                          Classes
                      </li>
                  </ul>
        </div>
        <div className="sidebarMenu">
                  <h3 className="sidebarTitle">You</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem active">
                          <ChatBubbleOutline className="sidebarIcon"/>
                          Messaging
                      </li>
                       <li className="sidebarListItem">
                          <PermIdentity className="sidebarIcon" />
                          Friends
                      </li>
                       <li className="sidebarListItem">
                          <Storefront className="sidebarIcon" />
                          Discussions
                      </li>
                  </ul>
              </div>
      </div>
    </div>
  )
}

export default Sidebar
