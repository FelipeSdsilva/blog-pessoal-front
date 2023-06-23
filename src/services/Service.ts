import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://blogpessoal-ktfe.onrender.com'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data.token)
}

export const busca = async (url: any, setDado: any, header: any) => {
  const resposta = await api.get(url, header)
  setDado(resposta.data)
}

export const buscaId = async (url: any, dados: any, setDado: any, header: any) => {
  const resp = await api.get(url, header)
  setDado(resp.data)
}


export const post = async (url: any, dados: any, setDado: any, header: any) => {
  const resp = await api.post(url, header)
  setDado(resp.data)
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
  const resp = await api.put(url, header)
  setDado(resp.data)
}

export const deleteId = async (url: any, dados: any, setDado: any, header: any) => {
  await api.put(url, header)
}