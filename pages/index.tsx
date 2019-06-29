import { Component } from 'react';
import styled from '@emotion/styled';

const Title = styled('h1')`
  color: red;
`;

class Home extends Component {
  public render() {
    return (
      <Title>
        Hello 😗 Next JS is now with Typescript - Ready to be linted as well! 🎉
      </Title>
    );
  }
}
export default Home;
