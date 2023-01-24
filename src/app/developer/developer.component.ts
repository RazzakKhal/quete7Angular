import { Component } from '@angular/core';
import { Developer} from '../models/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  myDeveloper = new Developer('Khalfallah', 'Razzak', 25, 'homme', 'cool la vie!', [{
name : 'Angular',
logo : 'logodangular',
site : 'www.monsiteAngular.com'
  }, {
    name : 'Symfony',
    logo : 'logodesymfony',
    site : 'www.monsiteSymfony.com'
  }]);


  constructor(){

  }

}
