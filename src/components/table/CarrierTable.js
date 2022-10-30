import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { header, list } from '../../constant/carrierList';

export default function CarrierTable() {
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
          {list.map(carrier => 
            <React.Fragment key={carrier.brand}>
              {carrier.productList.map((product, productIndex) =>
                <TableRow key={`table-row-${productIndex}`}>
                  {productIndex === 0 && (
                    <TableCell
                      rowSpan={carrier.productList.length}
                    >
                      {carrier.brand}
                    </TableCell>
                  )}
                  <TableCell>{product.machine}</TableCell>
                  <TableCell>{product.jweCode}</TableCell>
                  <TableCell>{product.model}</TableCell>
                  <TableCell sx={{ wordBreak: 'break-word' }}>
                    {product.useInList.map(useIn => 
                      <div key={useIn}>{useIn}</div>
                    )}
                  </TableCell>
                  {/* {product.remarks && (
                    <TableCell>{product.remarks}</TableCell>
                  )} */}
                </TableRow>
              )}
            </React.Fragment>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
