import { api, login } from '../../services/Service';
import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import ImgLogin from '../../assets/img/Game analytics-amico.svg'
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import './login.css'


export default function Login() {

    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <>
            <Grid container xs={12} className='grid-container'>
                <Grid xs={6} xl={12} className='grid-item'>
                    <Box className='box-container'>

                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom component='h3' className='text-login'>Entrar</Typography>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth className='input-text' />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='input-text' />
                            <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to={`/cadastro`} className='text-decorator-none'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='signUp' >Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} className='grid-item'>
                    <Box className='imagem'>
                        <img src={ImgLogin} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}