angular.module('ireava', ['ngRoute']).controller('main', main).controller('homeController', homeController).controller('aboutController', aboutController).controller('modulesController', modulesController).controller('brandController', brandController).controller('schoolController', schoolController).controller('priceController', priceController).controller('partnerController', partnerController).controller('schoolerpController', schoolerpController).controller('instituteerpController', instituteerpController).controller('collegeerpController', collegeerpController).controller('websiteController', websiteController).controller('elearningController', elearningController).controller('smartcardController', smartcardController).controller('termsController', termsController).controller('refundpolicyController', refundpolicyController).controller('smsController', smsController).controller('busController', busController).controller('biometricController', biometricController).controller('docsController', docsController).controller('showcaseController', showcaseController).controller('contactController', contactController).controller('viewController', viewController).config(config);
function config($locationProvider, $routeProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: true
	});
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	}).when('/modules', {
		templateUrl: 'pages/modules.html',
		controller: 'modulesController'
	}).when('/about-ireava', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	}).when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	}).when('/pricing', {
		templateUrl: 'pages/pricing.html',
		controller: 'priceController'
	}).when('/smart-attendance', {
		templateUrl: 'pages/smart-card.html',
		controller: 'smartcardController'
	}).when('/rfid-biometric', {
		templateUrl: 'pages/rfid-biometric.html',
		controller: 'biometricController'
	}).when('/bus-tracking', {
		templateUrl: 'pages/bus-tracking.html',
		controller: 'busController'
	}).when('/partnership', {
		templateUrl: 'pages/reseller.html',
		controller: 'partnerController'
	}).when('/sms', {
		templateUrl: 'pages/sms.html',
		controller: 'smsController'
	}).when('/website', {
		templateUrl: 'pages/website.html',
		controller: 'websiteController'
	}).when('/elearning', {
		templateUrl: 'pages/elearning.html',
		controller: 'elearningController'
	}).when('/school-erp', {
		templateUrl: 'pages/schoolerp.html',
		controller: 'schoolerpController'
	}).when('/institute-erp', {
		templateUrl: 'pages/instituteerp.html',
		controller: 'instituteerpController'
	}).when('/college-erp', {
		templateUrl: 'pages/collegeerp.html',
		controller: 'collegeerpController'
	}).when('/schools', {
		templateUrl: 'pages/schools.html',
		controller: 'schoolController'
	}).when('/brand-building', {
		templateUrl: 'pages/brandbuilding.html',
		controller: 'brandController'
	}).when('/showcase', {
		templateUrl: 'pages/showcase.html',
		controller: 'showcaseController'
			}).when('/docs', {
		templateUrl: 'pages/docs.html',
		controller: 'docsController'
	}).when('/tandc', {
		templateUrl: 'pages/tandc.html',
		controller: 'termsController'
			}).when('/refund-policy', {
		templateUrl: 'pages/refund-policy.html',
		controller: 'refundpolicyController'
	}).when('/attendance-management', {
		templateUrl: 'pages/viewpages/attendanceview.html',
		controller: 'viewController'
	}).when('/fees-management', {
		templateUrl: 'pages/viewpages/feesview.html',
		controller: 'viewController'
	}).when('/admission-management', {
		templateUrl: 'pages/viewpages/admissionview.html',
		controller: 'viewController'
	}).when('/student-management', {
		templateUrl: 'pages/viewpages/studentview.html',
		controller: 'viewController'
	}).when('/human-resource', {
		templateUrl: 'pages/viewpages/hrview.html',
		controller: 'viewController'
	}).when('/academics-management', {
		templateUrl: 'pages/viewpages/academicsview.html',
		controller: 'viewController'
	}).when('/examination-management', {
		templateUrl: 'pages/viewpages/examinationview.html',
		controller: 'viewController'
	}).when('/scholarship-exam', {
		templateUrl: 'pages/viewpages/scholarshipview.html',
		controller: 'viewController'
	}).when('/communication-management', {
		templateUrl: 'pages/viewpages/communicationview.html',
		controller: 'viewController'
	}).when('/homework-management', {
		templateUrl: 'pages/viewpages/homeworkview.html',
		controller: 'viewController'
	}).when('/reports-and-certificates', {
		templateUrl: 'pages/viewpages/reportsview.html',
		controller: 'viewController'
	}).when('/accounting-management', {
		templateUrl: 'pages/viewpages/accountsview.html',
		controller: 'viewController'
	}).when('/transport-management', {
		templateUrl: 'pages/viewpages/transportview.html',
		controller: 'viewController'
	}).when('/hostel-management', {
		templateUrl: 'pages/viewpages/hostelview.html',
		controller: 'viewController'
	}).when('/library-management', {
		templateUrl: 'pages/viewpages/libraryview.html',
		controller: 'viewController'
	}).when('/inventory-management', {
		templateUrl: 'pages/viewpages/inventoryview.html',
		controller: 'viewController'
	}).when('/smart-dashboard', {
		templateUrl: 'pages/viewpages/dashboardview.html',
		controller: 'viewController'
	}).when('/customized-setting', {
		templateUrl: 'pages/viewpages/customizationview.html',
		controller: 'viewController'
	}).when('/liveclass-system', {
		templateUrl: 'pages/viewpages/liveclass.html',
		controller: 'viewController'
	}).when('/content-system', {
		templateUrl: 'pages/viewpages/contentsystem.html',
		controller: 'viewController'
	}).when('/receptiondesk', {
		templateUrl: 'pages/viewpages/frontdeskview.html',
		controller: 'viewController'
	}).when('/additional-features', {
		templateUrl: 'pages/viewpages/additionalview.html',
		controller: 'viewController'
	}).when('/online-exam', {
		templateUrl: 'pages/viewpages/onlinetestview.html',
		controller: 'viewController'
	}).when('/live-classes', {
		templateUrl: 'pages/viewpages/liveclassesview.html',
		controller: 'viewController'
	}).when('/form-builder', {
		templateUrl: 'pages/viewpages/formbuilderview.html',
		controller: 'viewController'
	}).when('/lesson-plan', {
		templateUrl: 'pages/viewpages/lessonplan.html',
		controller: 'viewController'
	}).when('/alumni', {
		templateUrl: 'pages/viewpages/alumni.html',
		controller: 'viewController'
	}).when('/chat', {
		templateUrl: 'pages/viewpages/chatview.html',
		controller: 'viewController'
	}).when('/startup-guide', {
		templateUrl: 'pages/viewpages/guide.html',
		controller: 'viewController'
	}).when('/custom-certificate', {
		templateUrl: 'pages/viewpages/customcertificateview.html',
		controller: 'viewController'
	}).when('/online-admission', {
		templateUrl: 'pages/viewpages/onlineadmissionview.html',
		controller: 'viewController'
	}).when('/documents-and-activities-manager', {
		templateUrl: 'pages/viewpages/docsandactivitiesview.html',
		controller: 'viewController'
	}).when('/website-builder', {
		templateUrl: 'pages/viewpages/websitebuilderview.html',
		controller: 'viewController'
	}).when('/event-management', {
		templateUrl: 'pages/viewpages/eventview.html',
		controller: 'viewController'
	}).when('/task-management', {
		templateUrl: 'pages/viewpages/taskview.html',
		controller: 'viewController'
	}).when('/leave-management', {
		templateUrl: 'pages/viewpages/leaveview.html',
		controller: 'viewController'
	}).when('/multi-branch', {
		templateUrl: 'pages/viewpages/multischoolview.html',
		controller: 'viewController'
	}).when('/ireavalearning', {
		templateUrl: 'pages/viewpages/ireavalearning.html',
		controller: 'viewController'
		}).when('/custom-payment-forms', {
		templateUrl: 'pages/viewpages/custom-payment-forms.html',
		controller: 'viewController'
	}).when('/student-rewards', {
		templateUrl: 'pages/viewpages/student-rewards.html',
		controller: 'viewController'
	}).otherwise({
		redirectTo: '/'
	})
};

