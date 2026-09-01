const https = require('https');
https.get('https://api.gdeltproject.org/api/v2/doc/doc?query=war&mode=pointdata&format=geojson&maxrecords=2', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => console.log(data));
});
