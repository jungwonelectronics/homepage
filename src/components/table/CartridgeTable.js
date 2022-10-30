import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { header, list } from '../../constant/cartridgeList';

const parseList = list => {
  const result = [];
  let modelCount = 0;
  list.map((item, index) => {
    const newItem = { no: index + 1, ...item };
    if (index === 0) {
      result[modelCount] = [];
      result[modelCount].push(newItem);
      return item;
    }
    const length = result[modelCount].length;
    const prevItem = result[modelCount][length - 1];
    if (prevItem.model === item.model) {
      result[modelCount].push(newItem);
    } else {
      modelCount += 1;
      result[modelCount] = [];
      result[modelCount].push(newItem);
    }
    return item;
  });
  return result;
}

export default function CartridgeTable() {
  const modelList = parseList(list);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Carriet developer product list">
        <TableHead>
          <TableRow>
            {header.map(item =>
              <TableCell key={item.id}>{item.label}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {modelList.map((model, modelIndex) => 
            <React.Fragment key={modelIndex}>
              {model.map((product, productIndex) =>
                <TableRow key={`table-row-${productIndex}`}>
                  <TableCell>
                    {product.no}
                  </TableCell>
                  {productIndex === 0 && (
                    <TableCell
                      rowSpan={model.length}
                    >
                      {product.model}
                    </TableCell>
                  )}
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.color}</TableCell>
                  <TableCell>{product.unit}</TableCell>
                </TableRow>
              )}
            </React.Fragment>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
