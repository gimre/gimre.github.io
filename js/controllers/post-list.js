( function ( ) {
	'use strict';

	angular.module( 'blog' ).controller( 'post-list', [
		'$scope',
		'postsModel',

		function ( $scope, postsModel ) {

			$scope.model = {
				posts: [ ]
			};

			postsModel.getAll( ).then( function ( posts ) {
				$scope.model.posts = posts;
			} );

		}

	] );

} )( );