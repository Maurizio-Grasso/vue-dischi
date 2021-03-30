var app = new Vue ({
    el : '#root' ,
    data : {
        albumsAll : [] ,
        genresAll : [] ,
        selectedGenre : ''
    } ,
    created() {
        this.genresAll.push('Tutti i Generi');
        this.selectedGenre = this.genresAll[0];
        this.getAlbumsByApi();
    } , 

    methods : {
        getAlbumsByApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then( (response) =>  {
                response.data.response.forEach(album => {
                    this.albumsAll.push(album);
                    this.genresAll.includes(album.genre) ? null : this.genresAll.push(album.genre);
                });
            });
        } ,        

        orderAlbums() {
            var tmpArray = [];
            var minIndex;             

            while(this.albumsAll.length > 0 ) {

                minIndex = 0;                
                this.albumsAll.forEach((album , index) => {                    
                    if(parseInt(album.year) < this.albumsAll[minIndex].year) {
                        minIndex = index;
                    }    
                });

                tmpArray.push(this.albumsAll[minIndex]);
                this.albumsAll.splice(minIndex,1);
            }

            this.albumsAll = tmpArray;

        } ,
    }
});

