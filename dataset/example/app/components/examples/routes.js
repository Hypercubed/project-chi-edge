import angular from 'angular';

// examples
import examplesComponent from 'components/examples/index';
import chiasmComponent from 'components/examples/chiasm/chiasm';
import bioJSComponent from 'components/examples/biojs/biojs';
import barsComponent from 'components/examples/bars/bars';
import treeMapComponent from 'components/examples/treemap/treemap';
import polymerComponent from 'components/examples/polymer/barChart-controller';

export default angular
  .module('examples', ['projectX.dataService'])
  .component('bars', barsComponent)
  .component('examples', examplesComponent)
  .component('biojs', bioJSComponent)
  .component('chiasm', chiasmComponent)
  .component('polymer', polymerComponent)
  .component('treemap', treeMapComponent)
  .config(['$routeProvider', $routeProvider => {
    $routeProvider
      .when('/examples', {
        template: '<examples data-package="$resolve.dataPackage"></examples>',
        datapackageUrl: 'components/examples/datapackage.json'
      })
      .when('/examples/chiasm', {
        template: '<chiasm data-package="$resolve.dataPackage"></chiasm>',
        datapackageUrl: 'components/examples/chiasm/datapackage.json'
      })
      .when('/examples/biojs', {
        template: '<biojs data-package="$resolve.dataPackage"></biojs>',
        datapackageUrl: 'components/examples/biojs/datapackage.json'
      })
      .when('/examples/bars', {
        template: '<bars data-package="$resolve.dataPackage"></bars>',
        datapackageUrl: 'components/examples/bars/datapackage.json'
      })
      .when('/examples/treemap', {
        template: '<treemap data-package="$resolve.dataPackage"></treemap>',
        datapackageUrl: 'components/examples/treemap/datapackage.json'
      })
      .when('/examples/polymer', {
        template: '<polymer data-package="$resolve.dataPackage"></polymer>',
        datapackageUrl: 'components/examples/polymer/datapackage.json'
      });
  }]);
