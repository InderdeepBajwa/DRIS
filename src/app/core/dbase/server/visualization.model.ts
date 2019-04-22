export class VisualizationModel {
    constructor(
        public title: string,
        public uri: string,
        public imgUrl: string,
        public createDate: Date,
        public userId: string,
        public _id?: string
    ) {}
}
