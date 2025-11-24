<template>
<article class="card">
<div class="card-head">
<h2 class="title">{{ course.title }}</h2>
<span v-if="!course.available" class="sold">Sold Out</span>
</div>


<p class="chef">By <strong>{{ course.chef }}</strong></p>
<p class="meta">Level: <em>{{ course.level }}</em></p>


<div class="card-footer">
<div class="price">{{ formattedPrice }}</div>
<button
class="save"
:disabled="!course.available || saved"
@click="$emit('save', course.id)"
>
{{ saved ? 'Saved' : 'Save' }}
</button>
</div>
</article>
</template>


<script>
export default {
name: 'CourseCard',
props: {
course: { type: Object, required: true },
savedIds: { type: Array, required: true }
},
computed: {
saved(){
return this.savedIds.includes(this.course.id)
},
formattedPrice(){
// Basic currency formatting (stretch: use Intl)
return `${this.course.currency} ${this.course.price.toFixed(2)}`
}
}
}
</script>


<style scoped>
.card{
background:#fff; border-radius:10px; padding:1rem; box-shadow:0 6px 18px rgba(12,12,25,0.04);
display:flex; flex-direction:column; gap:0.5rem; min-width:220px;
}
.card-head{display:flex;justify-content:space-between;align-items:start}
.sold{background:#eee;color:#9a1c1c;padding:0.25rem 0.45rem;border-radius:6px;font-weight:700;font-size:0.75rem}
.title{font-size:1rem;margin:0}
.chef{margin:0;color:#444}
.meta{margin:0;color:#666;font-size:0.9rem}
.card-footer{display:flex;justify-content:space-between;align-items:center;margin-top:0.5rem}
.price{font-weight:700}
.save{padding:0.45rem 0.65rem;border-radius:8px;border:0;background:#ff7a59;color:#fff;cursor:pointer}
.save[disabled]{opacity:0.55;cursor:not-allowed}
</style>