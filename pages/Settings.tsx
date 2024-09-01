import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'camp-ui';

const SettingsPage = () => {
  const [brandColor, setBrandColor] = useState('#0966E5');
  const [chartStyle, setChartStyle] = useState('Default');
  const [language, setLanguage] = useState('English (UK)');
  const [cookieBanner, setCookieBanner] = useState('Default');

  return (
    <Container>
      <h1 style={{ marginBottom: '12px' }}>Settings</h1>
      <div style={{ marginBottom: '20px' }}>
        <Tabs
          tabs={['Account', 'Security', 'Appearance']}
        />
      </div>

      <TwoColumnLayout>
        <LeftColumn>
          <h3>Brand color</h3>
          <p>Select or customize your brand color.</p>
        </LeftColumn>
        <RightColumn>
          <ColorPicker
            type="color"
            value={brandColor}
            onChange={(e) => setBrandColor(e.target.value)}
          />
          <ColorCode>{brandColor}</ColorCode>
        </RightColumn>
      </TwoColumnLayout>

      <TwoColumnLayout>
        <LeftColumn>
          <h3>Dashboard charts</h3>
          <p>How charts are displayed.</p>
          <Link href="#">View examples</Link>
        </LeftColumn>
        <RightColumn>
          <ChartOptions>
            {['Default', 'Simplified', 'Custom CSS'].map((option) => (
              <ChartOption
                key={option}
                selected={chartStyle === option}
                onClick={() => setChartStyle(option)}
              >
                {/* Add chart preview image here */}
                <h4>{option}</h4>
                <p>{getChartDescription(option)}</p>
              </ChartOption>
            ))}
          </ChartOptions>
        </RightColumn>
      </TwoColumnLayout>

      <TwoColumnLayout>
        <LeftColumn>
          <h3>Language</h3>
          <p>Default language for public dashboard.</p>
        </LeftColumn>
        <RightColumn>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English (UK)">🇬🇧 English (UK)</option>
            {/* Add more language options */}
          </Select>
        </RightColumn>
      </TwoColumnLayout>

      <TwoColumnLayout>
        <LeftColumn>
          <h3>Cookie banner</h3>
          <p>Display cookie banners to visitors.</p>
          <Link href="#">View examples</Link>
        </LeftColumn>
        <RightColumn>
          <CookieOptions>
            {['Default', 'Simplified', 'None'].map((option) => (
              <CookieOption
                key={option}
                selected={cookieBanner === option}
                onClick={() => setCookieBanner(option)}
              >
                {/* Add cookie banner preview image here */}
                <h4>{option}</h4>
                <p>{getCookieDescription(option)}</p>
              </CookieOption>
            ))}
          </CookieOptions>
        </RightColumn>
      </TwoColumnLayout>

      <ButtonGroup>
        <Button secondary>Cancel</Button>
        <Button primary>Save changes</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const TwoColumnLayout = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const RightColumn = styled.div`
  flex: 2;
`;

const ColorPicker = styled.input`
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ColorCode = styled.span`
  margin-left: 10px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme['base-color-blue-5']};
  text-decoration: none;
`;

const ChartOptions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const ChartOption = styled.div`
  border: 2px solid ${props => props.selected ? props.theme['base-color-blue-5'] : '#ddd'};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const CookieOptions = styled(ChartOptions)``;
const CookieOption = styled(ChartOption)``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.primary ? props.theme['base-color-blue-5'] : '#fff'};
  color: ${props => props.primary ? '#fff' : props.theme['base-color-blue-5']};
  border: 1px solid ${props => props.primary ? props.theme['base-color-blue-5'] : '#ddd'};
`;

// Helper functions
const getChartDescription = (option) => {
  switch (option) {
    case 'Default': return 'Default company branding.';
    case 'Simplified': return 'Minimal and modern.';
    case 'Custom CSS': return 'Manage styling with CSS.';
    default: return '';
  }
};

const getCookieDescription = (option) => {
  switch (option) {
    case 'Default': return 'Cookie controls for visitors.';
    case 'Simplified': return 'Show a simplified banner.';
    case 'None': return "Don't show any banners.";
    default: return '';
  }
};

export default SettingsPage;