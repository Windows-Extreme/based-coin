import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  IconButton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Skeleton,
} from '@mui/material';
import {
  BookmarkBorder,
  Bookmark,
  KeyboardDoubleArrowUp,
  KeyboardDoubleArrowDown,
} from '@mui/icons-material'
import numeral from 'numeral'

export default function MarketTable(props) {

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
              <TableCell>
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
                      <Typography variant='h6' noWrap={true}>{row.name}</Typography>
                      <Typography variant='subtitle2' textTransform='uppercase'>{row.symbol}</Typography>
                    </Box>
                  </Button>
                </TableCell>
                <TableCell>
                  <Typography>
                    {numeral(row.current_price).format('$0,.00')}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Chip 
                  variant='outlined'
                  icon={(row.percentage_change_24h > 0) ? <KeyboardDoubleArrowUp/> : <KeyboardDoubleArrowDown/>}
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
                    {props.userData?.watchlist.some(coin => coin._id === row.id) ? (<Bookmark color='secondary'/>) : (<BookmarkBorder color='secondary' />)}
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