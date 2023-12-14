const ItemPrice = 30000
const discount = 0.035
const VAT = 0.13
const redeemcoin = 20
const distancePrice = 60 


let itemdiscount = ItemPrice*discount
console.log("Discounted Amount: " +itemdiscount)

let vatprice = VAT*ItemPrice
console.log("VAT AMOUNT: "+vatprice)


let rediscount = 0.25*redeemcoin
console.log("Redeem Coin price earned: "+redeemcoin)


function calDeleivey(distance){
    if(distance >0 && distance<=10){
        return distancePrice; 
    }else if(distance > 10){
        let cost = distancePrice  + (distance-10)*2 
        
        return cost
    }

}

let dtcharge = calDeleivey(120)
console.log("Delivery charge for is: " +dtcharge)


function calVoucher(voucher){
    if(voucher==1000){
        return 100
    }else if(voucher == 10000){
        return 500
    }else if(voucher == 20000){
        return 1500
    }
}
let vDiscount = calVoucher(20000)
console.log("Voucher discount is "+vDiscount)

let total = ItemPrice  + vatprice + dtcharge 
console.log("Total Price is: "+total)

let payable = total - vDiscount - itemdiscount - rediscount
console.log("Payable Amount: " +payable)