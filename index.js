function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logshout(string){
  console.log(string)
}
function logwhisper(string){
  
console.log.restore(string)
}