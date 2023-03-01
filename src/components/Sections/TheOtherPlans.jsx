import React from 'react';
import styled from 'styled-components';
import KnowMore from '../KnowMore';
import ClubeGazeta from '@/assets/icons/ClubeGazeta.svg';
import AssinaturaPresente from '@/assets/icons/AssinaturaPresente.svg';
import RevistaPino from '@/assets/icons/RevistaPino.svg';
import Plans from '../OtherPlansCard';
import { Section, Subtitle, Wrapper } from '../sharedstyles';

const ListPlan = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: ${({theme}) => theme.breakpoints.desktopSm}) {
    flex-direction: column;
    gap: 20px;
}
`;
const SubtitleOtherPlans = styled(Subtitle)`
  margin-bottom: 45px;
  text-transform: none;
`;

const WrapperOtherPlans = styled(Wrapper)`
  padding-bottom: 48px;
  padding-top: 48px;
`;

export default function TheOtherPlans() {
  return (
    <Section>
      <WrapperOtherPlans>
        <SubtitleOtherPlans>Outros Planos</SubtitleOtherPlans>
        <ListPlan>
          <Plans
            imagem={ClubeGazeta}
            titleCard='Conheça o Clube Gazeta do Povo'
            textCard='Conte com descontos exclusivos em mais de 1000 estabelecimentos, além de shows, cinemas e muito mais.'
            textCardComplement=''
            emphasis='Exclusivo para a cidade de Curitiba-PR'
            link='Quero conhecer'
            linkHref='https://clube.gazetadopovo.com.br'
          />
          <Plans
            imagem={AssinaturaPresente}
            titleCard='Assinatura Presente'
            textCard='Você pode dar um acesso ilimitado ao conteúdo da Gazeta do Povo de presente para seus amigos e parentes.'
            textCardComplement='Entre em contato pelo e-mail queroassinar@gazetopovo.com.br ou telefone (41) 3321-5555 ou'
            emphasis=''
            link='Converse pelo Whatsapp'
            linkHref='https://api.whatsapp.com/send?phone=5541991052182'
          />
          <Plans
            imagem={RevistaPino}
            titleCard='Revista Pinó'
            textCard='Todos os meses a revista traz conteúdo conectado com o que acontece no mundo e em Curitiba sobre gastronomia, decoração, arquitetura, design, inovação, qualidade de vida e saúde.'
            textCardComplement=''
            emphasis='Revista com serviço de entrega apenas para regiões de Curitiba.'
            link='Conheça os planos'
            linkHref='https://assinaturas.gazetadopovo.com.br/pino/'
          />
        </ListPlan>
        <KnowMore />
      </WrapperOtherPlans>
    </Section>
  );
}
