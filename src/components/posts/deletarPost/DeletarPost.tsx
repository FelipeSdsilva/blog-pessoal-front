import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscaId, deleteId } from '../../../services/Service'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import Postagem from '../../../models/Postagem'
import useLocalStorage from 'react-use-localstorage'
import './deletaPost.css'

export default function DeletarPost() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [postagem, setPost] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/postagens')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Tema deletado com sucesso');
    }

    function nao() {
        navigate('/posts')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>
                            <Typography color="textSecondary" >
                                {postagem?.titulo}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}