import { useState, useEffect } from 'react';
import API from './config/api';

import { Container } from 'reactstrap';
import { Header } from './components/base/Header';
import NewsList from './components/NewsList';
import Loading from './components/Loading';

const App = () => {
  const [newsList, setNewsList] = useState<ArrayOfNewsObject>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchArticles = async () => {
    try {
      const response = await API.get('everything')
      console.log(response)
      const articles = response.data.articles
      setNewsList(articles)
      setLoading(false)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div style={{ minHeight: '100vh' }} className="bg-light">
      <Header />
      <Container className="py-3">
        {loading ? <Loading /> : <NewsList newsList={newsList} />}
      </Container>
    </div>
  );
}

export default App;