<template>
	<div class="home">
		<main>
			<div v-for="(article, index) in articles" :key="'article-' + index">
				<article>
					<p
						v-for="(paragraph, index2) in article.paragraphs"
						:key="'paragraph-' + index2"
					>
						{{ paragraph.text }}
					</p>
				</article>
				<hr />
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHomeInfo } from "@/stores/home";


export default defineComponent({
	name: "Home",
	data: function () {
		return {
			articles: useHomeInfo().articles,
		};
	},
});
</script>

<style scoped lang="scss">
.home main {
	width: 80vw;
	margin-top: 10vh;
	margin-bottom: 10vw;
}

.home main div {
	margin: 0 2.5vw;
}

.home main div article p {
	font-size: 1.5rem;
	text-align: justify;
	width: 70vw;
	margin-left: 2.5vw;
}

.home main div article p:first-child {
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
}

hr {
	display: block;
	border: 1px solid white;
	width: 40vw;
	text-align: center;
}
</style>
