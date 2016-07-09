'use strict';

describe('Directive: oauthButtons', function() {

  // load the directive's module and view
  beforeEach(module('imeanApp'));
  beforeEach(module('components/oauth-buttons/oauth-buttons.html'));

  var element, parentScope, elementScope;

  var compileDirective = function(template) {
    inject(function($compile) {
      element = angular.element(template);
      element = $compile(element)(parentScope);
      parentScope.$digest();
      elementScope = element.isolateScope();
    });
  };

  beforeEach(inject(function($rootScope) {
    parentScope = $rootScope.$new();
  }));

  it('should evaluate and bind the classes attribute to scope.classes', function() {
    parentScope.scopedClass = 'scopedClass1';
    compileDirective('<oauth-buttons classes="testClass1 {{scopedClass}}"></oauth-buttons>');
    expect(elementScope.classes)
      .to.equal('testClass1 scopedClass1');
  });

});
