(function(angular, undefined) {
  angular.module("imeanApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	],
	"apiRoot": "http://local.host:9000",
	"socketRoot": "http://local.host:9000"
})

;
})(angular);