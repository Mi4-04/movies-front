import {URL, PATH_GENRE, PATH_MOVIES} from '@app/constant'
import axios from 'axios'

export interface IGenre {
  id: number;
  name: string;
  }
 
const getUrl = (path: string): string => {
    const urls = URL + path + '?api_key=' + process.env.REACT_APP_API_KEY
    return urls
}
  
export const getMoviesList = async (
    sort_by: string,
    voteAverage: number,
    year:number,
    page: number ,
    genreIds: number[],
    language: string

): Promise<Object[]> => {

    const res = await axios({
        method: 'GET',
        url: `${getUrl(PATH_MOVIES)}&language=${language}-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=${page}&with_genres=${genreIds}&year=${year}&vote_average.gte=${voteAverage}`
    })
    return  res.data.results 
}

export const getGenreList = async (): Promise<IGenre[]> => {

    const res = await axios({
        method: 'GET',
        url: `${getUrl(PATH_GENRE)}`
    })
    return  res.data.results
}
