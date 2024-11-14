import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Import your root module

platformBrowserDynamic()
  .bootstrapModule(AppModule)  // Bootstrap the root module
  .catch(err => console.error(err));
