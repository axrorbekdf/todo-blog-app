<template>
  <div class="container mt-4 pt-4">
    <div class="row justify-content-center">
      <div class="col-8 p-2">
        <AppInfo :data="movies"/>
      </div>

      <div class="col-8 p-2">
        <div class="card">
            <div class="card-body">
              <SearchPanel />
              <AppFilter/>
            </div>
        </div>
      </div>

      <div class="col-8 p-2">
        <div class="card">
            <div class="card-body">
              <MovieList :data="movies" />
            </div>
        </div>
      </div>

      <div class="col-8 p-2">
        <div class="card">
            <div class="card-body">
              <MovieAddForm />
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
                    name: "Omar",
                    viewers: 134,
                    like: true,
                    favorite: false
                },
                {
                    name: "Empire of osman",
                    viewers: 789,
                    like: false,
                    favorite: true
                },
                {
                    name: "Ertugrul",
                    viewers: 159,
                    like: false,
                    favorite: false
                },
                {
                    name: "Game of Transformer",
                    viewers: 103,
                    like: true,
                    favorite: true
                },
                {
                    name: "Game of Transformer",
                    viewers: 103,
                    like: true,
                    favorite: true
                },
                {
                    name: "Game of Transformer",
                    viewers: 103,
                    like: true,
                    favorite: true
                },
                {
                    name: "Game of Transformer",
                    viewers: 103,
                    like: true,
                    favorite: true
                }
            ]
        }
    }
  }
</script>
<style>
  
</style>