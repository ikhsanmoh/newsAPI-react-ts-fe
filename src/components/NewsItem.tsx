import {
  Card, Button, CardImg,
  CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

import { NO_IMG_LINK } from '../constants';

const NewsItem = () => {
  return (
    <Card>
      <CardImg top width="100%" src={NO_IMG_LINK} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  )
}

export default NewsItem
