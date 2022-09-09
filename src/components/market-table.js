import React from 'react';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import numeral from 'numeral'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export function MarketTable(props) {
  return(
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>
                  Name
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>
                  Price (USD)
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>
                  Change (24h)
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>
                  Market Cap
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>
                  Watch
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th" 
                  scope="row">
                  
                  <Button sx={{ width: '100%', justifyContent: 'start'}} color='inherit' component={Link} to={`/coins/${row.id}`}>
                    <Box mr={2}>
                    <img src={row.image} alt={row.id} height={30} />
                    </Box>
                    <Box>
                    <Typography variant='h6'>{row.name}</Typography>
                    <Typography variant='subtitle2' textTransform='uppercase'>{row.symbol}</Typography>
                    </Box>
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Typography>
                    {numeral(row.current_price).format('$0,.00')}
                  </Typography>
                  </TableCell>
                <TableCell align="right">
                  <Chip 
                  variant='outlined'
                  icon={(row.percentage_change_24h > 0) ? <KeyboardDoubleArrowUpIcon/> : <KeyboardDoubleArrowDownIcon/>}
                  color={(row.percentage_change_24h > 0) ? 'success' : 'error'} 
                  label={numeral(row.percentage_change_24h / 100).format('0.00%')}>
                  </Chip>
                </TableCell>
                <TableCell align="right">
                  <Typography textTransform='uppercase'>
                    {numeral(row.marketCap).format('$0.00a')}
                  </Typography>
                  </TableCell>
                <TableCell align="right">
                  {/* Bookmark icon button */}
                  <IconButton onClick={() => props.handleBookmark(row.id)}>
                    {props.userData?.watchlist.some(coin => coin._id === row.id) ? (<BookmarkIcon color='secondary'/>) : (<BookmarkBorderIcon color='secondary' />)}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}