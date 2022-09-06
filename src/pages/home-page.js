import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from '../components/page-layout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const HomePage = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userWatchList, setUserWatchList] = useState(null);


  useEffect(() => {
    const getUserWatchList = async () => {
      const domain = process.env.REACT_APP_AUTH0_SERVER_URL;

      try {
        const accessToken = await getAccessTokenSilently();

        // Maybe refactor this later using Axios?
        const response = await fetch(
          `${domain}/protected`, 
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
          },
        });

        const user_metadata = await response;

        setUserWatchList(user_metadata);

      } catch (e) {
        console.error(e.message);
      }
    };

    getUserWatchList();
    
  }, [getAccessTokenSilently, user?.sub]);

  console.log(userWatchList)
  

  function createData(name, Coin, Price, Market, Watch) {
    return { name, Coin, Price, Market, Watch };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

  


  return (
    <PageLayout>
      <div>Hello world!</div>

  
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Coin</TableCell>
            <TableCell align="right">Price&nbsp;(g)</TableCell>
            <TableCell align="right">Market&nbsp;(g)</TableCell>
            <TableCell align="right">Watch&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Coin}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





    </PageLayout>


  )
}