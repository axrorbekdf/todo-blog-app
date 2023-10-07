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
      
      <Box >
        <Pagination @changePageHandler="changePageHandler" :totalPage="totalPage" :page="page"/>
      </Box>

      <Box v-if="!movies.length && !isLoading" class="text-center">
        <h5 class="text-danger">Kinolar mavjud emas!</h5>
      </Box>

      <Box v-else-if="isLoading" class="text-center">
        <Spinner/>
      </Box>

      <Box v-else>
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
  import axios from "axios"


  export  default{
    components: {
      AppInfo,
      SearchPanel,
      AppFilter,
      MovieList,
      MovieAddForm
    },
    mounted(){
      this.loadDataFromApi()
    },
    data(){
        return {
            movies: [],
            searchKey: '',
            filterKey: 'all',
            isLoading: false,
            limit: 10,
            page: 1,
            totalPage: 0
        }
    },
    watch: {
      page(){
        this.loadDataFromApi()
      }
    },

    methods:{

      async loadDataFromApi(){
        try {
          this.isLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _limit: this.limit,
              _page: this.page
            }
          })
          const newDataGenerate = response.data.map(item => ({
            id: item.id,
            name: item.title,
            viewers: item.id*10,
            like: false,
            favorite: false
          }))

          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.movies = newDataGenerate

        } catch (error) {
            alert(error.message)
        } finally{
          this.isLoading = false
        }
      },

      changePageHandler(page){
        this.page = page
      },

      async addNewMovie(data){
        try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
          this.movies.push(response.data);
        } catch (error) {
          alert(error.message)
        }
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
          try {
            const response = axios.delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
            this.movies = this.movies.filter(function(movie){
              return movie.id !== data.id
            })
          } catch (error) {
            alert(error.message)
          }
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