'use strict';
const { WebClient } = require('@slack/client')
const token = process.env.ACCESS_TOKEN
const web = new WebClient(token)

function isBot(body) {
  return !!body.event.bot_id
}

module.exports.event = (event, context, callback) => {
  console.log(event)
  const body = event.body && JSON.parse(event.body)

  // verfied event api challnege token
  if (body && body.type === 'url_verification') {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        challenge: body.challenge
      })
    }

    callback(null, response)
    return
  }

  //process channel message
  const text = body.event.text
  const conversationId = body.event.channel
  console.log(text, conversationId)

  // do not response a bot
  if (isBot(body)) {
    console.log('This is a bot so I will not reply')
    callback(null, {
      statusCode: 200
    });
    return 
  }

  web.chat.postMessage({
    text: text,
    channel: conversationId
  }).then((res) => {
    console.log('Message sent: ', res.ts)
    console.log(res)
  }).catch(console.error)

  callback(null, {
    statusCode: 200
  });
}