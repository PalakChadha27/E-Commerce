import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 E-Commerce. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
