import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  console.log('Enabled prod');
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    if (environment.isPWAEnabled && 'serviceWorker' in navigator ) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => console.log('SW registration successful with scope: ', registration.scope));
    }
  })
  .catch(err => console.error(err));
