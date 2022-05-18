export default function Grid({ $app, initState, onSearch }) {

    this.state = initState
    this.onSearch = onSearch

    this.$input = document.createElement('input')
    this.$input.className = 'filter'
    this.$input.autofocus = 'true'
    this.$input.placeholder = '이름을 입력하세요.'
    $app.appendChild(this.$input)

    this.$grid = document.createElement('table')
    this.$grid.className = 'bluetop'
    $app.appendChild(this.$grid)


    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if (this.state.results) {
            this.$grid.innerHTML =
                `
            <thead>
            <tr>
            ${Object.keys(this.state.results[0]).map(column => {
                    return `<th>${column}</th>`
                }).join('')
                }
            </tr>
            </thead>
            <tbody>
            ${this.state.results.map(result => {
                    return `<tr>
                    ${Object.values(result).map(value => {
                        let content = value.toString().includes('.jpg') ? `<img src=${value}></img>` : value
                        return `
                        <td>${content}</td>
                        `
                    }).join('')} </tr>`
                })
                }
            </tbody>
            `
        }
    }
    this.$input.addEventListener('keyup', (e) => {
        try{
            let nextData = this.state.data.filter(el =>
            el['이름']
            .replace(' ','')
            .toLowerCase() 
            .includes(e.target.value.toLowerCase())) // 대소문자 모두 포함
            if (nextData != null) {
                this.setState({
                    ...this.state,
                    results: nextData
                })
            }
        } catch{
            return
        }
    })

    this.$input.addEventListener('click', (e)=>{ // 인풋 클릭 시 초기화
        if(e.target.value!=''){
            e.target.value=''
            this.setState({
                ...this.state,
                results: this.state.data
            })
        }
    })
}