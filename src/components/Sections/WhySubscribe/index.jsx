import React from 'react';
import CardWhySubscribe from './CardWhySubscribe';
import { ListCard, SectionStyled, SubText, SubtitleStyled, WrapperStyled} from './styles';
import VisaoGazeta from '@/assets/icons/VisaoGazeta.svg';
import CaminhaoNoticias from '@/assets/icons/CaminhaoNoticias.svg';
import TimeGazeta from '@/assets/icons/TimeGazeta.svg';
import AppGazeta from '@/assets/icons/AppGazeta.svg';

export default function WhySubscribe() {
  return(
    <SectionStyled>
      <WrapperStyled>
        <SubtitleStyled>Por que assinar a Gazeta?</SubtitleStyled>
        <SubText>
            Estamos ao lado dos brasileiros nas grandes questões do nosso tempo. O crescimento da nossa audiência reflete aquilo que praticamos, uma cobertura honesta e comprometida com a sociedade.
        </SubText>
        <ListCard>
          <CardWhySubscribe 
            imagem={VisaoGazeta} 
            text="Nossa visão é conservadora, defendemos a família, a vida e o empreendedorismo."
            description="imagem visão conservadora"
          />
          <CardWhySubscribe
            imagem={CaminhaoNoticias} 
            text="Contamos com mais de 100 profissionais trazendo as notícias mais importantes."
            description="imagem de um caminhão representando a quantidade de noticias na gazeta"
          />
          <CardWhySubscribe
            imagem={TimeGazeta} 
            text="Time próprio de jornalistas em Brasília acompanhando a política e a economia."
            description="imagem representando o time da gazeta"
          />
          <CardWhySubscribe
            imagem={AppGazeta} 
            text="App com notificações e serviço de notícias por WhatsApp."
            description="imagem representando o o Aplicativo da Gazeta"
          />
        </ListCard>
        <SubText>
            À frente das nossas análises, estão nomes como Rodrigo Constantino, Guilherme Fiuza, J.R. Guzzo e Alexandre Garcia.  Jornalismo sem medo de rebater visões dadas como certas pela grande mídia.
        </SubText>
      </WrapperStyled>
    </SectionStyled>
  );
}
