let btn= document.querySelector(".btn");
let content= document.querySelector(".content");
let voice= document.querySelector(".voice");

function speak(text) {
    let textspeak = new SpeechSynthesisUtterance(text);
    textspeak.rate = 1;
    textspeak.pitch = 1;
    textspeak.volume = 1;
    window.speechSynthesis.speak(textspeak);
}
speak();

function wishme(){
    let day= new Date()
    let hours= day.getHours()
    if(hours>=0 && hours<12){
        speak("Good morning sir")
    }
    else if(hours>=12 && hours< 18){
        speak("Good afternoon sir")
    }
    else{
        speak("good evening sir")
    }
}

window.addEventListener('load',()=>{
    wishme();
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition= new speechRecognition();

recognition.onresult=((event)=>{
    let currentindex=event.resultIndex
    let transcript=event.results[currentindex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
})

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    voice.play()
    btn.style.display="none"
})



function takeCommand(message){
    btn.style.display="block"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("hello sir what can i help you")
    }
    else if(message.includes("who are you")){
        speak("i'm jarvis?")
    }
    else if(message.includes("who created you")){
        speak("i'm jarvis created by somnath sir and who are you?")
    }
    else if(message.includes("who is vaibhav")){
        speak("vaibhav is gay")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://m.facebook.com")
    }

    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let day=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(day)
    }
    else if (message.toLowerCase()) {
        speak(`This is what I found on the internet regarding ${message.replace("jarvis", "").trim()}`);
        window.open(`https://www.google.com/search?q=${message.replace("jarvis", "")}`,"_blank");
    }
    else{
        speak("sorry i don't understand that")
    }
}

let islogin= false;

        const main= document.getElementById("main");
        const loginmodel= document.getElementById("loginmodel");
        const loginform= document.getElementById("loginform");
        const errormessage= document.getElementById("errormessage");
        loginmodel.style.display="none"

        main.addEventListener("click",()=>{
            if(islogin){
                console.log("true")
            }
            else{
                loginmodel.style.display="flex";
                console.log("false")
            }
        });

        loginform.addEventListener("submit",(e)=>{
            e.preventDefault();

            if(true){
                islogin=true;
                loginmodel.style.display="none";
            }
        });