import { Container } from 'reactstrap';

import { Header } from './components/base/Header';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <div>
      <Header />
      <Container className="py-3">
        <NewsList />
      </Container>
    </div>
  );
}

export default App;
