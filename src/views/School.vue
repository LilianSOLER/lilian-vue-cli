<template>
	<div class="school-template">
		<h1>{{ school.title }}</h1>
		<ul class="parent">
			<div
				v-for="(content, index) in school.contents"
				:key="'content-' + index"
			>
				<li>{{ content.title }}</li>
				<ul>
					<li
						v-for="(subContent, index2) in content.subContents"
						:key="'sub-content-' + index2"
					>
						<a :href="subContent.link">{{ subContent.title }}</a>
					</li>
				</ul>
			</div>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface SchoolSubject {
  id: string;
  title: string;
  contents: {
    title: string;
    subContents: {
      title: string;
      link: string;
    }[];
  }[];
}

interface SchoolLevel {
  name: string;
  subjects: SchoolSubject[];
}

const applicationDuWebInfo = {
  id: "application-du-web",
	title: "Application Du Web ",
	contents: [
		{
			title: "TP 1 : les bases en PHP",
			subContents: [
				{
					title: "Exercice 1",
					link: "school/peip2/application-du-web/TP1/exo-1.php",
				},
				{
					title: "Exercice 2",
					link: "school/peip2/application-du-web/TP1/exo-2.php",
				},
				{
					title: "Exercice 3",
					link: "school/peip2/application-du-web/TP1/exo-3.php?number=2048",
				},
				{
					title: "Exercice 4",
					link: "school/peip2/application-du-web/TP1/exo-4.php",
				},
				{
					title: "Exercice 5",
					link: "school/peip2/application-du-web/TP1/exo-5.php?number=10",
				},
				{
					title: "Exercice 6",
					link: "school/peip2/application-du-web/TP1/exo-6.php",
				},
				{
					title: "Exercice 7",
					link: "school/peip2/application-du-web/TP1/exo-7.php",
				},
				{
					title: "Exercice 8",
					link: "school/peip2/application-du-web/TP1/exo-8.php",
				},
				{
					title: "Exercice 9",
					link: "school/peip2/application-du-web/TP1/exo-9.html",
				},
				{
					title: "Exercice 10",
					link: "school/peip2/application-du-web/TP1/exo-10.html",
				},
				{
					title: "Exercice 11",
					link: "school/peip2/application-du-web/TP1/exo-11-formulaire.php",
				},
				{
					title: "Exercice 12",
					link: "school/peip2/application-du-web/TP1/exo-12.php",
				},
				{
					title: "Télécharger le TP",
					link: "school/peip2/application-du-web/TP1/tp1.zip",
				},
			],
		},
		{
			title: "TP 2 : la persistance en PHP",
			subContents: [
				{
					title: "Exercice 1",
					link: "school/peip2/application-du-web/TP2/exo-1-formulaire.php",
				},
				{
					title: "Exercice 2",
					link: "school/peip2/application-du-web/TP2/exo-2-formulaire.php",
				},
				{
					title: "Exercice 3",
					link: "school/peip2/application-du-web/TP2/exo-3-formulaire.php",
				},
				{
					title: "Exercice 4",
					link: "school/peip2/application-du-web/TP2/exo-4-formulaire.php",
				},
				{
					title: "Exercice 5",
					link: "school/peip2/application-du-web/TP2/exo-5-formulaire.html",
				},
				{
					title: "Exercice 6",
					link: "school/peip2/application-du-web/TP2/exo-6-formulaire.html",
				},
				{
					title: "Télécharger le TP",
					link: "school/peip2/application-du-web/TP2/tp2.zip",
				},
				{
					title: "Documentation PHP",
					link: "school/peip2/application-du-web/documentation-php.pdf",
				},
			],
		},
		{
			title: "TP 3 : Les sessions PHP",
			subContents: [
				{
					title: "Exercice 1",
					link: "school/peip2/application-du-web/TP3/exo1/formulaire.php",
				},
				{
					title: "Exercice 2",
					link: "school/peip2/application-du-web/TP3/exo2/index.html",
				},
				{
					title: "Exercice 3",
					link: "school/peip2/application-du-web/TP3/exo3/index.html",
				},
				{
					title: "Exercice 4",
					link: "school/peip2/application-du-web/TP3/exo4/index.html",
				},
				{
					title: "Exercice 5",
					link: "school/peip2/application-du-web/TP3/exo5/index.php",
				},
				{
					title: "Télécharger le TP",
					link: "school/peip2/application-du-web/TP3/tp3.zip",
				},
			],
		},
		{
			title: "TP 4 : Introduction à JavaScript",
			subContents: [
				{
					title: "Exercice 1",
					link: "school/peip2/application-du-web/TP4/exo-1.html",
				},
				{
					title: "Exercice 2",
					link: "school/peip2/application-du-web/TP4/exo-2.html",
				},
				{
					title: "Exercice 3",
					link: "school/peip2/application-du-web/TP4/exo-3.html",
				},
				{
					title: "Exercice 4",
					link: "school/peip2/application-du-web/TP4/exo-4-formulaire.html",
				},
				{
					title: "Exercice 5",
					link: "school/peip2/application-du-web/TP4/exo-5.html",
				},
				{
					title: "Télécharger le TP",
					link: "school/peip2/application-du-web/TP4/tp4.zip",
				},
			],
		},
		{
			title: "TP 5 : Le Document Object Model (DOM)",
			subContents: [
				{
					title: "Exercice 1",
					link: "school/peip2/application-du-web/TP5/exo-1.html",
				},
				{
					title: "Exercice 2",
					link: "school/peip2/application-du-web/TP5/exo-2.html",
				},
				{
					title: "Exercice 3",
					link: "school/peip2/application-du-web/TP5/exo-3.html",
				},
				{
					title: "Exercice 4",
					link: "school/peip2/application-du-web/TP5/exo-4/index.php",
				},
				{
					title: "Exercice 5",
					link: "school/peip2/application-du-web/TP5/exo-5.html",
				},
				{
					title: "Exercice 6",
					link: "school/peip2/application-du-web/TP5/exo-6.html",
				},
				{
					title: "Exercice 7",
					link: "school/peip2/application-du-web/TP5/exo-7.html",
				},
				{
					title: "Exercice 8",
					link: "school/peip2/application-du-web/TP5/exo-8.html",
				},
				{
					title: "Exercice 9",
					link: "school/peip2/application-du-web/TP5/exo-9/index.php",
				},
				{
					title: "Télécharger le TP",
					link: "school/peip2/application-du-web/TP5/tp5.zip",
				},
			],
		},
		{
			title: "TP 6 : Introduction à AJAX",
			subContents: [
				{
					title: "Exercice 1",
					link: "school/peip2/application-du-web/TP6/exo-1/index.html",
				},
				{
					title: "Exercice 2",
					link: "school/peip2/application-du-web/TP6/exo-2/gallery.php",
				},
				{
					title: "Exercice 3",
					link: "school/peip2/application-du-web/TP6/exo-3/index.php",
				},
				{
					title: "Télécharger le TP",
					link: "school/peip2/application-du-web/TP6/tp6.zip",
				},
			],
		},
	],
};

