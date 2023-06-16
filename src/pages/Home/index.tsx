import { Grid, Typography, Button, Box} from '@material-ui/core'
import style from './style.module.css'

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
                    <img src="https://images.pexels.com/photos/6153738/pexels-photo-6153738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagem Home" className={style.img} />
                </Grid>
                <Grid item xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    )
}