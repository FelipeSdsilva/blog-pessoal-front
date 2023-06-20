import { GitHub } from '@material-ui/icons'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid, Box } from '@material-ui/core';
import style from './style.module.css'


export default function Footer() {
    return (<>
        <Grid container >
            <Grid alignItems="center" item xs={12}>
                <Box className={style.box1}>
                    <Box className={style.box1a}>
                        <Typography variant="h5" className={style.textos}>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookIcon className={style.redes} />
                        </a>
                        <a href="https://github.com/FelipeSdsilva" target="_blank">
                            <GitHub className={style.redes} />
                        </a>
                        <a href="https://www.linkedin.com/in/felipesdsilva/" target="_blank">
                            <LinkedInIcon className={style.redes} />
                        </a>
                    </Box>
                </Box>
                <Box className={style.box2}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" gutterBottom className={style.textos} >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://www.linkedin.com/in/felipesdsilva/">
                            <Typography variant="subtitle2" gutterBottom className={style.textos} >Felipe Sousa 2023</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>)
}