function main($scope) {};

function homeController($scope, $window, $http) {
	$window.scrollTo(0, 0);
	$scope.phone = phonenumber;
	$scope.homel1_1 = homeline1_1;
	$scope.homel1_2 = homeline1_2;
	$scope.homel1_3 = homeline1_3;
	$scope.homel1_4 = homeline1_4;
	$scope.homel2_1 = homeline2_1;
	$scope.homel2_2 = homeline2_2;
	$scope.homel2_3 = homeline2_3;
	$scope.homel2_4 = homeline2_4;
	$scope.homel3 = homeline3;
	$scope.homel4 = homeline4;
	$scope.homel5 = homeline5;
	$scope.homel6 = homeline6;
	$scope.homel7 = homeline7;
	$scope.homelt1 = homelist1;
	$scope.homelt2 = homelist2;
	$scope.homelt3 = homelist3;
	$scope.homelt4 = homelist4;
	$scope.homelt5 = homelist5;
	$scope.basicerp2 = basicerp2;
};

function modulesController($rootScope, $scope, $window, $http) {
	$window.scrollTo(0, 0);
	$scope.$on('$routeChangeSuccess', function (event, data) {
        $scope.hd_page_title = data.title;
    });
	$scope.modulel1 = moduleline1;
	$scope.moduleslist = moduledetail;
};

