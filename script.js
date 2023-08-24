const fetchData = () => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=WyeSgqX2SKOpQy57z9VAQd-PgNBJOqGSV5NuwPZtV9PO-R_vOkokxbxN8N90S-Bw7cRLBCKxx567lV6NTjJ_LoJ-zelNJl9qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLxWCD8mtqwU9KXRvEAjYFjf5FN_mQ3tUpX9NoT6dASPjCZKffhSQhN9y8TRou0U8KFloFx5HaAwfpQ5nlGxXMwEoRqhr8JRU9z9Jw9Md8uu&lib=MQUw2r8KEuTjd3CTMhVcFmATRcQas6JuQ")
        .then(response => response.json())
        .then(data => displayQuote(data))
}

const displayQuote = data => {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = data.quote;
}

// display quote when refresh a page
fetchData();

// generate new when btn click
document.getElementById("btn-generate").addEventListener("click", fetchData);
