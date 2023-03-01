import Button from '@/components/Button';
import {
  CurrentPriceStyled,
  Flag,
  OldPrice,
  Plan,
  PlanBenefitsStyled,
  PlanTitle,
  PlanWrap,
} from './styles';

const PlanCard = props => (
  <Plan isPrefered={props.prefered}>
    {props.prefered && <Flag>Melhor oferta</Flag>}
    <PlanWrap>
      <PlanTitle>{props.title}</PlanTitle>
      <OldPrice>{props.oldPrice}</OldPrice>
      <CurrentPriceStyled
        currentPrice={props.currentPrice}
        period={props.period}
      />
      <Button type={props.prefered ? 'primary' : 'secondary'}>Assine</Button>
      <PlanBenefitsStyled benefitsList={props.benefits} />
    </PlanWrap>
  </Plan>
);

export default PlanCard;
