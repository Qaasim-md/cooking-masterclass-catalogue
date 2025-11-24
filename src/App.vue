<template>
  <div class="app">
	<div class="container">
	  <HeaderBar :savedIds="savedIds" @save="handleSave" />

	  <main>
		<section class="controls">
		  <label>
			<input type="checkbox" v-model="onlyAvailable" />
			Only available
		  </label>
		</section>

		<section class="grid">
		  <CourseCard
			v-for="course in filteredCourses"
			:key="course.id"
			:course="course"
			:savedIds="savedIds"
			@save="handleSave"
		  />
		</section>

		<div v-if="filteredCourses.length === 0" class="empty">No courses match.</div>
	  </main>
	</div>

	<footer class="footer">Prototype — Cooking Masterclass</footer>
  </div>
</template>


<script>
import HeaderBar from './components/HeaderBar.vue'
import CourseCard from './components/CourseCard.vue'
import courses from './data/courses'


export default {
name: 'App',
components: { HeaderBar, CourseCard },
data(){
return {
courses: courses,
savedIds: [],
onlyAvailable: false
}
},
computed: {
filteredCourses(){
if(this.onlyAvailable) return this.courses.filter(c => c.available)
return this.courses
}
},
methods: {
handleSave(id){
if(!this.savedIds.includes(id)){
this.savedIds.push(id)
}
}
}
}
</script>


<style>
:root{
--bg:#fbfaf8; --muted:#6b6b6b; --accent:#ff7a59
}
body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background:var(--bg); margin:0}
.app{min-height:100vh;display:flex;flex-direction:column}
.container{max-width:1100px;margin:1.25rem auto;padding:0 1rem}
.controls{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
.footer{text-align:center;padding:1rem;color:var(--muted)}
.empty{text-align:center;padding:2rem;color:var(--muted)}
</style>