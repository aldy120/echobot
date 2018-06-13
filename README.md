# Echobot
一個簡單的回音機器人

# 如何使用
## Clone the project
先把本專案 clone 下來。

```
git clone https://github.com/aldy120/echobot.git
```
## 建立 local.yml 檔案
建立一個 local.yml 檔案，內容類似下面這樣，其中 token 要填寫 slack 給你的 bot OAuth token 。此 token 必須可以 send message 。

```yml
slack:
  accessToken: "xoxb-378109980932-380826327059-XXXXXXXXXXLHWnjbTtdkXXXX"
```

## Deploy
把 `serverless.yml` 的 profile 換成自己的 AWS account ， 詳情請洽 [named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html)，