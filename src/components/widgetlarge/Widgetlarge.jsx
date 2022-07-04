import "./widgetlarge.css"

const Widgetlarge = () => {

  const Button = ({ type }) => {
  return <button className={"WidgetLargeButton " + type }>{type}</button>
  }


  return (
    <div className="Widgetlarge">
      <h3 className="WidgetlargeTitle">Trending Course</h3>
      <table className="WidgetlargeTable">
        <tr className="WidgetlargeTr">
          <th className="WidgetlargeTh">Customer</th>
          <th className="WidgetlargeTh">Date</th>
          <th className="WidgetlargeTh">Amount</th>
          <th className="WidgetlargeTh">Status</th>
        </tr>
        <tr className="WidgetlargeTr">
          <td className="WidgetLargeuser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLargeImg" />
            <span className="widgetLarge">Data Structure</span>
          </td>
          <td className="WidgetLargeDate"> 15 July 2022</td>
          <td className="WidgetLargeAmount">₹2000</td>
          <td className="WidgetLargeStatus"><Button type="Active"/></td>
        </tr>
        <tr className="WidgetlargeTr">
          <td className="WidgetLargeuser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLargeImg" />
            <span className="WidgetLarge">Python</span>
          </td>
          <td className="WidgetLargeDate"> 15 July 2022</td>
          <td className="WidgetLargeAmount">₹2000</td>
          <td className="WidgetLargeStatus"><Button type="Active"/></td>
        </tr>
        <tr className="WidgetlargeTr">
          <td className="WidgetLargeuser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLargeImg" />
            <span className="WidgetLarge">JavaScript</span>
          </td>
          <td className="WidgetLargeDate"> 15 July 2022</td>
          <td className="WidgetLargeAmount">₹2000</td>
          <td className="WidgetLargeStatus"><Button type="Active"/></td>
        </tr>
        <tr className="WidgetlargeTr">
          <td className="WidgetLargeuser">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLargeImg" />
            <span className="WidgetLarge">C++</span>
          </td>
          <td className="WidgetLargeDate"> 15 July 2022</td>
          <td className="WidgetLargeAmount">₹2000</td>
          <td className="WidgetLargeStatus"><Button type="Active"/></td>
        </tr>
      </table>
    </div>
  )
}

export default Widgetlarge
