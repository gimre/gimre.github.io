( function ( ) {
	'use strict';

	angular.module( 'blog' ).controller( 'post-list', [
		'$scope',

		function ( $scope ) {

			$scope.model = {
				posts: [
					{ title: 'My first post' },
					{ title: 'My second post' },
					{ title: 'My third post' },
					{ title: 'My fourth post' }
				]
			};

		}

	] );

} )( );