import styled from 'styled-components';

const Plan = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  border: ${({ isPrefered, theme }) =>
    isPrefered ? `3px solid ${theme.colors.primary}` : '1px solid #ccc'};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    order: ${({ isPrefered }) => (isPrefered ? -1 : '')};
  }
`;

const PlanTitle = styled.h3`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const PlanWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const OldPrice = styled.span`
  color: #a71300;
  position: relative;
  font-weight: ${({ theme }) => theme.weights.bold};
  font-size: 1.375rem;
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0.01em;
    background-color: currentColor;
    transform: translateY(-50%);
  }
`;

const CurrentPrice = ({ currentPrice, period, className }) => (
  <div className={className}>
    <span className='number'>{currentPrice}</span>
    <span className='period'>no 1° {period}</span>
  </div>
);

const Flag = styled.span`
  width: 125px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-transform: uppercase;
  padding: 6px;
  padding-bottom: 0;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.primary};
  ::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    height: 100%;
    width: 51%;
    background: ${({ theme }) => theme.colors.primary};
    transform: skew(0deg, 6deg);
  }
  ::after {
    content: '';
    position: absolute;
    top: 6px;
    right: 0;
    height: 100%;
    width: 50%;
    background: ${({ theme }) => theme.colors.primary};
    transform: skew(0deg, -6deg);
  }
  ::before,
  ::after {
    z-index: -1;
  }
`;

const CurrentPriceStyled = styled(CurrentPrice)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .number {
    color: #0a1bb0;
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 2.25rem;
  }
  .period {
    font-size: 15px;
  }
  .number,
  .period {
    display: block;
  }
`;

const PlanBenefits = ({ benefitsList, className }) => (
  <ul className={className}>
    {benefitsList.map((benefit, index) => (
      <li key={`benefit-${index}`}>{benefit}</li>
    ))}
  </ul>
);

const PlanBenefitsStyled = styled(PlanBenefits)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 20px 20px 0 32px;
  list-style: none;
  li {
    position: relative;
    font-size: 18px;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1,9.333,3.133,7.2,7.4,11.467,14.867,4,17,6.133l-9.6,9.6Z' fill='rgb(10, 27, 176)' transform='translate(-1 -4)'%3E%3C/path%3E%3C/svg%3E");
      background-size: contain;
      transform: translate(-20px, 2px);
    }
  }
`;

export {
  Plan,
  PlanTitle,
  PlanWrap,
  OldPrice,
  Flag,
  CurrentPriceStyled,
  PlanBenefitsStyled,
};
