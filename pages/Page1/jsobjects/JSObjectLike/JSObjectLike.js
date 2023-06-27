export default {
	myVar1: [],
	myVar2: {},
	likedResultsData: [],
	likedAnimalIds: [64901808],

	// isLiked: ( id) => {
		// return this.likedAnimalIds.includes(id)
	// },


	toggleLike(id){
		this.likedAnimalIds.includes(id)?this.removeInLikedResults(id) : this.saveInLikedResults(id)
	},
		
	
	saveInLikedResults(id){
		this.likedAnimalIds.push(id);
	},

	removeInLikedResults(id){
		let i = this.likedAnimalIds.indexOf(id);
		this.likedAnimalIds.splice(i,1);
		
	},

}