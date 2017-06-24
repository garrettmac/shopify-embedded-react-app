
## Shopify Embedded Heroku React App

Simple express app with oauth flow for Shopify embedded app. The embedded app itself uses react and the  [Polaris React components from Shopify itselft!](https://polaris.shopify.com/components/get-started)
## Install

Using NPM:
```bash
npm install
```
Using Yarn:
```bash
yarn install
```
## Setup

Change the file `example.env` to `.env` and populate your the `SHOPIFY_APP_SECRET` and `SHOPIFY_REDIRECT_URI` from your Shopify Partner Dashboard at `https://partners.shopify.com/<PARTNER_ID>/apps/<APP_ID>/edit`) then add your default app url and your redirect url, then update your `SHOPIFY_REDIRECT_URI`, by default the `SHOPIFY_REDIRECT_URI` routes to `/callback`.

![screen shot 2017-06-23 at 11 14 23 pm](https://user-images.githubusercontent.com/5916111/27505938-e179f7e8-5869-11e7-8a61-05a4aebe03cb.png)

## Build

### Development

To run your app inside the Shopify Embedded View it needs to be over the **https protocol**. To avoid having to re-deploy for every time you make a change you can use [ngrok](https://ngrok.com)  to tunnel your localhost over the **https** ([download here](https://ngrok.com/download)).

After you've downloaded the ngrok shell, drag it to the root of your project and it's ready to use.
From the root folder run:

 ```
./ngrok http 3000
```
to run in open terminal window, or run

```
nohup ./ngrok http 3000 &
```
 to have it run in the background.

it should output the url it's serving over **https** and look something like `https://8763d711.ngrok.io/`, if you run in the background you can visit `http://localhost:4040/inspect/http` to see where `ngrok` is serving your app.


### Production

**Setup Heroku**

build then run
```
heroku git:remote -a your-app-name
git add .
git commit -m "This is an example of a heroku deployment."
git push heroku master
```

## Run
To start the express server run
```
npm start
```
To bundle and watch react
```
npm run build
```

Now visit your ngrok address `https://8763d711.ngrok.io/` (also viewable at `http://localhost:3000`) and it should redirect you to `/install` if you haven't already installed the app and look something like:

![Screenshot](http://res.cloudinary.com/dp2g0poix/image/upload/v1498236540/Screen_Shot_2017-06-23_at_11.47.14_pvghlj.png)

once you install your dashboard will look something like this.


![screen shot 2017-06-23 at 11 15 13 pm](https://user-images.githubusercontent.com/5916111/27505937-e179b634-5869-11e7-8304-a4577bf332af.png)
