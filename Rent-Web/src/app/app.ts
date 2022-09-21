export interface sqVal {
    sq: number
}
export class SquareFootRequest {
    public constructor (public sq1: number | undefined | null,
        public sq2: number | undefined | null,
        public sq3: number | undefined | null,
        public sq4: number | undefined | null,
        public sq5: number | undefined | null,
        public sq6: number | undefined | null,
        public sq7: number | undefined | null,
        public sq8: number | undefined | null,
        public sqTotal: number | undefined | null,
        public totalPrice: number | undefined | null,
        public roommateNumber: number | undefined | null) {
    }
}
export class RoomPay {
    public constructor (public roommatePay: number[]) {
    }
}