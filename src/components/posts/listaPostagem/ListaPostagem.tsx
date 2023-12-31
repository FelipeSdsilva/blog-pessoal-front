import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { busca } from '../../../services/Service';
import { Link, useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import Postagem from '../../../models/Postagem';
import './listarPostagem.css'

export default function ListaPostagem() {

    const navigate = useNavigate();
    const [posts, setPosts] = useState<Postagem[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Opsss você precisa estar logado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            navigate("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <> {
            posts.map(post => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {post.titulo}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {post.texto}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {post.tema?.descricao}
                            </Typography>
                            <Typography>
                                {moment(post.data).locale('pt-br').format("DD/MM/YYYY HH:mm:ss")}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    )
}