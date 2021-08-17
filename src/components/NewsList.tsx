import { Row, Col } from 'reactstrap';
import NewsItem from './NewsItem';

interface Props {
  newsList: ArrayOfNewsObject;
}

const NewsList: React.FC<Props> = ({ newsList }) => {
  return (
    <Row xs="1" sm="2" md="3" lg="4">
      {newsList.length > 0 ? newsList.map((news, index) => (
        <Col key={index} className="my-2">
          <NewsItem
            author={news.author}
            title={news.title}
            description={news.description}
            urlToImage={news.urlToImage}
          />
        </Col>
      )) : <h3 className="text-center w-100">No News!</h3>}
    </Row>
  )
}

export default NewsList
