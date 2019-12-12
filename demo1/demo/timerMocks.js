export default function timer(){
    console.log('before ....',new Date().getTime())
    setTimeout(()=>{
        console.log('after....',new Date().getTime())
    },10000)
}