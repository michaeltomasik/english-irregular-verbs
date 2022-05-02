

function paginate (arrayOfWords) {
    let chunked = []
    for (let i = 0; i < arrayOfWords.length; i += 10) {
        let chunk = arrayOfWords.slice(i, i + 10)
        chunked.push(chunk)
    }
    return chunked
}

export default paginate