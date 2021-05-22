function cat(path){
    const fs = require('fs');

    fs.readFile(path, 'utf-8', function(err,data){
        if(err){
            console.log(err);
            process.exit(1)
        }
        console.log(data)
    })
}


function webCat(url){
    const axios = require('axios');

    axios.get(url)
    .then(function(res){
        console.log(res.data)
    })
    .catch(function(err){
        console.log(err)
        process.exit(1)
    })
}

let input = process.argv[2];

if(input.slice(-3) === 'txt'){
    cat(input)
} else {
    webCat(input)
}

