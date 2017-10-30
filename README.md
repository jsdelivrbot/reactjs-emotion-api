# reactjs-emotion-api

This is a front-end app written in reactJS to test the WATSON API.

The context:

Shakespeare’s play Henry IV part I scripts are metered and have their emotion value scored according to the rating given by the WATSON EMOTION API.

Actors and the emotion graphs are displayed.

A sample output is shown in the 'sample out screenshot.png'.

To run: 
  - download the source codes (node modules dependency are already provided)
  - enter 'npm start' in the command line
  - click the Play button


This is still a work in progress.
To dos:
  - Enable to work the Axios RESTful query without any cross-site issue.
  - Improve the look and feel
  - Add the script view that is currently playing
  - Add unit tests

Caveat:

Since the Axios RESTful query is not possible without an API-KEY for the WATSON EMOTION API, the response payload is simulated as an array of random decimal numbers.
   
   