function priceController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.pricel1 = priceline1;
	$scope.pricel2 = priceline2;
	$scope.pricel3 = priceline3;
	$scope.pathb1 = pathlineb1;
	$scope.pathb2 = pathlineb2;
	$scope.pathb3 = pathlineb3;
	$scope.paths1 = pathlines1;
	$scope.pathp1 = pathlinep1;
	$scope.pathp2 = pathlinep2;
	$scope.pathp3 = pathlinep3;
	$scope.pathp4 = pathlinep4;
	$scope.phone = phonenumber;
	$scope.whatsapp = whatsappnumber;
	$scope.basic = basicplan;
	$scope.standard = standardplan;
	$scope.premium = premiumplan;
	$scope.standard11 = standard11plan;
};

function contactController($scope, $window, $http) {
	$window.scrollTo(0, 0);
	$scope.errors = {};
	$scope.contact = {};
	$scope.contact.name = "";
	$scope.contact.email = "";
	$scope.contact.number = "";
	$scope.contact.schoolname = "";
	$scope.contact.message = "";
	$scope.saveContactDetail = function (contact) {
		console.log($scope.contact);
		$scope.contactError = false;
		$scope.errors.contactMsg = "";
		if ($scope.contact.name == null || $scope.contact.name == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter Name.';
			return false;
		}
		if ($scope.contact.email == null || $scope.contact.email == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter Email.';
			return false;
		}
		if ($scope.contact.number == null || $scope.contact.number == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter Number.';
			return false;
		}
		if ($scope.contact.message == null || $scope.contact.message == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter Message.';
			return false;
		}
		$scope.contactError = true;
		$scope.errors.contactMsg = 'Loading...';
		return $http.get('contactus-process.php?name=' + $scope.contact.name + '&email=' + $scope.contact.email + '&number=' + $scope.contact.number + '&message=' + $scope.contact.message).then(function (response) {
			if (response.data) {
				$scope.contactError = true;
				$scope.errors.contactMsg = response.data;
				$scope.contact.name = "";
				$scope.contact.email = "";
				$scope.contact.number = "";
				$scope.contact.schoolname = "";
				$scope.contact.message = "";
				return null;
			} else {
				console.log(response.data);
				return response.data;
			}
		});
	}
};

function preorderController($scope, $window, $http) {
	$window.scrollTo(0, 0);
	$scope.errors = {};
	$scope.contact = {};
	$scope.contact.name = "";
	$scope.contact.email = "";
	$scope.contact.number = "";
	$scope.contact.schoolname = "";
	$scope.saveContactDetail = function (contact) {
		console.log($scope.contact);
		$scope.contactError = false;
		$scope.errors.contactMsg = "";
		if ($scope.contact.name == null || $scope.contact.name == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter Name.';
			return false;
		}
		if ($scope.contact.email == null || $scope.contact.email == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter Email.';
			return false;
		}
		if ($scope.contact.number == null || $scope.contact.number == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter Number.';
			return false;
		}
		if ($scope.contact.schoolname == null || $scope.contact.schoolname == "") {
			$scope.contactError = true;
			$scope.errors.contactMsg = 'Please Enter School Name.';
			return false;
		}
		$scope.contactError = true;
		$scope.errors.contactMsg = 'Loading...';
		return $http.get('contact-process.php?name=' + $scope.contact.name + '&email=' + $scope.contact.email + '&number=' + $scope.contact.number + '&schoolname=' + $scope.contact.schoolname).then(function (response) {
			if (response.data) {
				$scope.contactError = true;
				$scope.errors.contactMsg = response.data;
				$scope.contact.name = "";
				$scope.contact.email = "";
				$scope.contact.number = "";
				$scope.contact.schoolname = "";
				return null;
			} else {
				console.log(response.data);
				return response.data;
			}
		});
	}
};

function partnerController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.resellerl1 = resellerline1;
	$scope.resellerl2 = resellerline2;
	$scope.resellerl3 = resellerline3;
	$scope.resellerl4 = resellerline4;
	$scope.resellerl5 = resellerline5;
	$scope.resellerl6 = resellerline6;
	$scope.resellerl7 = resellerline7;
	$scope.whatsapp = whatsappnumber;
	$scope.phone = phonenumber;
	$scope.mail = mailid;
	$scope.resellerp = resellerplan;
	$scope.resellerbenefit = resellerbenefits;
	$scope.resellerp1 = resellerplan1;
};

