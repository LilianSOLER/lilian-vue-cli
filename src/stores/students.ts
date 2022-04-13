import { defineStore } from "pinia";

import { StudentsInfoInterface } from './student/interfaces';

import { useAmandineInfo } from './student/amandine';
import { useKevinJInfo } from './student/kevin-j';
import { useUtilsInfo } from './student/utils';



const StudentsInfo: StudentsInfoInterface = {
	students: [useAmandineInfo().content, useKevinJInfo().content],
	utils: useUtilsInfo().content,
};

export const useStudentsInfo = defineStore("studentsInfo", {
	state: () => {
		return {
			content: StudentsInfo
		};
	},
});