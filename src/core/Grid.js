export default function Grid({$app, initState}){

    this.state = initState

    this.$input = document.createElement('input')
    this.$input.className = 'filter'
    this.$input.autofocus = 'true'
    this.$input.placeholder = '검색어를 입력하세요.'
    $app.appendChild(this.$input)

    this.$grid = document.createElement('table')
    this.$grid.className = 'bluetop'
    $app.appendChild(this.$grid)


    this.setState = (nextState) =>{
        this.state = nextState
        this.render()
    }

    let columns = ['사진', '이름', '성별', '나이', '이메일', '가입일']
    const getTbody = (item) =>{
            let {email, gender, name:{first, last}, picture:{medium}, registered:{date, age}} = item
            let name = `${first} ${last}`
            let obj = {'사진':medium, '이름':name, '성별':gender, '나이':age, '이메일':email, '가입일':date}
            let template =
            `
            <tr>
            ${
                Object.values(obj).map((value)=>{
                    let content = value.toString().includes('.jpg') ? `<img src=${value}>` : value
                    return `<td>
                    ${content}
                    </td>`
                })
            }
            </tr>
            `
            return template
    }

    this.render = () => {
        if(this.state){
            this.$grid.innerHTML=
            `
            <thead>
            <tr>
            ${
                columns.map(column=>{
                    return `<th>${column}</th>`
                }).join('')
            }
            </tr>
            </thead>
            <tbody>
            ${
                this.state.map(item=>{
                    return getTbody(item)
                })
            }
            </tbody>
            `
        }
    }

    this.render()
}