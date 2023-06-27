export default {

	likedResultsData: [],
	likedAnimalIds: [],

	// isLiked: ( id) => {
		// return this.likedAnimalIds.includes(id)
	// },


	toggleLike(id){
		this.likedAnimalIds.includes(id)?this.removeInLikedResults(id) : this.saveInLikedResults(id);
	},
		
	
	saveInLikedResults(id){
		this.likedAnimalIds.push(id);
		
		let likeddog = Get_Dogs.data.animals.find((animal) => { return animal.id == id;});
		this.likedResultsData.push(likeddog)
	},

	removeInLikedResults(id){
		let i = this.likedAnimalIds.indexOf(id);
		this.likedAnimalIds.splice(i,1);
		
		for (let step = 0; step < this.likedResultsData.length; step++) {
    	if(this.likedResultsData[step].id == id){
				this.likedResultsData.splice(step,1);
			}
		}
	},

}