const axios = require('axios').default;
const get = async () => {
    const response = await axios.get('https://api.pgamerx.com/v5/joke',{
    headers: '{Authorization:vc5Oepj1vxsS}'
})
return response
}

module.exports.get = get;