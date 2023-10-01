export const groupBy = (items: any[], by: any, count: boolean = false) => {
  if (count) {
    return items.reduce((group: { [key: string]: any }, item) => {
			const keyValue = item[by]; // Obtiene el valor de la propiedad 'by' del objeto
			if (!group[keyValue]) {
				group[keyValue] = 0;
			}
			group[keyValue]++;
			return group;
		}, {});
	} else {
		return items.reduce((group: { [key: string]: any }, item) => {
			const keyValue = item[by]; // Obtiene el valor de la propiedad 'by' del objeto
			if (!group[keyValue]) {
				group[keyValue] = [];
			}
			group[keyValue].push(item);
			return group;
		}, {});
	}
};
