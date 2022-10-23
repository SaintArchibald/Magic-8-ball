userName =''
const userQuestion = 'will I find love?'
let randomNumber = Math.floor(Math.random() * 20)
let eightBall = ''
 
userName ?  console.log(`Hello ${userName}`): console.log('Hello!')
console.log(`${userName} wants to know: ${userQuestion}`)
 
switch (randomNumber) {
  case 1:
  eightBall = 'It is certain.';
  break;
  case 2:
  eightBall = 'It is decidedly so.';
  break;
  case 3:
  eightBall = 'Without a doubt.';
  break;
  case 4:
  eightBall = 'Yes definitely.';
  break;
  case 5:
  eightBall = 'You may rely on it.';
  break;
  case 6:
  eightBall = 'As i see it, yes.';
  break;
  case 7:
  eightBall = 'Most likely.';
  break;
  case 8:
  eightBall = 'Outlook good.';
  break;
  case 9:
  eightBall = 'Yes!';
  break;
  case 10:
  eightBall = 'Signs point to yes.';                        
  break;
  case 11:
  eightBall = 'Reply hazy try again';
  break;
  case 12:
  eightBall = 'Ask again Later.';
  break;
  case 13:
  eightBall = 'better not tell you now.';
  break;
  case 14:
  eightBall = 'Cannot predict now';
  break;
  case 15:
  eightBall = 'Concentrate and ask again.';
  break;
  case 16:
  eightBall = 'Do not count on it';
  break;
  case 17:
  eightBall = 'My reply is no.';
  break;
  case 18:
  eightBall = 'My sources say no';
  break;
  case 19:
  eightBall = 'Outlook not so good';
  break;
  case 20:
  eightBall = 'Very doubtful';
  break;
}
console.log(eightBall)