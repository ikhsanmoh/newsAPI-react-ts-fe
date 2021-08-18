import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useState, useEffect } from 'react';
import API from './config/api';

import { Container } from 'reactstrap';
import { Header } from './components/base/Header';
import NewsList from './components/NewsList';
import Loading from './components/Loading';
import Article from "./pages/Article";

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
      <Router>
        <Header />
        <Container className="py-3">
          <Switch>
            <Route path="/article/:id">
              <Article newsList={newsList} />
            </Route>
            <Route exact path="/">
              {loading ? <Loading /> : <NewsList newsList={newsList} />}
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;