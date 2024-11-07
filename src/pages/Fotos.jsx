import { useEffect, useState } from "react";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutos from "../data/computadores.json";
import Base from "./Base";
import { useSearchParams } from "react-router-dom";

const Fotos = () => {
  const [dados, setDados] = useState(brutos);
  const [dadosFiltrados, setDadosFiltrados] = useState(brutos);
  const [parametros, setParametros] = useSearchParams();

  const pesquisar = (entrada) => {
      setDados(dadosFiltrados.filter(
              (ele) => ele.nome.includes(entrada) || ele.link_original.includes(entrada)
            ))
      }


  useEffect( () => {
    if (parametros.has('chave')){
      setDadosFiltrados(brutos.filter(
        (ele) => ele.id == parametros.get('chave')
      ))
    } else {
      setDadosFiltrados(brutos)
    }
    setDados(dadosFiltrados);
  }, [parametros])

  return (
      <Base>
        <input type="text"
          onChange={ (e) => pesquisar(e.target.value)}
        />
        <ListContainer>
          {dados.map(
            (el, index) => (
              <FotoCard 
                key={index}
                titulo={el.nome}
                src={`${process.env.PUBLIC_URL}/${el.url}`}
                link_original={el.link_original}
                agradecimento={el.agradecimento}
              />
              )
          )}
          </ListContainer>
      </Base>      
 )
};

export default Fotos;