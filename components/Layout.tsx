import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 8px 8px 8px 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme['base-color-gray-0']};
`;

const LeftPanel = styled.div`
  width: 300px;
  flex-shrink: 0;
`;

const RightPanel = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme['base-color-white-0']};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme['base-color-gray-3']};
  overflow-y: hidden;
  scrollbar-gutter: stable;
  padding-right: 12px; // Add padding to create space for the scrollbar

  &:hover {
    overflow-y: auto;
  }

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; // Increase width for better visibility
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['base-color-gray-3']};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme['base-color-white-0']}; // Create gap effect
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme['base-color-gray-4']};
  }
`;

interface LayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <LayoutContainer>
      <LeftPanel>{leftContent}</LeftPanel>
      <RightPanel>{rightContent}</RightPanel>
    </LayoutContainer>
  );
};

export default Layout;