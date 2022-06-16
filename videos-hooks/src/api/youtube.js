import axios from "axios"

const KEY = 'AIzaSyCIMPNh2tw_45WM5otR7Ru0kGRB2J9DU6E'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type:'video',
    maxResults: 5,
    key: KEY
  }
}

)