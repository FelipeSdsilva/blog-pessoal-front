import { GitHub } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, Box } from '@material-ui/core';
import { TokenState } from '../../../store/tokens/tokensReducer';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css'


export default function Footer() {


    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>((
        (state) => state.tokens
    ))
    const navigator = useNavigate();

    let footerComponent;

    if (token !== '') {
        footerComponent = <Grid container className='grid-footer'>
            <Grid item xs={12}>
                <Box className='box1-footer'>
                    <Typography variant="h5" className='textos'>Visite minhas redes sociais</Typography>
                    <Box >
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookIcon className='network-footer' />
                        </a>
                        <a href="https://github.com/FelipeSdsilva" target="_blank">
                            <GitHub className='network-footer' />
                        </a>
                        <a href="https://www.linkedin.com/in/felipesdsilva/" target="_blank">
                            <LinkedInIcon className='network-footer' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2-footer'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" gutterBottom className='textos' >© 2023 Copyright:</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" gutterBottom className='textos' >Felipe Sousa</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>)
}