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
      
      <Box v-if="!movies.length && !isLoading" class="text-center">
        <h5 class="text-danger">Kinolar mavjud emas!</h5>
      </Box>

      <Box v-else-if="isLoading" class="text-center">
        <Spinner/>
      </Box>

      <Box v-else>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <!-- <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li> -->
              <li class="page-item" v-for="item in totalPage" :class="{'active': item == page}" :key="item">
                <a @click="changePageHanfler(item)" class="page-link" href="#">{{item}}</a>
              </li>
              <!-- <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li> -->
            </ul>
          </nav>
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
    // updated(){
    //   this.loadDataFromApi()
    // },
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

      changePageHanfler(page){
        this.page = page
        this.loadDataFromApi()
      },

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