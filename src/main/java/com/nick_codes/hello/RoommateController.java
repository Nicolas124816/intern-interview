package com.nick_codes.hello;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class RoommateController {

    @RequestMapping(path = "/calculate", method = RequestMethod.POST)
    public RoomPay hello(@RequestBody SquareFootRequest sq){
        RoomPay roomPay = new RoomPay();
        int bedSum = sq.getSq1() + sq.getSq2() + sq.getSq3() + sq.getSq4() + sq.getSq5() + sq.getSq6() + sq.getSq7() + sq.getSq8();
        int roommateNum = sq.getRoommateNumber();
        int notBedSum = sq.getSqTotal() - bedSum;
        
        if (sq.getSq1() != 0) {
            roomPay.roommatePay[0] =  (sq.getSq1() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }
        if (sq.getSq2() != 0) {
            roomPay.roommatePay[1] =  (sq.getSq2() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }
        if (sq.getSq3() != 0) {
            roomPay.roommatePay[2] =  (sq.getSq3() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }
        if (sq.getSq4() != 0) {
            roomPay.roommatePay[3] =  (sq.getSq4() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }
        if (sq.getSq5() != 0) {
            roomPay.roommatePay[4] =  (sq.getSq5() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }
        if (sq.getSq6() != 0) {
            roomPay.roommatePay[5] =  (sq.getSq6() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }
        if (sq.getSq7() != 0) {
            roomPay.roommatePay[6] =  (sq.getSq7() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }
        if (sq.getSq8() != 0) {
            roomPay.roommatePay[7] =  (sq.getSq8() + notBedSum / roommateNum) * sq.getTotalPrice() / sq.getSqTotal();
        }

        return roomPay;
    }
}
