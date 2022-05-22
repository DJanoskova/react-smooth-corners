import React, { ChangeEvent, FunctionComponent } from 'react';

interface ConfigureTableProps {
  options: Array<{
    label: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    step?: number;
  }>
}

const ConfigureTable: FunctionComponent<ConfigureTableProps> = ({ options }) => {
  return (
    <table>
      <tbody>
      {options.map(({ label, value, ...inputProps }) => (
        <tr key={label}>
          <td>
            {label}
          </td>
          <td>
            <input type="range" value={value} {...inputProps} />
          </td>
          <td>
            {value}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default ConfigureTable;
