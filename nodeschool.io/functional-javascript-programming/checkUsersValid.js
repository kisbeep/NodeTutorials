/*
 * Return a function that takes a list of valid users, and returns a function
 * that returns true if all of the supplied users exist in the original list of users.
 * You only need to check that the ids match.
 */

function checkUsersValid ( goodUsers ) {

	return function allUsersValid(submittedUsers) {

		return submittedUsers.every( user => goodUsers.some( u => user.id === u.id ));

//		return submittedUsers.every( function ( user ) {
//			return goodUsers.some( function ( u ) {
//				return ( user.id === u.id );
//			});
//		});

	};
};
module.exports = checkUsersValid;