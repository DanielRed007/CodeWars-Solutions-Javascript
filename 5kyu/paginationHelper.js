class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}

	itemCount() {
        console.log(this.collection, "coll");
        console.log(this.itemsPerPage, "perPage")
	    return this.collection.length;
	}

	pageCount() {
        let pages = 0;

        for(let idx = 0; idx < this.collection.length; idx += this.itemsPerPage){
            pages++
        }

        return pages;
	}

    getPaginationList(){
        let indexes = [];

        let pagesList = [];

        for(let idx = 0; idx < this.collection.length; idx += this.itemsPerPage){
            indexes.push(idx);
        }

        indexes.push(this.collection.length);

        for(let x = 0; x < indexes.length; x++){
            if(indexes[x + 1]){
                const pageSlice = this.collection.slice(indexes[x],indexes[x + 1]);
                pagesList.push(pageSlice);
            }
        }

        return pagesList;
    }

	pageItemCount(pageIndex = 0) {
        const pages = this.getPaginationList();

        const getIndex = pages[pageIndex];
        return getIndex ? getIndex.length : -1;
	}

    getSplittedPaginationList(){
        
    }

	pageIndex(itemIndex) {

        console.log(this.getPaginationList());
        if(this.collection.length < itemIndex){
            return -1
        }

        let itemIdx = -1;
        const currentIndex = this.collection[itemIndex];

        if(currentIndex){
            const pages = this.getPaginationList();

            pages.forEach((val,idx) => {
                const index = val.findIndex(v => v === currentIndex);
                if(index > -1) {
                    itemIdx = idx;
                }
            })

        }

        return itemIdx;
	}

}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)

console.log(helper.itemCount()) // 24
console.log(helper.pageCount()) // 3

console.log(helper.pageItemCount(1)) // 10
console.log(helper.pageItemCount(2)) // 4
console.log(helper.pageItemCount(3)) // -1

console.log(helper.pageIndex(40)) // -1
// console.log(helper.pageIndex(22)) // 2
// console.log(helper.pageIndex(3)) // 0
// console.log(helper.pageIndex(0)) // 0
// console.log(helper.pageIndex(-1)) // -1
// console.log(helper.pageIndex(-23)) // -1
// console.log(helper.pageIndex(-15)) // -1


const collection2 = [
    1,  2,  3,  4,  5,  6,  7,  8,
    9, 10, 11, 12, 13, 14, 15, 16,
   17, 18, 19, 20, 21, 22, 23, 24
]

const perPage = 10;

