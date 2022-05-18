import Grid from './Grid.js'
import { api } from '../service/api.js'

export default function App($app) {
    const grid = new Grid({ $app, initState: {} })

    const getProcessedData = async () => {
        const datas = await fetchApi()
        let obj = datas.map(data => {
            let { email, gender, name: { first, last }, picture: { medium }, registered: { date, age } } = data
            let name = `${first} ${last}`
            return { '사진': medium, '이름': name, '성별': gender, '나이': age, '이메일': email, '가입일': date }
        })
        grid.setState({
            results: [...obj],
            data: [...obj]
        })
    }

    const fetchApi = async () => {
        const data = await api()
        return data.results
    }

    getProcessedData()
}