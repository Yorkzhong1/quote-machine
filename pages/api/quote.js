import {quotes} from './quotes.js'

function getQuotes(){
    let rand=Math.floor(Math.random()*46)
    return(quotes[rand])
}

export default function send(req, res) {
    let quote = getQuotes()
    // console.log(quote)
    res.send(quote)
  }

  