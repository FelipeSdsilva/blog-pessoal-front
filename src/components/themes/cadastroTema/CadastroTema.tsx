import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import './cadastroTema.css'

export default function CadastroTema() {

    const navegate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })


    return (
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}