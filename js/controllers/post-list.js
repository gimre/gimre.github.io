( function ( ) {
	'use strict';

	angular.module( 'blog' ).controller( 'post-list', [
		'$scope',

		function ( $scope ) {

			$scope.model = {
				posts: [
					{ title: 'My first post', date: new Date( ), body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste id vel sequi earum numquam sapiente. Est velit accusantium nostrum aspernatur error ea ut, perferendis temporibus, ipsa quae, inventore repellat mollitia.' },
					{ title: 'My second post', date: new Date( Date.now( ) - 6e4 ), body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum perspiciatis quis, incidunt unde atque accusamus. Quas porro, eum reprehenderit! Vitae ullam nobis harum sapiente voluptatum cupiditate, eos delectus, quidem quas!' },
					{ title: 'My third post', date: new Date( Date.now( ) - 6e5 ), body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero accusantium iure consectetur minima error vitae eligendi iusto maiores, repudiandae fuga doloremque, beatae odio nisi consequuntur, sit et pariatur ullam aspernatur!' },
					{ title: 'My fourth post', date: new Date( Date.now( ) - 6e6 ), body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nobis illo quibusdam ducimus voluptates nesciunt, repudiandae similique cum eveniet doloribus iste vitae, corporis porro fugiat aut, mollitia vero beatae incidunt.' },
					{ title: 'My fifth post', date: new Date( Date.now( ) - 6e7 ), body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestiae possimus omnis voluptatum ea obcaecati magnam, tempora ipsum ab, minus voluptate eos corporis cupiditate ullam sed ad recusandae ut. Illum!' },
					{ title: 'My sixth post', date: new Date( Date.now( ) - 6e8 ), body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quibusdam aut quos reiciendis quis voluptas velit, dolor distinctio consequuntur totam, tempora aliquam praesentium dolores! Molestias, delectus hic? Obcaecati dolorem, aperiam.' }
				]
			};

		}

	] );

} )( );