function smartcardController($scope, $window, $http) {
	$window.scrollTo(0, 0);
	$scope.smartcardl1 = smartcardline1;
	$scope.smartcardl2 = smartcardline2;
	$scope.smartcardl3 = smartcardline3;
	$scope.smartcardl4 = smartcardline4;
	$scope.smartcardl5 = smartcardline5;
	$scope.smartcardlt1 = smartcardlist1;
	$scope.smartcardlt2 = smartcardlist2;
	$scope.phone = phonenumber;
};

function busController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.aisfeatures1 = aisfeatures;
};

function termsController($scope, $window) {
	$window.scrollTo(0, 0);
};

function refundpolicyController($scope, $window) {
	$window.scrollTo(0, 0);
};

function viewController($scope, $window) {
	$window.scrollTo(0, 0);
};

function smsController($scope, $window) {
	$window.scrollTo(0, 0);
};

function websiteController($scope, $window) {
	$window.scrollTo(0, 0);
};

function elearningController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.holo1 = hologramline1;
	$scope.holo2 = hologramline2;
	$scope.holo3 = hologramline3;
	$scope.holo4 = hologramline4;
	$scope.holo5 = hologramline5;
	$scope.holo6 = hologramline6;
	$scope.holo7 = hologramline7;
	$scope.holo8 = hologramline8;
	$scope.holo9 = hologramline9;
	$scope.holo10 = hologramline10;	
	$scope.holo11 = hologramline11;
	$scope.holo12 = hologramline12;
	$scope.holo13 = hologramline13;
	$scope.holo14 = hologramline14;
	$scope.holo15 = hologramline15;
	$scope.holo16 = hologramline16;
	$scope.holo17 = hologramline17;
	$scope.hololist1 = hologramlist1;
	$scope.hololist2 = hologramlist2;
	$scope.whatsapp = whatsappnumber;
};

function aboutController($scope, $window) {
	$window.scrollTo(0, 0);
};

function schoolerpController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.basicerp1 = basicerp;
	$scope.standarderp1 = standarderp;
	$scope.premiumerp1 = premiumerp;
	$scope.lmsml1 = lmsmlist1;
	$scope.stdappm1 = stdappmlist1;
	$scope.stfappm1 = stfappmlist1;
	$scope.digilibm1 = digilibmlist1;
	$scope.addm1 = addmlist1;
};

function instituteerpController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.ierpml1 = ierpmlist1;
	$scope.ilmsml1 = ilmsmlist1;
	$scope.istdappm1 = istdappmlist1;
	$scope.istfappm1 = istfappmlist1;
	$scope.iaddm1 = iaddmlist1;
};

function collegeerpController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.cerpml1 = cerpmlist1;
	$scope.clmsml1 = clmsmlist1;
	$scope.cstdappm1 = cstdappmlist1;
	$scope.cstfappm1 = cstfappmlist1;
	$scope.cdigilibm1 = cdigilibmlist1;
	$scope.caddm1 = caddmlist1;
};

function biometricController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.biometricl1 = biometricline1;
	$scope.biometricl2 = biometricline2;
	$scope.biometricl3 = biometricline3;
	$scope.biometricl4 = biometricline4;
	$scope.biometricl5 = biometricline5;
	$scope.biometriclt1 = biometriclist1;
	$scope.biometriclt2 = biometriclist2;
	$scope.phone = phonenumber;
};

function brandController($scope, $window) {
	$window.scrollTo(0, 0);
};

function docsController($scope, $window) {
	$window.scrollTo(0, 0);
};

function schoolController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.homelt1 = homelist1;
	$scope.school1 = schooline1;
	$scope.school2 = schooline2;
	$scope.school3 = schooline3;
	$scope.school4 = schooline4;
	$scope.footerlt = footerlinktext;
	$scope.footerl = footerlink;
	$scope.holo5 = hologramline5;
	$scope.holo6 = hologramline6;
	$scope.holo7 = hologramline7;
	$scope.holo8 = hologramline8;
	$scope.homelt3 = homelist3;
	$scope.whatsapp = whatsappnumber;
	$scope.phone = phonenumber;
};

function showcaseController($scope, $window) {
	$window.scrollTo(0, 0);
	$scope.showcasel1 = showcaseline1;
	$scope.showcaselt1 = showcaselist1;
	$scope.openparticipantsdetails = function (e, modal) {
		console.log(e)
		$scope.pdetails = e;
		//$('#'+modal).modal('hide');
		$('#modal2').modal('show');
	};
};