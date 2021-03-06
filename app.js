export class Welcome{
  heading = 'Welcome to the adiana Navigation App!';
  firstName = 'adiana';
  lastName = 'gustian';

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
    alert(`Welcome, ${this.fullName}!`);
  }
}
import 'bootstrap';

export class App {
  configureRouter(config, router){
    config.title = 'adiana';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title:'Welcome' }
    ]);

    this.router = router;
  }
}
