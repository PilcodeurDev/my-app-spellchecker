import axios from 'axios';

export default async function (req, res) {
  //console.log(Object.keys(req));

  await new Promise((resolve, reject) => {
    req.on('data', (data) => {
      let payload = JSON.parse(data.toString());

      if (req.method === 'POST') {
        const options = {
          method: 'POST',
          url: 'https://grammarbot.p.rapidapi.com/check',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'x-rapidapi-host': 'grammarbot.p.rapidapi.com',
            'x-rapidapi-key': process.env.NUXT_PUBLIC_RAPIDAPI_KEY,
          },
          params: { text: payload.text, language: 'en-US' },
        };

        axios.request(options)
          .then(response => {
            console.log(response.data);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data));
            resolve();
          })
          .catch(error => {
            console.error(error);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            resolve();
          });
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Bad Request' }));
        resolve();
      }
    });
  });
}
