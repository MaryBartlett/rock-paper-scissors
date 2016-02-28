
import controller from './rockPaperScissors.controller'

/**
 * Routing function for rockPaperScissors
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("rockPaperScissors", {
    url: "/",
    template: require("./rockPaperScissors.tpl.html"),
    controller: controller.UID,
    controllerAs: "rockPaperScissors"
  });
}
