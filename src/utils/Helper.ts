class Helper {
    constructor() {
    }

    public getFilterValues(data: any[], fieldLabel: string): string[] {
        let filterValues: string[] = [];
        data.map((item) => {
            item[fieldLabel].map((value: string) => {
                if (!filterValues.some((_fV) => _fV == value) && value.length > 0) {
                    filterValues.push(value);
                }
            });
        });
        return filterValues;
    }
}

export default new Helper();