import Grid from './Grid.js'
import {api} from '../service/api.js'

export default function App($app){

    const grid = new Grid({$app, state: {}})

    const fetchApi = async() =>{
        const data = await api()
        grid.setState(data.results)
    }

    fetchApi()
}