import {
  Card, Button, CardImg,
  CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom'

const NewsItem: React.FC<NewsConfig> = ({
  id, author, title, description, urlToImage
}) => {

  return (
    <Card>
      <CardImg top width="100%" src={urlToImage} alt="news-image" />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>
        <CardText>{description}</CardText>
        <Link to={`/article/${id}`}>
          <Button color="primary" style={{ float: "right" }}>Detail</Button>
        </Link>
      </CardBody>
    </Card>
  )
}

export default NewsItem
