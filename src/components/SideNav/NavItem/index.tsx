import { ReactNode } from "react";
import { styled } from "styled-components";

interface NavItemProps {
  children: ReactNode;
  activeIcon: string;
  inactiveIcon: string;
  active?: boolean;
}

interface StylizedItemProps {
  $active: boolean;
} 

const StylizedItem = styled.li<StylizedItemProps>`
  size: 24px;
  line-height: 29px;
  margin-bottom: 32px;
  cursor: pointer;
  color: ${props => props.$active ? "#7B78E5" : "#D9D9D9"};
  font-family: ${props => props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const NavItem = ({ children, activeIcon, inactiveIcon, active = false }: NavItemProps) => {
  return (
    <StylizedItem $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </StylizedItem>
  );
};

export default NavItem;