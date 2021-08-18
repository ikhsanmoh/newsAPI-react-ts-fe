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
        <p style={{ color: '#444' }}>By {newsList[id - 1].author}</p>
      </Row>
      <Row>
        <p>{newsList[id - 1].content}</p>
      </Row>
      <Row>
        <p>
          <span>SOURCE: </span>
          <a href={newsList[id - 1].url} target="_blank" rel="noreferrer">{newsList[id - 1].url}</a>
        </p>
      </Row>
    </Row>
  )
}

export default Article
