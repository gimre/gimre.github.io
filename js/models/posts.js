( function ( ) {
	'use strict';

	angular.module( 'blog' ).service( 'postsModel', [ '$http', function ( $http ) {
		return {
			getAll: function ( ) {
				return $http.get( '/api/posts.json' ).then( function ( data ) { 
					return data.map( function ( post ) {
						// convert date to JS date
					} );
				} );
			}
		}
	} ] );

} )( );