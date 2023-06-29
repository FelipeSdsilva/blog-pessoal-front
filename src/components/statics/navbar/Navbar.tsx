import { Box } from '@mui/material';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { TokenState } from '../../../store/tokens/tokensReducer';
import ImgIcon from '../../../assets/img/icons8-blog.svg';
import './navbar.css';

export default function NavBar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    const navigator = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuario deslogado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigator('/login')
    }

    let navbarComponent;

    if (token !== '') {
        navbarComponent = <AppBar position="static" className='navBar'>
            <Toolbar variant="dense">
                <Link to={`/home`}>
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
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}