# Priority Confectionery App

This Confectionery app represents a simple app built for a confectionery store with a backend powered by Priority.

This demo app is built almost entirely with Priority Ionic library and includes only a small amount of original code.

It serves as a perfect starting point for learning Priority Ionic and building your own app. 

### Preview

![Screenshots](/screenshots/screenshots_app.png?raw=true "")

### Setup

1. Clone this repository:

Run `git clone https://github.com/PrioritySoftware/priority-ionic.git`

2. Install dependencies:

Run `npm install` from the project root.

3. Install the Ionic CLi

Run `npm install -g ionic`.

4. Update configuration with your Priority settings:

In `ionic.config.json` update the `proxyUrl` to the URL of the Priority WCF service.

```js
"proxies": [
    {
      ...
      "proxyUrl": "https://priority_path_to_wcf_service/wcf",
      ...
    }]
```

In `app.component.ts` update the tabula.ini, company, username and password settings.

```js
window['priorityReady'] = () => {
      configService.config({
        url: '',
        tabulaini: 'your_tabula.ini',
        language: 3,
        company: 'your_company',
        appname: '',
        devicename: ''
      });
      configService.logIn('your_username','your_password').then(() =>
      {
        this.nav.setRoot(TabsPage);
      },(err) => {alert(err);});
    }
```

5. Run the app:

Run `ionic serve` from the project root.


