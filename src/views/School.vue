<template>
	{{ school }}
	<div class="school-template">
		<h1>{{ school?.title }}</h1>
		<ul class="parent">
			<div v-for="(content, index) in school?.contents" :key="'content-' + index">
				<li>{{ content.title }}</li>
				<ul>
				
				</ul>
			</div>
		</ul>
	</div>

</template>

<script lang="ts">

	// <li
	// 					v-for="(subContent, index2) in content.subcontents"
	// 					:key="'sub-content-' + index2"
	// 				>
	// 					<a :href="subContent?.link">{{ subContent?.title }}</a>
	// 				</li>	// <li
	// 					v-for="(subContent, index2) in content.subcontents"
	// 					:key="'sub-content-' + index2"
	// 				>
	// 					<a :href="subContent?.link">{{ subContent?.title }}</a>
	// 				</li>
import { defineComponent, PropType } from "vue";
import axios, { AxiosResponse } from "axios";

interface School {
	_id: string;
	level: string;
	title: string;
	contents: [
		{
			title: string;
			_id: string;
			subcontents: []
		}
	]
}

interface DataComponent {
	school: null | School;
}


export default defineComponent({
	name: "School",
	props: {
		levelProp: {
			required: true,
			type: String as PropType<string>,
			default: "peip2",
		},
		titleProp: {
			required: true,
			type: String as PropType<string>,
			default: "application-du-web",
		},
	},
	data() : DataComponent {
		return {
			school: null,
		}
	},
	methods: {
		capitalize(str: string) : string {
			if (str === "") return "";

			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
	mounted() {
		axios
			.get(`http://localhost:3000/api/school/${this.titleProp}`)
			.then((res: AxiosResponse<{message: string; schoolSubject: School[]}>) => {
				this.school = res.data.schoolSubject[0];
			});
	},
});
</script>

<style scoped lang="scss">
.school-template .parent {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
	grid-gap: 2vh 5vw;
	margin-bottom: 2vh;
}

.school-template .parent div li {
	width: 100%;
	font-size: 1.5rem;
}

.school-template h1 {
	text-align: center;
	font-size: 3rem;
}

.school-template {
	border: 1px solid white;
	overflow: none;
}
</style>
