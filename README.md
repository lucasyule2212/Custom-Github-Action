
# Custom Github Action

Custom *Github Action* triggered on Pull Requests events, integrated with the Slack Web-API to send logs to a Slack channel.

## 🛠️ Used Techs

**Programming Language**: Javascript.

**Github**: Github Actions.

**Integrations**: Slack Web-API.





## 🤖 Features

- Triggered by *Pull Request events*:
    - *opened*
    - *closed*
    - *approved*
    - *rejected*
- Integration with the *Slack Web-API*
- Connection via *Slack App* to a Slack Channel
- Send custom message to the Slack Channel containing **Pull Requests informations**





## 📕 Project Ambitions

- Study and practice *Github actions*
- Study and practice YAML files
- Practice integration with 3rd party API.
- Practice events logging



## 🚨 Status
- In Development ⏳
## 🛣️ Roadmap
- [x]  Github Actions configuration
- [x]  Pull requests events trigger  
- [x]  Integration with Slack Web-API
- [ ]  Input configurations in order to enable it to any others projects

## ❗ Known Issues
**Nothing yet...**


## ⚙️ How to use it
You can easily integrate this action to your projects by following the steps below:
1. Copy both files `action.yml` and `notify.js` to your project's `.github/workflows` folder.
2. As it is integrated with the Slack Web-API, you need a SLACK API TOKEN. You can get one by creating a Slack App and installing it to your workspace. You can follow the steps in the [Slack API Documentation](https://api.slack.com/start/quickstart#creating).
3. After getting your Slack API Token, you need to create a Github Secret in your repository. You can do it by going to `Settings > Secrets > New repository secret`. The name of the secret must be `SLACK_API_TOKEN` and the value must be your Slack API Token.
4. After that, you're good to go! Just create a Pull Request and see the magic happening! 🎉

Another good information is that this action is reusable, so after you first instanciate in one of your projects you can call in any other project using the code below in your workflow:
```
Uses:
USER_OR_ORG_NAME/REPO_NAME/.github/workflows/REUSABLE_WORKFLOW_FILE.yml@TAG_OR_BRANCH
```
You can find more information about reusable actions in this [Github Blog post](https://github.blog/2022-02-10-using-reusable-workflows-github-actions/).


## 🖼️ Screenshots
![intro](https://cdn.discordapp.com/attachments/1154186775581966437/1164417616396427324/image.png?ex=65432369&is=6530ae69&hm=ff4d73bcc05ce43178d93bf27faa80e6ee38be5ed17f161b5c4b8cec2378204e&)

