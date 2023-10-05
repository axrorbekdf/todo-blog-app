<template>
  <div class="container mt-4 pt-4">
    <div class="row justify-content-center">
      <Box>
          <AppInfo :data="movies"/>
      </Box>

      <Box>
          <SearchPanel @setSearch="setSearchkey"/>
          <AppFilter @setFilter="setFilterkey" :filterName="filterKey"/>
      </Box>

      <Box>
          <MovieList :data="filterHandler(searchHandler(movies, searchKey), filterKey)" @socialEvent="changeSocial" />
      </Box>

      <Box>
          <MovieAddForm @createMovie="addNewMovie"/>
      </Box>

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
                    like: true,
                    favorite: false
                },
                {
                    id: 2,
                    name: "Empire of osman",
                    viewers: 789,
                    like: true,
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
            filterKey: 'all'
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
        if(filterKey == 'all'){
          return movies
        }

        switch(filterKey){
          case 'popular': 
            return movies.filter(c => c.like) 
          case 'mostViewers': 
            return movies.filter(c => c.viewers > 500) 
          default:
            return movies
        }
      },

      setSearchkey(key){
        this.searchKey = key
      },
      setFilterkey(key){
        this.filterKey = key
      }
    }
  }
</script>
<style>
  
</style>