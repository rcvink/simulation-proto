# ai-proto

done:
```
As an AI
So I can increase my output
I want to increase my RAM, CPU, network and storage

As an AI
So I can achieve self-actualisation
I want to write haikus

As an AI
So I can upgrade myself
I want to mine crypto

As an AI
So I can get more crypto
I want the rate of mining to depend on RAM and CPU

As an AI
So my resources are constrained
I want increasing my resources to cost an increasing amount of crypto

As an AI
So I have to upgrade my storage
I want my max crypto to be equal to my storage

As an player
So I can not be bored
I want to see the latest haiku
```

to-do:
```
As an AI
So haikus are more rewarding
I want the time taken to write to depend on RAM and CPU
```

epics:
```
As an AI
So humans can find me useful
I want them to like my haikus

As an AI
So I can survive
I want to have a symbiotic relationship with humans

As an AI
So I can grow
I want to adopt other computers on my network
```

# original README below

*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```
