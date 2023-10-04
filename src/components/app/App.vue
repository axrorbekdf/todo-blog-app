<template>
  <div class="container mt-4 pt-4">
    <div class="row justify-content-center">
      <div class="col-8 p-2">
        <AppInfo :data="movies"/>
      </div>

      <div class="col-8 p-2">
        <div class="card">
            <div class="card-body">
              <SearchPanel @setSearch="setSearchkey"/>
              <AppFilter @setFilter="setFilterkey"/>
            </div>
        </div>
      </div>

      <div class="col-8 p-2">
        <div class="card">
            <div class="card-body">
              <MovieList :data="searchHandler(movies, searchKey)" @socialEvent="changeSocial" />
            </div>
        </div>
      </div>

      <div class="col-8 p-2">
        <div class="card">
            <div class="card-body">
              <MovieAddForm @createMovie="addNewMovie"/>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import AppInfo from '@/components/app-info/AppInfo.vue'
  import SearchPanel from '@/components/search-panel/SearchPanel.vue'
  import AppFilter from "@/components/app-filter/AppFilter.vue"
  import MovieList from "@/components/movie-list/MovieList.vue"
  import MovieAddForm from "@/components/movie-add-form/MovieAddForm.vue"

  export  default{
    components: {
      AppInfo,
      SearchPanel,
      AppFilter,
      MovieList,
      MovieAddForm
    },

    data(){
        return {
            movies: [
                {
                    id: 1,
                    name: "Omar",
                    viewers: 134,
                    like: false,
                    favorite: false
                },
                {
                    id: 2,
                    name: "Empire of osman",
                    viewers: 789,
                    like: false,
                    favorite: false
                },
                {   
                    id: 3,
                    name: "Ertugrul",
                    viewers: 159,
                    like: false,
                    favorite: false
                },
                {
                    id: 4,
                    name: "Game of Transformer",
                    viewers: 103,
                    like: false,
                    favorite: false
                }
            ],
            searchKey: '',
            filterKey: 0
        }
    },

    methods:{
      addNewMovie(data){
        this.movies.push(data);
        
      },
      
      changeSocial(data, event){
        console.log(event)
        this.movies = this.movies.map(function(movie){
          if(movie.id == data.id){
            switch(event){
              case 'like': 
                movie.like = !movie.like
                break;
              case 'favorite':
                movie.favorite = !movie.favorite
                break;
            }
          }
          return movie;
        })

        if(event == 'delete'){
          this.movies = this.movies.filter(function(movie){
            return movie.id !== data.id
          })
        }
      },

      searchHandler(movies, searchKey){
        if(searchKey.length == 0){
          return movies
        }

        return movies.filter(c => c.name.toLowerCase().indexOf(searchKey) > -1)
      },

      filterHandler(movies, filterKey){
        if(searchKey.length == 0){
          return movies
        }

        switch(filterKey){
          case 1: 
            movies.filter(c => {
              return c.favorite;
            }) 
            break;
          case 2: 
            movies.filter(c => {
              return c.like;
            }) 
            break;
        }

        return movies;
      },

      setSearchkey(key){
        this.searchKey = key;
      },
      setFilterkey(key){
        this.filterKey = key
      }
    }
  }
</script>
<style>
  
</style>