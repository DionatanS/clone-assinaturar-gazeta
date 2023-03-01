import {Card,Text,ImageStyled,ContainerImage} from './styles';


export default function CardWhySubscribe({imagem, text, description}){
  return(
    <Card>
      <ContainerImage>
        <ImageStyled src={imagem} alt={description}/>
      </ContainerImage>
      <Text>{text}</Text>
    </Card>
  );
}