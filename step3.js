const fs = require('fs');
const process = require('process');
let path;
let text;
function handleInput(mainFile, optFile){
    if(optFile){
        fs.writeFile(mainFile, optFile, 'utf-8', function(err){
            if(err){
                console.log(err);
            } 
        })
    } else {
        console.log(mainFile)
    }
}

function cat(path, optFile){
    fs.readFile(path, 'utf-8', function(err, data){
        if(err){
            console.log(err)
        } else {
            handleInput(data, optFile)
        }
    })
}

async function webCat(url, optFile){
    const axios = require('axios');

    await axios.get(url)
    .then(function(res){
        handleInput(res.data, optFile)
    })
    .catch(function(err){
        console.log(err)
        process.exit(1)
    })
}

if(process.argv[2] === '--out'){
    path = process.argv[3];
    text = process.argv[4]
} else {
    path = argv[2]
}

if(path.slice(-3) === 'txt'){
    cat(path, text)
} else {
    webCat(path, text)
}
