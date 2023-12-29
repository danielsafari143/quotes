export default function posts(response: string, homepage: string) {
  const val = response.split('-')
  const page = document.getElementById(homepage);
  const quotes = document.getElementById('quotes')
  quotes.innerHTML = ""

  for (let i = 0; i < val.length; i++) {
   quotes.innerHTML += `<p>${val[i]}<p>`
  }
}