import React from 'react';
import {
  Container,
  Subheader,
  Paragraph,
  Table,
  Heading,
} from './index.styles';
import TaxTable from './TaxTable';
import taxInfo from '../../utils/tax-info';

const InfoPage = () => {
  return (
    <Container id="info">
      <Subheader>
        Income tax is calculated according to where your salary sits within
        these bands.
      </Subheader>
      <Paragraph>So the more you earn, the more you give.</Paragraph>
      <Table>
        <tbody>
          <tr>
            <Heading>Band</Heading>
            <Heading>Taxable Income</Heading>
            <Heading>Tax Rate</Heading>
          </tr>
          {taxInfo.map(({ band, taxable, rate, emoji }) => {
            return (
              <TaxTable
                key={band}
                band={band}
                rate={rate}
                taxable={taxable}
                emoji={emoji}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default InfoPage;
