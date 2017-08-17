var google = require('googleapis');
var sheets = google.sheets('v4');
require('dotenv').config();

 request = {
  spreadsheetId: '1yVuMt6LMTlq-4cyvVTvq776Dj0wjJjEulbaX_qWriVs',
  ranges: ['R1C1:R10C10', '\'Learn Mapping\''],
  // includeGridData: false,
  auth: process.env.API_KEY
};

sheets.spreadsheets.values.batchGet(request, function(err, response) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(response.valueRanges[0]);
  console.log(response.valueRanges[1]);
});


// return ID number and an array of survey responses
// 1880 = {
//    [date: '1/9/2017',
      // emotional_state: 'Great!',
//    response: ['Great!', 'The first day was a well-paced and comprehensive exposition to the program.']
  // ],
  // [date: '1/10/2017',
    // emotional_state: 'Great!',
//    response: ['Today was like drinking out of a firehose, but I think I got it all. Roberto did a great job on git and GitHub.!', 'I'm struggling with committing the full git process to memory. I will have to do more repetition on my own time.']
// ]
// }
