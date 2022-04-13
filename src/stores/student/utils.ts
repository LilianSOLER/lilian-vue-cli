import { defineStore } from "pinia";

import { UtilInterface } from './interfaces';

const utilsInfo: UtilInterface[] = [
	{
		title: "Tables (multiplication, addition, soustraction)",
		link: "cours/utils/php/apprendre_table.php?op=2",
	},
	{
		title: "Entrainement opération",
		link: "cours/utils/php/entrainement_op.php?op=plus",
	},
	{
		title: "Rendu Exercice",
		link: "cours/utils/php/rendu_exercice.php",
	},
];

export const useUtilsInfo = defineStore("UtilsInfo", {
	state: () => {
		return {
			content: utilsInfo,
		};
	},
});