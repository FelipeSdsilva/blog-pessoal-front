import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import ImgCadas from '../../assets/img/Visionary technology.gif'
import './style.css'
import { Link } from 'react-router-dom'


export default function Cadastro() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} alignItems='center' ><img src={ImgCadas} alt="" className='imagemSignUp' /></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10} className='box-singUp'>
                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                            <TextField id='nome' label='Nome' variant='filled' name='usuario' margin='normal' fullWidth />
                            <TextField id='usuario' label='E-mail' variant='filled' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='Senha' variant='filled' name='senha' margin='normal' type='password' fullWidth />
                            <TextField id='senha' label='Confirmar Senha' variant='filled' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className='btnCancel'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Link to='/home' className='text-decorator-none'>
                                    <Button type='submit' variant='contained' color='primary'>
                                        Cadastrar-se
                                    </Button>
                                </Link>

                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}