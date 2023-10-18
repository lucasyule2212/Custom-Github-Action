const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(process.env.SLACK_API_TOKEN, {
  logLevel: LogLevel.DEBUG
});

async function findConversation(name) {
  try {
    const result = await client.conversations.list({
      token: process.env.SLACK_API_TOKEN
    });

    const channelId = result.channels.find(channel => channel.name === name).id;

    return channelId;
  }
  catch (error) {
    console.error(error);
  }
}

async function publishMessage({message}) {
  try {
    const result = await client.chat.postMessage({
      token:  process.env.SLACK_API_TOKEN,
      channel: message.channel,
      blocks: message.blocks
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
}

const messageTitleByState = {
  opened: "*🚀 New Pull Request!*",
  closed: "*🚨 Pull Request Closed!*",
  approved: "*👍 Pull Request Approved!*",
  rejected: "*👎 Pull Request Rejected!*",
}

async function notifySlack() {
  const pullRequestData = {
    id: process.env.PULL_REQUEST_ID,
    title: process.env.PULL_REQUEST_TITLE,
    url: process.env.PULL_REQUEST_URL,
    author: process.env.PULL_REQUEST_AUTHOR,
    state: process.env.PULL_REQUEST_STATE,
  };

  console.log(pullRequestData);

  const channelId = await findConversation("custom-github-action");

  const message = {
    channel: channelId,
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `${messageTitleByState[pullRequestData.state]}`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Id:*\n${pullRequestData.id}\n*Title:*\n${pullRequestData.title}\n*Author:*\n ${pullRequestData.author}\n*State:*\n ${pullRequestData.state}\n*URL:*\n < ${pullRequestData.url}>`
        },
        "accessory": {
          "type": "image",
          "image_url": "https://api.slack.com/img/blocks/bkb_template_images/approvalsNewDevice.png",
          "alt_text": "computer thumbnail"
        }
      }
    ]
  }


  await publishMessage({message});

}

notifySlack();