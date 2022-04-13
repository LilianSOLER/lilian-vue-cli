import { defineStore } from "pinia";

import { StudentInfoInterface } from './interfaces';

const amandineInfo: StudentInfoInterface = {
	name: "amandine",
	class: "2nde",
	cours: [
		{
			month: "Mathématiques",
			lessons: [
				{
					day: "21/10",
					title: "Entrainement Fraction",
					link: "./cours/amandine/exo-fraction.pdf",
				},
				{
					day: "25/11",
					title: "Entrainement Vecteur",
					link: "./cours/amandine/exo-vecteur.pdf",
				},
			],
		},
	],
};

export const useAmandineInfo = defineStore("amandineInfo", {
	state: () => {
		return {
			content: amandineInfo,
		};
	},
});