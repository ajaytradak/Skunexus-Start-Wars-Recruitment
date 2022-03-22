import PropTypes from 'prop-types';

import './GridHome.css';
import { Button } from "reactstrap";
function GridHome({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
            {!!actions.length &&
              <td className='gridActions'>
                {actions.filter(a => (a.hide && !a.hide(row)) || !a.hide).map(({ label, action }) =>
                  <Button key={label} onClick={() => {
                    action(row)
                  }}
                  >
                    {label}
                  </Button>)
                }
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

GridHome.propTypes = {
  data: PropTypes.object
}

export default GridHome;
