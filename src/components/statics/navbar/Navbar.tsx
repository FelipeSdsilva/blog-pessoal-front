import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ImgIcon from '../../../assets/img/icons8-blog.svg'
import useLocalStorage from 'react-use-localstorage';
import './navbar.css'

export default function NavBar() {

    const [token, setToken] = useLocalStorage('token');
    const navigator = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado!')
        navigator('/login')
    }

    return (
        <>
            <AppBar position="static" className='navBar'>
                <Toolbar variant="dense">
                    <Link to={`/`}>
                        <Box className='cursor' >
                            <Typography variant="h5" color="inherit">
                               <img src={ImgIcon} alt="" />
                            </Typography>
                        </Box>
                    </Link>


                    <Box display="flex" justifyContent="end">
                        <Link to={`/home`} className='cursor'>
                            <Box mx={1} >
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to={`/posts`} className='cursor'>
                            <Box mx={1} >
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to={`/temas`} className='cursor'>
                            <Box mx={1} >
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to={`/formularioTema`} className='cursor'>
                            <Box mx={1} >
                                <Typography variant="h6" color="inherit">
                                    Novo Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar >

        </>
    );
}