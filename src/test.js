const url = "https://edu.goorm.io/qna/13152?name=101010"
const queries = {}
if (url) {
    if(url.includes("?")) {
        var query = url.split('?')[1].split('&')
        if (query != '') {
            for (var i = 0; i < query.length; i++) {
                const seperateQuery = query[i].split('=')
                queries[seperateQuery[0].toString()] = seperateQuery[1].toString().toString()
            }
        }
    }

}

console.log(queries)


