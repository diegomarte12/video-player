//definicion de variables a sus respectivos elementos
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


//asociar las variables a un evento y una funcion correspondiente
$play.addEventListener('click',handlePlay) //cuando se hace click se reproduce o pausa
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleforward)

//delaracion de funciones
function handlePlay(){
    $video.play()   
    $play.hidden = true //hace que cuando se ejecute la accion uno se oculte y el otro aparezca
    $pause.hidden = false //En JS los atributos de HTML son propiedades
    console.log('click en play')
}

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false //hace que cuando se ejecute la accion uno se oculte y el otro aparezca
    console.log('click en pause')
}

function handleBackward(){
    $video.currentTime -= 10
    console.log('click en backward -> timepo ', $video.currentTime)
}

function handleforward(){
    $video.currentTime += 10
    console.log('click en forward -> timepo ', $video.currentTime)
}


const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleProgress) /*El loadedmetadata es un evento que indica que toda la metadata de un elemetno ya se cargo*/
$video.addEventListener('timeupdate',handleTimeUpdate) /*El loadedmetadata es un evento que indica que toda la metadata de un elemetno ya se cargo*/
$video.addEvenetListener('click',handleVideoPlay)/*Para cuando se de click en el video se reprodusca o pause */

function handleVideoPlay(){
    if($video.paused = true){
        $video.play()
        $play.hidden = true //hace que cuando se ejecute la accion uno se oculte y el otro aparezca
        $pause.hidden = false //En JS los atributos de HTML son propiedades  
    }
    if($video.paused = false){
        $video.pause()
        $pause.hidden = true
        $play.hidden = false //hace que cuando se ejecute la accion uno se oculte y el otro aparezca
    }
}
function handleProgress(){
    $progress.max = $video.duration
    /*indica que el atributo max de la etiqueta progress sera igual a la duracion del video*/
}

function handleTimeUpdate(){ /*actualizar la barra de progreso segun el tiempo*/ 
    $progress.value =  $video.currentTime
    if($video.currentTime>=$video.duration){
        $pause.hidden = true
        $play.hidden = false
    } 
}

$progress.addEventListener('input',handleProgresUpdate)

function handleProgresUpdate(){
    $video.currentTime = $progress.value
}
