import { Component, Prop } from '@stencil/core';
import * as CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  @Prop({context: 'isServer'}) private isServer: boolean;

  authenticate() {
    console.log('begin authentication');
    if (this.isServer) {
      console.log('on server');
      return
    }
    console.log('on client');
    const cisp = new CognitoIdentityServiceProvider();
    console.log('CISP: ', cisp);
  }

  render() {
    this.authenticate();

    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
