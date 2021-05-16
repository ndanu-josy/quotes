export class Quote {
    map(arg0: (quote: any) => any): number[] {
      throw new Error('Method not implemented.');
    }
    showDetails: boolean
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public user: string,
        public date: Date,
        public upvotes: number,
        public downvotes: number) {

            this.showDetails = false;
            
    }
}

