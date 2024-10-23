document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = process.env.BASE_URL;
  const API_KEY = process.env.API_KEY;

  const button = document.querySelector("button");
  const giphyInput = document.querySelector("input");

  button.addEventListener("click", async () => {
    let giphy = giphyInput.value;
    try {
      const response = await axios.get(
        `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25`
      );
      // console.log(response.data.data);
      let gif = response.data.data;

      for (let i = 0; i < gif.length; i++) {
        // grab url property from a certain size
        let giphyLink = gif[i].images.fixed_height_small.url;
        //  console.log(giphyLink);
         // put in image tag and display on page
        let NewImg = document.createElement("img");
        NewImg.setAttribute("src", giphyLink);
        document.querySelector("div").appendChild(NewImg);


      }
    } catch (error) {
      console.log(error);
    }
  });
});