const programmationWebInfo = {
  id: "programmation-web",
	title: "TD de Programmation Web :",
	contents: [
		{
			title: "Allegre - TD n°1 : Exercices PHP",
			subContents: [
				{
					title: "Calcul d'intérêts composés (niv. 1-2)",
					link: "school/info3/programmation-web/allegre/TP1/calcul.html",
				},
				{
					title: "Un peu de style en CSS (niv. 1)",
					link: "school/info3/programmation-web/allegre/TP1/elements.html",
				},
				{
					title: "Table de multiplication (niv. 1-2)",
					link: "school/info3/programmation-web/allegre/TP1/multiplication.php",
				},
				{
					title: "Analyse des Caractères Unicode (niv. 2)",
					link: "school/info3/programmation-web/allegre/TP1/unicode.php",
				},
				{
					title: "Affichage d'un tableau générique (niv. 2)",
					link: "school/info3/programmation-web/allegre/TP1/multiplication-with-generic-table.php",
				},
				{
					title: "Calendrier - agenda web (niv. 3)",
					link: "school/info3/programmation-web/allegre/TP1/form-agenda.html",
				},
				{
					title: "Télécharger le dossier",
					link: "https://github.com/LilianSOLER/PW6/archive/refs/heads/master.zip",
				},
			],
		},
		{
			title: "Allegre - TD n°2 : Service Web",
			subContents: [
				{
					title: "Compte-rendu",
					link: "school/info3/programmation-web/allegre/TD2/cr.md",
				},
				{
					title: "Télécharger le dossier",
					link: "https://github.com/LilianSOLER/PW6/archive/refs/heads/master.zip",
				},
			],
		},
		{
			title: "Allegre - TD n°3 : Podcasts- TMBD",
			subContents: [
				{
					title: "Compte-rendu",
					link: "school/info3/programmation-web/allegre/TD3/cr.md",
				},
				{
					title: "Télécharger le dossier",
					link: "https://github.com/LilianSOLER/PW6/archive/refs/heads/master.zip",
				},
			],
		},
		{
			title: "Pittion - TD n°1 : HTML, CSS",
			subContents: [
				{
					title: "Compte-rendu",
					link: "school/info3/programmation-web/pittion/TD1/cr.md",
				},
				{
					title: "Exercice 3",
					link: "school/info3/programmation-web/pittion/TD1/exo-3.html",
				},
				{
					title: "Télécharger le dossier",
					link: "https://github.com/LilianSOLER/PW6/archive/refs/heads/master.zip",
				},
			],
		},
		{
			title: "Pittion - TD n°2 : JS, TS, Framework JS",
			subContents: [
				{
					title: "Compte-rendu",
					link: "school/info3/programmation-web/pittion/TD2/cr.md",
				},
				{
					title: "To-do App VueJs",
					link: "school/info3/programmation-web/pittion/TD2/todo-list-vue-without-webpack/",
				},
				{
					title: "Télécharger le dossier",
					link: "https://github.com/LilianSOLER/PW6/archive/refs/heads/master.zip",
				},
			],
		},
	],
};


const peip2Info: SchoolLevel = {
  name: "peip2",
  subjects: [
    applicationDuWebInfo,
  ]
}

const info3Info: SchoolLevel = {
  name: "info3",
  subjects: [
    programmationWebInfo,
  ]
}
const schoolInfo: SchoolLevel[] = [
  peip2Info,
  info3Info,
]

export default defineComponent({
	name: "School",
	props: {
		id1: {
			required: true,
			type: String,
			default: "peip2",
		},
		id2: {
			required: true,
			type: String,
			default: "application-du-web",
		},
	},
	computed: {
		school() {
			let schoolSub: SchoolSubject = schoolInfo[0].subjects[0];
			Object.values(schoolInfo).forEach((schoolsubi) => {
				if (schoolsubi.name === this.id1) {
					Object.values(schoolsubi.subjects).forEach((subject) => {
            if (subject.id === this.id2) {
              schoolSub = subject;
            }
          });
				}
			});

			return schoolSub;
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
.school-template .parent {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
	grid-gap: 2vh 5vw;
	margin-bottom: 2vh;
}

.school-template .parent div li{
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
