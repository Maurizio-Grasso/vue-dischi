var app = new Vue ({
    el : '#root' ,
    data : {
        albumsAll : false
    } ,
    mounted() {
        this.getAlbumsByApi();
    } , 

    methods : {
        getAlbumsByApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then( (response) =>  {
              this.albumsAll = (response.data.response);
            });
        }
    }
});