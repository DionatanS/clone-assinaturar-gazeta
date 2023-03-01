import { Section } from '@/components/sharedstyles';
import {
  TopicTitle,
  SubtitleDoubts,
  Topics,
  WrapperDoubts,
  Topic,
  Accordion,
} from './styles';

export default function Doubts() {
  const data = [
    {
      id: 'topic-1',
      title: 'Assinaturas Digitais',
      doubts: [
        {
          id: 't1-doubt-1',
          label: 'Como funciona a assinatura do Plano Digital?',
          description:
            'A assinatura dá acesso ilimitado a todo conteúdo digital da Gazeta do Povo, desde as notícias, blogs e colunas, como também ao conteúdo multimídia como vídeos, podcasts e aplicativos interativos, seja no site, smartphone ou tablet (iOS e Android).',
        },
        {
          id: 't1-doubt-2',
          label:
            'O conteúdo do site Gazeta do Povo ficará disponível apenas para assinantes?',
          description:
            'Qualquer usuário tem o direito a consumir até 3 notícias gratuitas no mês. A partir do limite de 3 notícias, somente os assinantes da Gazeta do Povo poderão visualizar o conteúdo, mediante preenchimento de login e senha.',
        },
        {
          id: 't1-doubt-3',
          label: 'Como funciona a cobrança da assinatura?',
          description:
            'A assinatura da Gazeta do Povo é cobrada de forma automática seguindo o ciclo da assinatura (mensalmente ou anualmente), sempre no início do período de acesso.',
        },
      ],
    },
    {
      id: 'topic-2',
      title: 'Serviços e atendimento ao assinante',
      doubts: [
        {
          id: 't2-doubt-1',
          label: 'Como é a renovação da assinatura?',
          description:
            'Para sua comodidade, a renovação dos planos é automática e a cobrança se manterá de acordo com seu melhor dia de pagamento. A renovação segue a periodicidade contratada (mensalmente ou anualmente).',
        },
        {
          id: 't2-doubt-2',
          label: 'Como faço para cancelar minha assinatura?',
          description:
            'Caso queira cancelar sua assinatura é necessário fazer a solicitação para nossa Central de Atendimento ao Assinante através do e-mail caa@gazetadopovo.com.br, pelo telefone (41) 3321-5555 ou abra uma solicitação na Área do Assinante. O pedido pode ser feito a qualquer momento e a assinatura é cancelada no fim do período contratado ou renovado. Não fazemos o ressarcimento parcial de períodos já pagos.',
        },
        {
          id: 't2-doubt-3',
          label: 'Posso ter logins adicionais para meus familiares?',
          description:
            'Você pode adicionar até três logins extras no momento da compra da assinatura. Para cada login são acrescentados R$ 7,50 por mês no valor da assinatura.',
        },
      ],
    },
    {
      id: 'topic-3',
      title: 'Pagamentos',
      doubts: [
        {
          id: 't3-doubt-1',
          label: 'Como autorizar o débito em conta?',
          description:
            'Para aproveitar a função de débito automático, não esqueça de autorizar a cobrança da Gazeta do Povo na sua conta Santander ou Itaú. O primeiro pagamento, pode levar até 5 dias corridos para ficar disponível para autorização. Acompanhe no aplicativo do seu banco. Se você é cliente Bradesco, esta autorização já é feita automaticamente.',
        },
        {
          id: 't3-doubt-2',
          label: 'Autorização de débito em conta no banco Itaú',
          description:
            'Confira no vídeo como autorizar o débito em conta no seu aplicativo Autorização de débito em conta no banco Itaú.',
        },
        {
          id: 't3-doubt-3',
          label: 'Autorização de débito em conta no banco Santander',
          description:
            'Confira no vídeo como autorizar o débito em conta no seu aplicativo Autorização de débito em conta no banco Santander.',
        },
      ],
    },
  ];

  return (
    <Section>
      <WrapperDoubts>
        <SubtitleDoubts align='left'>Dúvidas</SubtitleDoubts>
        <Topics>
          {data.map(topic => (
            <Topic key={topic.id}>
              <TopicTitle>{topic.title}</TopicTitle>
              {topic.doubts.map(doubt => (
                <Accordion key={doubt.id} doubt={doubt} />
              ))}
            </Topic>
          ))}
        </Topics>
      </WrapperDoubts>
    </Section>
  );
}
