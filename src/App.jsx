/* eslint-disable no-unused-vars */
import ElementHighlights from "./components/BarChart2"
import Interaction from "./components/BarChartTooltip"
import BouncingText from "./components/BounceTest"
import CheckboxList from "./components/CheckboxList"
import CustomFilter from "./components/CustomerFilter"
import FilterGRIDDATA from "./components/Filter"
import FilterComponent from "./components/FilterComponent"
import FilterDataGrid2 from "./components/FilterDataGrid2"
import FilterRowDataGrid from "./components/FilterRowDataGrid"
import HeaderFilteringDataGridPro from "./components/GridTest"
import BasicLineChart from "./components/LineChart"
import RowDataGrid from "./components/RowDataGrid"
import 'animate.css'
import TagPickerComponent from "./components/TagPickerComponent"



function App() {

  return (
    <div className="m-3">
      <div className="text-3xl ">MUItest</div>
      {/* <BouncingText /> */}
      {/* <HeaderFilteringDataGridPro /> */}
      <div className="mt-8">
        {/* <FilterRowDataGrid /> */}
        {/* <FilterDataGrid2 /> */}
        {/* <CustomFilter /> */}
        {/* <RowDataGrid /> */}
        {/* <FilterGRIDDATA /> */}
        {/* <BasicLineChart /> */}
        {/* <Interaction /> */}
        {/* <ElementHighlights /> */}

        <CheckboxList />

        <h1 className="animate__animated animate__bounce">An animated element</h1>

        <div className="m-32" />

        <FilterComponent applyFilters={(filter) => {console.log(filter)}} />


      </div>
    </div>
  )
}

export default App
