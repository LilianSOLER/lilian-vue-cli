<template>
	{{ student }}
	<br><br>
	{{ utils }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
	name: "Students",
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			student: null,
			utils: null,
		};
	},
	methods: {
		upperFirstLetter(str: string) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
	mounted() {
		axios
			.get(`http://localhost:3000/api/student/${this.name}`)
			.then((response) => {
				this.student = response.data["student"];
			});
		axios
			.get(`https://sheltered-basin-99154.herokuapp.com/api/studentUtils`)
			.then((response) => {
				this.utils = response.data;
			});
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
