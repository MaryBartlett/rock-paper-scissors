// Import Style
import './rockPaperScissors.scss';


import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import internal modules
import controller from './rockPaperScissors.controller';
import routes from './rockPaperScissors.routes';
import run from './rockPaperScissors.run';

import config from './rockPaperScissors.config';


export default angular.module("rockPaperScissors" , [uirouter])
.config(config)
  .config(routes)
.run(run)
  .controller(controller.UID, controller)
  .name;
