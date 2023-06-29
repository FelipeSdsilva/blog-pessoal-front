import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TokenState } from '../../store/tokens/tokensReducer'
import { Grid, Typography, Button, Box } from '@material-ui/core'
import ImgWelcome from '../../assets/img/Blog post-bro.svg'
import ModalPost from '../../components/posts/modalPost/ModalPost'
import TabPostagem from '../../components/posts/tabPostagem/TabPostagem'
import style from './home.module.css'
import { toast } from 'react-toastify'

export default function Home() {
   
    const navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])


    return (
        <>
            <Grid container direction="row" className={style.cardHome}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className={style.titulo}>Seja bem vindes!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className={style.titulo}>Expresse aqui os seus pensamentos e opiniões sobre técnologia, natureza e games!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPost />
                        </Box>
                        <Button variant="outlined" className={style.botao}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={ImgWelcome} alt="" className={style.img} />
                </Grid>
                <Grid item xs={12} style={{ backgroundColor: "white" }}>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    )
}