import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 2;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Khush Patel</h1>
          <PText>
            A motivated programmer looking to grow his skills. Available to work
            during May 2022 Co-op term!
          </PText>
        </div>

        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '(431) 998 8848',
                path: 'tel:4319988848',
              },
              {
                title: 'k425pate@uwaterloo.ca',
                path: 'mailto:k425pate@uwaterloo.ca',
              },
              {
                title: 'Niagara Falls, Ontario',
                path:
                  'https://www.google.com/maps/place/Niagara+Falls,+ON/@43.0538471,-79.2281182,11z/data=!3m1!4b1!4m5!3m4!1s0x89d3445eec824db9:0x46d2c56156bda288!8m2!3d43.0895577!4d-79.0849436',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/khush-patel-7748a1174/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/KhushPatel2003',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/_khush.patel/',
              },
            ]}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </FooterStyle>
  );
}
