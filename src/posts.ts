export default function posts(response: string, homepage: string) {
  const val = response.split("#");
  const page = document.getElementById(homepage);
  const quotes = document.getElementById("quotes");
  quotes.innerHTML = "";

  for (let i = 0; i < val.length; i++) {
    if (val[i].length > 10) {
      quotes.innerHTML += `<p class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">${val[i]}<p>`;
    }
  }
}
