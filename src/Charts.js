import React from 'react'
import { Chart } from 'react-charts'
 
function Charts() {
  const data = React.useMemo(
    () => [
      {
        specialLabel: 'Projects 2019',
        data: [[1, 3], [3, 5], [6, 6], [9, 9.5], [12, 12]]

        // data: [['Jan', 10], ['March', 2], ['June', 4], ['Sep', 2], ['Dec', 7]]
      },
      {
        label: 'Projects 2020',
        data: [[1, 5], [3, 7], [6, 9], [9, 10], [12, 15]]
        // data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  const getLabel = React.useCallback(series => series.specialLabel, [])

 

    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    return(
      <>
      <h4> Projects in 2019 & 2020 </h4>
        <div className="row">
            <div className="col-lg-7">
              <div style={{height: '300px'}}>
                <Chart data={data} axes={axes} getLabel={getLabel} />
              </div>
          </div>
        </div>
    </>
    );
  
}

export default Charts;