import { Container, Flex } from '@chakra-ui/react';
import './App.css';
import Yourdetail from './component/Yourdetail';
import Cart from './component/Cart';

function App() {
  return (
    <Container maxWidth="container.xl" p="10">
      <Flex h="100vh" py={20}>
        
<Yourdetail/>
<Cart/>
      
      </Flex>
    </Container>
  );
}

export default App;
