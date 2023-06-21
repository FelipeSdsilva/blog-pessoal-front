import { Grid, Typography, Button, Box } from '@material-ui/core'
import ImgWelcome from '../../assets/img/Blog post-bro.svg'
import style from './style.module.css'
import TabPostagem from '../../components/posts/TabPostagem'

export default function Home() {
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