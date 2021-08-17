import { Row, Col } from 'reactstrap';
import NewsItem from './NewsItem';

const NewsList = () => {
  return (
    <Row xs="1" sm="2" md="2" lg="4">
      <Col className="my-2">
        <NewsItem />
      </Col>
      <Col className="my-2">
        <NewsItem />
      </Col>
      <Col className="my-2">
        <NewsItem />
      </Col>
    </Row>
  )
}

export default NewsList
