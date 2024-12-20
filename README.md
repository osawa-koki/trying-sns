# cdk-template

🏸🏸🏸 Amazon SNSを使ってみる！  

![成果物動画](./fruit.gif)  

## 実行方法

`.env.example`をコピーして`.env`ファイルを作成します。  
中身を適切に設定してください。  

DevContainerに入り、以下のコマンドを実行します。  
※ `~/.aws/credentials`にAWSの認証情報があることを前提とします。  

```shell
cdk bootstrap
cdk synth
cdk deploy --require-approval never --all
```

リソースのプロビジョニング後に、サブスクリプションの確認を行う必要があります。  
`.env`ファイルで指定した、`SNS_SUBSCRIPTION_URL (SubscribeURLプロパティ)`と`SNS_SUBSCRIPTION_EMAIL (Confirm subscriptionリンク)`にそれぞれ確認用のリンクが設定されています。  
リンクを開くと、サブスクリプションの確認が完了します。  

確認が完了したら、`publish.sh`を実行してメッセージを送信します。  

```shell
./publish.sh
```

EメールとHTTPエンドポイントにメッセージが送信されます。  

---

GitHub Actionsでデプロイするためには、以下のシークレットを設定してください。  

| シークレット名 | 説明 |
| --- | --- |
| AWS_ACCESS_KEY_ID | AWSのアクセスキーID |
| AWS_SECRET_ACCESS_KEY | AWSのシークレットアクセスキー |
| AWS_REGION | AWSのリージョン |
| DOTENV | `.env`ファイルの内容 |

タグをプッシュすると、GitHub Actionsがデプロイを行います。  
手動でトリガーすることも可能です。  
