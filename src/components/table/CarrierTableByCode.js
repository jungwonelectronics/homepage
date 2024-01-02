import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { header, list } from '../../constant/carrierListByCode';
import { StyledPaper, StyledTableCell, StyledTableRow } from './tableStyled';

export default function CarrierTableByCode() {
  return (
    <TableContainer component={StyledPaper}>
      <Table aria-label="Carriet developer product list by code" size="small">
        <TableHead>
          <TableRow>
            {header.map(item =>
              <StyledTableCell align={item.id === 'useInList' ? 'left' : 'center'} key={item.id}>
                {item.label}
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(carrier => 
            <React.Fragment key={carrier.jweCode}>
              {carrier.productList.map((product, productIndex) =>
                <StyledTableRow key={`table-row-${productIndex}`}>
                  {productIndex === 0 && (
                    <StyledTableCell align="center"
                      rowSpan={carrier.productList.length}
                    >
                      {carrier.jweCode}
                    </StyledTableCell>
                  )}
                  <StyledTableCell align="center">
                    {product.model.map((item, index) => (
                      <div key={`model-${index}`}>{item}</div>
                    ))}
                  </StyledTableCell>
                  <StyledTableCell>
                    {product.useInList.map(useIn => 
                      <div key={useIn}>{useIn}</div>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.remarks.map((item, index) => (
                      <div key={`remarks-${index}`}>{item}</div>
                    ))}
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </React.Fragment>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
