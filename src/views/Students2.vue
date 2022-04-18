<template>
	<section>
		<div class="cours-template">
		<h1>{{ student?.class }} -  {{ capitalize(student?.name) }}</h1>
		<ul class="parent">
			<div v-for="(cours, index) in student?.cours" :key="'courses-' + index">
				<li>{{ cours.month }}</li>
				<ul>
					<li
						v-for="(lesson, index2) in cours?.lessons"
						:key="'lesson-' + index2"
					>
						<a :href="lesson.link">{{ lesson.day }} - {{ lesson.title }}</a>
					</li>
				</ul>
			</div>
			<div>
				<li>Utilitaires:</li>
				<ul>
					<div v-for="(util, index3) in utils" :key="'util-' + index3">
						<li>
							<a :href="util.link">{{ util.title }}</a>
						</li>
					</div>
				</ul>
			</div>
		</ul>
	</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios, { AxiosResponse } from "axios";

interface Student {
	_id: string;
	name: string;
	class: string;
	cours: {
		_id: string;
		__v: number;
		month: string;
		lessons: {
			_id: string;
			day: string;
			title: string;
			link: string;
		}[];
	}[];
}

interface Util {
		_id: string,
		title: string,
		link: string,
		__v: number,
}

interface DataComponent {
	student: null | Student;
	utils: null | Util[];
}

export default defineComponent({
	name: "Students2",

	props: {
		name: {
			type: String as PropType<string>,
			required: true,
		},
	},

	data: (): DataComponent => ({
		student: null,
		utils: null,
	}),

	mounted() {
		axios
			.get(`http://localhost:3000/api/student/${this.name}`)
			.then((response: AxiosResponse<{ student: Student }>) => {
				this.student = response.data.student;
			});
		axios
			.get(`https://sheltered-basin-99154.herokuapp.com/api/studentUtils`)
			.then((response: AxiosResponse<Util[]>) => {
				this.utils = response.data;
			});
	},

	methods: {
		capitalize(str: string): string {
			if (str === "") return "";

			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
});
</script>

<style lang="scss" scoped>
section {
	div {
		margin-bottom: 20px;
	}
}
</style>
