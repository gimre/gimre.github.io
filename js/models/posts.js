( function ( ) {
	'use strict';

	angular.module( 'blog' ).service( 'postsModel', [ '$http', function ( $http ) {
		return {
			getAll: function ( ) {
				return $http.get( '/api/posts.json' ).then( function ( data ) { 
					data.forEach( function ( post ) {
						var parts = post.date.split(' '),
							date  = parts.shift( ),
							time  = parts.shift( ),
							zone  = parts.shift( );
						
						post.date = Date.parse( date + 'T' + time + zone.slice( 0, zone.length - 2 ) + ':' + zone.slice( -2 ) );
					} );

					return data;
				} );
			}
		}
	} ] );

} )( );