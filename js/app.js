( function ( ) {
	'use strict';

	var app = angular.module( 'blog', [ ] );

	app.run( [
		'$rootScope',
		function ( $rootScope ) {
			$rootScope.prettyDate = function ( date ){
				var	diff = (((new Date()).getTime() - date.getTime()) / 1000),
					day_diff = Math.floor(diff / 86400);
						
				if ( isNaN(day_diff) || day_diff < 0 )
					return;

				if ( day_diff >= 31 )
					return 'a long time ago';
						
				return day_diff == 0 && (
						diff < 60 && "just now" ||
						diff < 120 && "1 minute ago" ||
						diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
						diff < 7200 && "1 hour ago" ||
						diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
					day_diff == 1 && "Yesterday" ||
					day_diff < 7 && day_diff + " days ago" ||
					day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
			};
		}
	] );

} )( );