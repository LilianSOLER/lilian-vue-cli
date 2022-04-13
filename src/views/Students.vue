<template>
	<div class="cours-template">
		<h1>{{ students.class }} - {{ upperFirstLetter(students.name) }}</h1>
		<ul class="parent">
			<div v-for="(cours, index) in students.cours" :key="'courses-' + index">
				<li>{{ cours.month }}</li>
				<ul>
					<li
						v-for="(lesson, index2) in cours.lessons"
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStudentsInfo } from '../stores/students';
import { StudentInfoInterface, StudentsInfoInterface} from '../stores/student/interfaces';

const StudentsInfo: StudentsInfoInterface = useStudentsInfo().content;

export default defineComponent({
	name: "Students",
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	computed: {
		students() {
			let students: StudentInfoInterface = StudentsInfo.students[0];
			Object.values(StudentsInfo.students).forEach((stud) => {
				if (stud.name === this.id) {
					students = stud;
				}
			});

			return students;
		},
		utils() {
			return StudentsInfo.utils;
		},
	},
	methods: {
		upperFirstLetter(str: string) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
});
</script>

<style scoped lang="scss">
.cours-template .parent {
	width: 80vw;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 2vh 5vw;
	margin-bottom: 2vh;
}

.cours-template .parent div li {
	width: max-content;
}

.cours-template h1 {
	text-align: center;
}

.cours-template {
	border: 1px solid white;
	overflow: none;
}
</style>
