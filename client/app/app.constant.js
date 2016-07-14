(function(angular, undefined) {
  angular.module("imeanApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	],
	"apiRoot": "http://localhost:9000",
	"socketRoot": "http://localhost:9000"
})

;
})(angular);