// TASK 1
// let a = prompt()
// let ans = 'something'
// let ans1 = ans.concat(" ", a)
// alert(ans1)

// TASK 2
// let a = prompt()
// let ans = 'Edabit'
// let ans1 = a+ans
// alert(ans1)

// TASK 3
// let a = prompt()
// let ans = 'Hello'
// let ansM = 'my Love'
// let ans1;
// if(a == 'Mubashir'){
//     ans1 = ans.concat(" ", ansM);
//     alert(ans1)
// }
// else{
//     ans1 = ans.concat(" ", a);
//     alert(ans1)   
// }

// TASK 4
// let a = prompt()
// let ok = false
// if(a == ok){
//     alert(true)
// }
// else{
//     alert(false)
// }

// TASK 5
// let a = prompt()
// let b = prompt()
// alert(b+" "+a)

// TASK 6
// let a = prompt()
// let b = prompt()
// let c = prompt()
// alert(`Their names were:${a}${b}${c}`) 

// TASK 7
// let a = prompt()
// let ans = a.substring(1);
// alert(ans)

// TASK 8
// let a = prompt()
// let ans = a.length;
// alert(ans)

// TASK 9
// let a = prompt()
// let ans = a.length;
// if(ans%2 == 0){
//     alert(true)
// }
// else{
//     alert(false)
// }

// TASK 10
// let a = prompt()

// let ans = '';
// for(let i = 0; i<a.length; i++){
//     if(a[i]>='a' && a[i]<='z'){
//         ans+=a[i]
//     }
// }
// alert(ans)
 


// PRACTICE 2
// TAKS 1
// let a = prompt()
// let ans  = '';
// for(let i = 0; i<a.length; i++){
//     ans+=a[i].repeat(2);
// }
// alert(ans)

// TASK 2
// let a = prompt()
// let ans = a.match(/potatoes/gi).length
// alert(ans)

// TASK 3
// let a = prompt()
// let b = prompt()
// let cnt = 0
// let size = 7;
// for(let i = 0; i<b.length; i++){
//     if(b[i] == a[0]){
//         cnt++;
//     }
// }
// alert(cnt)

// TASK 4
// let a = prompt()
// let cnt = 0
// for(let i = 0; i<a.length; i++){
//     if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
//         cnt++;
//     }
// }
// alert(cnt)

// TASK 5
// let a = prompt()
// let ans = a.includes("bomb")
// if(ans == true){
//     alert("Duck!!!")
// }
// else{
//     alert("There is no bomb, relax.")
// }

// TASK 6
// let a = prompt()
// let ans = ''
// for(let i = 0; i<a.length; i++){
//     if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
//         continue
//     }
//     else{
//         ans+=a[i];
//     }
// }
// alert(ans)

// TASK 7
// let a = prompt()
// let vowel = 0
// for(let i = 0; i<a.length; i++){
//     if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'  || a[i] == 'A' || a[i] == 'E' || a[i] == 'I' || a[i] == 'O' || a[i] == 'U'){
//         vowel = i;
//         break;
//     }
// } 
// alert(vowel)

// TASK 8
// let n = prompt()
// let number = prompt()
// if(number == 1){
//     alert("Hello"+" "+n)
// }
// else{
//     alert("Bye"+" "+n)
// }

// TASK 9
// let s = prompt()
// let ans = s.split(" ")
// let ans1 = ans;
// let fir = ans1.length;
// let finalAns = '';
// for(let i = 0; i<ans.length; i++){
//     finalAns+=ans1[fir-1]
//     finalAns+=' '
//     if(fir>0){
//         fir--
//     }
// }
// alert(finalAns)
// Hello, world!

// TASK 10
// let s = prompt()
// let n = prompt()
// let ans = (n*100)/148900000;
// alert(`${s} is ${ans.toFixed(2)}% of the total world's landmass`)

// TASK 11
// let n = prompt()
// let ans = "";
// for(let i = n.length-1; i>=0; i--){
//     ans+=n[i]
// }
// alert(ans+n)
