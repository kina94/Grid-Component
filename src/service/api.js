const API_URL = 'https://randomuser.me/api/?results=50&inc=picture,name,gender,email,phone,registered&noinfo'
export const api = async() => {
    try{
        const res = await fetch(API_URL)
        if(res.ok) return res.json()
    }catch(e){
        throw new Error(`에러 발생! ${e.message}, ${e.status}`)
    }
}