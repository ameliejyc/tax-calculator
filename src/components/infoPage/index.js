import React from 'react';
import { Container, Table, Heading } from './index.styles';

const InfoPage = () => {
  return (
    <Container>
      <h1>Info</h1>
      <Table>
        <tbody>
          <tr>
            <Heading>Band</Heading>
            <Heading>Taxable Income</Heading>
            <Heading>Tax Rate</Heading>
          </tr>
          <tr>
            <td>Personal Allowance</td>
            <td>
              Up to £11,500{' '}
              <span role="img" aria-label="metal emoji">
                🤘🏽
              </span>
            </td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Basic Rate</td>
            <td>
              £11,501 to £45,000{' '}
              <span role="img" aria-label="information desk person emoji">
                💁🏻
              </span>
            </td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Higher Rate</td>
            <td>
              £45,001 to £150,000{' '}
              <span role="img" aria-label="nail care emoji">
                💅🏾
              </span>
            </td>
            <td>40%</td>
          </tr>
          <tr>
            <td>Additional Rate</td>
            <td>
              over £150,000{' '}
              <span role="img" aria-label="eyes emoji">
                👀
              </span>
            </td>
            <td>45%</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default InfoPage;
