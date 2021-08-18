import { useParams } from "react-router-dom"
import { Row } from "reactstrap"


interface Props {
  newsList: ArrayOfNewsObject;
}

const Article: React.FC<Props> = ({ newsList }) => {
  const { id }: any = useParams()

  return (
    <Row>
      <Row className="mb-3">
        <img style={{ width: '100%' }} src={newsList[id - 1].urlToImage} alt="img" />
      </Row>
      <Row>
        <h1>{newsList[id - 1].title}</h1>
      </Row>
      <Row className="mb-4">
        <h5>{newsList[id - 1].author}</h5>
      </Row>
      <Row>
        <p>{newsList[id - 1].content}</p>
      </Row>
    </Row>
  )
}

export default Article
