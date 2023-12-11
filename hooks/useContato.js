import { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";

export const useContato = () => {
    const router = useRouter();
    const URL = "http://localhost:8080/contatos"
    const [contato, setContato] = useState({ id: 0, nome: "", email: "", mensagem: ""});
    const [contatos, setContatos] = useState([]);

    const handleInputChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
    };

    const listarContatos = () => {
        axios
            .get(URL)
            .then((response) => {
                setContatos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de contatos: ", error);
            });
    };

    const criarContato = () => {
        axios
            .post(URL, contato)
            .then((response) => {
                router.push("/contato");
            })
            .catch((error) => {
                alert("Erro ao inserir contato: " + error);
            });
    }

    const deleteContato = (codigo) => {
        axios
          .delete(`${URL}/${codigo}`)
          .then(() => {
            listarContatos()
          })
          .catch((error) => {
            alert("Erro ao excluir contato: " + error);
          });
      };

      return {
        contato,
        contatos,
        handleInputChange,
        listarContatos,
        criarContato,
        deleteContato
    }
}