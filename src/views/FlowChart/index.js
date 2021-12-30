import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import GGEditor, { Mind ,Flow} from 'gg-editor';
const data = {
    label: 'Central Topic',
    children: [
      {
        label: 'Main Topic 1',
      },
      {
        label: 'Main Topic 2',
      },
      {
        label: 'Main Topic 3',
      },
    ],
  };
  const data1 = {
    nodes: [
      {
        id: '0',
        label: 'Node',
        x: 55,
        y: 55,
      },
      {
        id: '1',
        label: 'Node',
        x: 55,
        y: 255,
      },
    ],
    edges: [
      {
        label: 'Label',
        source: '0',
        target: '1',
      },
    ]
}
function FlowChart(props) {

  return (
    <div>
       {/* <GGEditor>
  <Mind style={{ width: '100%', height: '100%' }} data={data} />
</GGEditor> */}
        <GGEditor>
        <Flow style={{ width: '100%', height: 500 }} data={data1} />
        </GGEditor>
    </div>
  );
}

export default connect(state=>state)(FlowChart)

