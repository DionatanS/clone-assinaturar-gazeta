import styled from 'styled-components';
import PlanCard from '../Cards/PlanCard';
import { Section, Subtitle, Wrapper } from '../sharedstyles';

const SubtitleStyled = styled(Subtitle)`
  margin-bottom: 70px;
`;

const WrapperStyled = styled(Wrapper)`
  padding-top: 45px;
  padding-bottom: 45px;
`;

const PlansGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSm}) {
    flex-wrap: nowrap;
  }
`;

const plans = () => {
  let plansList = [];
  for (let i = 1; i < 4; i++)
    plansList.push(
      <PlanCard
        key={`plan-${i}`}
        title={`Plano ${i}`}
        content='Descrição do plano'
        prefered={i === 2 ? true : false}
        currentPrice='R$ 1,90'
        period='mês'
        oldPrice='R$ 25,90 /mês'
        link='https://linkplano.xyz'
        benefits={[
          'Acesso ilimitado a notícias, análises, vídeos e podcasts.',
          'O melhor time de colunistas do Brasil.',
          'App da Gazeta do Povo com funcionalidades que melhoram a sua leitura.',
          '3 conteúdos sem barreira para você compartilhar todos os dias.',
          'Debates ao vivo, e-books e cursos para você aprofundar seu conhecimento.',
        ]}
      />
    );
  return plansList;
};

const PlansDisclamer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const PlansDisclamerStyled = styled(PlansDisclamer)`
  text-align: center;
  color: gray;
  font-size: 14px;
  p + p {
    margin-top: 10px;
  }
`;

export default function ThePlans() {
  return (
    <Section bgColor='#efefef'>
      <WrapperStyled>
        <SubtitleStyled>Selecione seu plano de preferência:</SubtitleStyled>
        <PlansGrid>{plans()}</PlansGrid>
        <PlansDisclamerStyled>
          <p>Ofertas válidas apenas para novos assinantes.</p>
          <p>
            Todos os planos são renovados automaticamente pelo preço de tabela
            vigente.
          </p>
        </PlansDisclamerStyled>
      </WrapperStyled>
    </Section>
  );
}
