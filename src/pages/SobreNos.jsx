import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const meusDados = [
    {
        titulo: "Um título",
        texto: "Um texto Grande."
    },
    {
        titulo: "Outro título",
        texto: "Outro texto"
    }
]

const SobreNos = () => (
    <Base>
    <ListContainer>
    {
        meusDados.map( (ele, i) => (
            <Cartao
                key={i}
                titulo={ele.titulo}
                texto={ele.texto}
            />
        ))
    }
    </ListContainer>
    </Base>
)

export default SobreNos;