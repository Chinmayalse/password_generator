const password_box=document.getElementById("password");
const len=6;

const uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc="abcdefghijklmnopqrstuvwxyz";
const sym="!@$%^*";
const num="1234567890";
const allchar=uc+lc+num+sym;
function display()
{
  let password='';
  while(len>password.length)
  {
    password+=allchar[Math.floor(Math.random()*allchar.length)];
  }
  password_box.value=password;
}
function copy()
{
  password_box.select();
  document.execCommand('copy');
}