import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Home02Icon as HomeIcon,
  BarChart12Icon as BarChartIcon,
  Grid01Icon as GridIcon,
  Settings01Icon as SettingsIcon,
  HelpCircleIcon,
  ChevronSelectorVerticalIcon,
  LinkExternal01Icon as LinkIcon,
} from 'untitledui-js-base'

const SidebarContainer = styled.div`
  width: 100%;
  background-color: transparent;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
`;

const IconWrapper = styled.span`
  margin: 0 12px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme['base-color-gray-5']};
  &:hover {
    color: ${({ theme }) => theme['base-color-black-0']};
  }
`;

const GroupTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme['base-color-gray-5']};
  margin: 12px 0;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  color: ${({ theme }) => theme['base-color-gray-7']};
  border-radius: 6px;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme['base-color-black-0']};
    background-color: ${({ theme }) => theme['base-color-gray-1']};
    ${IconWrapper} {
      color: ${({ theme }) => theme['base-color-black-0']};
    }
  }
`;

interface MenuItemProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const MenuItemWithIcon: React.FC<MenuItemProps> = ({ to, icon, children }) => (
  <MenuItem to={to}>
    <IconWrapper>{icon}</IconWrapper>
    {children}
  </MenuItem>
);

const MenuItemWithRightIcon: React.FC<MenuItemProps & { rightIcon: React.ReactNode }> = ({ to, icon, children, rightIcon }) => (
  <MenuItem to={to} target='_blank'>
    <IconWrapper>{icon}</IconWrapper>
    {children}
    <IconWrapper style={{ marginLeft: 'auto' }}>{rightIcon}</IconWrapper>
  </MenuItem>
);

const MenuSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled(MenuSection)`
  justify-content: flex-start;
`;

const BottomSection = styled(MenuSection)`
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme['base-color-white-1']};
  border: 1px solid ${({ theme }) => theme['base-color-gray-3']};
  border-radius: 8px;
  margin-top: 12px;
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme['base-color-gray-3']};
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const UserEmail = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme['base-color-gray-5']};
`;

const UserCardDropdown = styled.div`
  color: ${({ theme }) => theme['base-color-gray-3']};
  cursor: pointer;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>Platform</Logo>
      <TopSection>
        <GroupTitle>General</GroupTitle>
        <MenuItemWithIcon to="/" icon={<HomeIcon size='22' />}>Overview</MenuItemWithIcon>
        <MenuItemWithIcon to="/dashboards" icon={<BarChartIcon size='22' />}>Dashboards</MenuItemWithIcon>
        <MenuItemWithIcon to="/all-projects" icon={<GridIcon size='22' />}>All projects</MenuItemWithIcon>
      </TopSection>
      <BottomSection>
        <MenuItemWithRightIcon 
          to="https://github.com/" 
          icon={<HelpCircleIcon size='22' />} 
          rightIcon={<LinkIcon size='18' />}
        >
          Support
        </MenuItemWithRightIcon>
        <MenuItemWithIcon to="/settings" icon={<SettingsIcon size='22' />}>Settings</MenuItemWithIcon>
        <UserCard>
          <UserAvatar src="https://avatars.githubusercontent.com/u/47265000?v=4" alt="User avatar" />
          <UserInfo>
            <UserName>Caitlyn Kiing</UserName>
            <UserEmail>caitlyn@untitledui.com</UserEmail>
          </UserInfo>
          <UserCardDropdown>
            <ChevronSelectorVerticalIcon size='18' />
          </UserCardDropdown>
        </UserCard>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;