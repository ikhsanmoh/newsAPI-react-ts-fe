interface NewsConfig {
  author?: string;
  title?: string;
  description?: string;
  urlToImage?: string;
  content?: string;
}

type ArrayOfNewsObject = Array<NewsConfig>;