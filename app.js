// 1-masala. Sonlarni chiqarish
// Qiyinlik: 1/10
// for loop yordamida 1 dan 10 gacha bo‘lgan sonlarni konsolga chiqaring.
// Kutilgan natija: 1 2 3 4 5 6 7 8 9 10

// for(let i = 0 ; i <= 10 ; i++){
//     console.log(i);
// }

// ==================================================================================================

// 2-masala. Juft sonlar
// Qiyinlik: 2/10
// 1 dan 30 gacha bo‘lgan sonlar orasidan faqat juft sonlarni konsolga chiqaring.
// Shart: if va % operatoridan foydalaning.


// for(let i = 0 ; i <= 30 ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// ====================================================================================================

// 3-masala. Sonlar yig‘indisi
// Qiyinlik: 3/10
// 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
// Yordam: yig‘indini saqlash uchun let sum = 0 o‘zgaruvchisini yarating.

// let sum = 0;

// for(let i = 0 ; i <= 50 ; i++){
//     sum += i;
// }

// console.log(sum);

// ================================================================================================

// 4-masala. Toq sonlar yig‘indisi
// Qiyinlik: 4/10
// 1 dan 100 gacha bo‘lgan toq sonlarning yig‘indisini hisoblang va natijani konsolga chiqaring.
// Shart: for, if va % operatorlaridan foydalaning.

// let sum = 0;

// for(let i = 0 ; i <= 100 ; i++){
//     if(i % 3 == 0){
//         sum += i;
//     }
// }

// console.log(sum);

// ================================================================================================

// 5-masala. 3 ga bo‘linadigan sonlar
// Qiyinlik: 5/10
// 1 dan 100 gacha bo‘lgan sonlar ichidan 3 ga qoldiqsiz bo‘linadigan sonlarni chiqaring. Shu
// sonlarning nechta ekanini ham aniqlang.

// let sum = 0; 
// let sanoq = 0;

// for(let i = 0 ; i <= 100 ; i++){
//     if(i % 3 == 0){
//         sum = i;
//         sanoq += 1;
//     }

//     console.log(sum);
// }
// console.log(sanoq);

// ======================================================================================================

// 6-masala. Sonning ko‘paytirish jadvali
// Qiyinlik: 5/10
// let number = 7 deb o‘zgaruvchi yarating. Loop yordamida shu sonning 1 dan 10 gacha ko‘paytirish
// jadvalini chiqaring.
// Masalan: 7 x 1 = 7, 7 x 2 = 14 va hokazo.


// for(let i = 1 ; i <= 10 ; i++){
//     let number = 7;
//     number = number * i;
//     console.log(number);
// }

// ====================================================================================================

// 7-masala. Musbat va manfiy sonlar
// Qiyinlik: 6/10
// let number = -15 deb o‘zgaruvchi yarating. Agar son musbat bo‘lsa, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son manfiy bo‘lsa, uning modulini aniqlab, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son 0 bo‘lsa, “Son nolga teng” xabarini chiqaring.
// Eslatma: Math.abs() ishlatmasdan ham yechishga harakat qiling.

// let number = -20;
// let son = number * (-1);

// if(number == 0){
//     console.log(`Son nolga teng`);
// }
// else if(number < 0){
//     let son = number * (-1);

//     for(let i = 1 ; i <= son ; i++){
//         console.log(i);
//     }
// }
// else{
//     for(let i = 1 ; i <= number ; i++){
//         console.log(i);
//     }
// }

// =====================================================================================================

// 8-masala. Raqamni topish
// Qiyinlik: 6/10
// let secretNumber = 8 deb belgilang. 1 dan 10 gacha bo‘lgan sonlarni loop yordamida tekshiring. Son
// secretNumber ga teng bo‘lsa, “Son topildi” deb chiqaring. Qolgan sonlar uchun “Bu son emas” deb
// chiqaring.
// Qo‘shimcha shart: son topilgandan keyin loopni break yordamida to‘xtating.

// let secretNumber = 8;

// for(let i = 1 ; i <= 10 ; i++){
//     if(i == secretNumber){
//         console.log(`Son topildi ${i}`)
//         break;
//     }
//     else{
//         console.log(`Bu son emas ${i}`)
//     }
// }

// =======================================================================================================

// 9-masala. Sonning raqamlarini sanash
// Qiyinlik: 7/10
// let number = 58324 soni berilgan. Uning nechta raqamdan iborat ekanini loop yordamida aniqlang.
// Kutilgan natija: 5 ta raqam. Yordam: sonni 10 ga bo‘lib, butun qismini olish orqali oxirgi raqamlarni
// ketma-ket olib tashlash mumkin. Math.floor() dan foydalanishingiz yoki boshqa usul topishingiz mumkin.

// let number = 583244;
// let sanoq = 0;

// for(let i = 1 ; i <= 10 ; i++){
//     if(number != 0){
//         number = (number - number % 10) / 10;
//         sanoq += 1;     
//     }
//     else{
//         break;
//     }
    
// }
// console.log(sanoq);

// 10-masala. Mukammal sonni aniqlash
// Qiyinlik: 8/10
// Mukammal son — o‘zidan tashqari barcha musbat bo‘luvchilarining yig‘indisi o‘ziga teng bo‘lgan son.
// Masalan, 6 mukammal son, chunki 1 + 2 + 3 = 6. let number = 28 deb o‘zgaruvchi yarating va loop
// yordamida bu son mukammal yoki mukammal emasligini aniqlang.
// Kutilgan natija: “Bu mukammal son”. Shart: for, if va % operatorlaridan foydalaning.

// let number = 28;
// let yegindi = 0;

// for(let i = 0 ; i < number ; i++){
//     if(number % i == 0){
//         yegindi += i;
//     }
// }

// if(yegindi == number){
//     console.log(`Bu mukammal son`);
// }

// else{
//     console.log(`Bu mukammal son emas`);
// }

