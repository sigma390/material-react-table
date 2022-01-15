import React, { FC } from 'react';
import { TableCell } from '@mui/material';
import { Cell } from 'react-table';

interface Props {
  cell: Cell<object>;
}

export const MuiTableBodyCell: FC<Props> = ({ cell }) => {
  return (
    <TableCell variant="body" {...cell.getCellProps()}>
      {cell.render('Cell')}
    </TableCell>
  );
};
