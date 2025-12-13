/* ioブロッキングする処理をsetIntervalで分割します。 */


function blockingFunc(max_loop=10){
    console.log('loop start')
    for(let i=0;i<max_loop;i++){
        console.log('loop num :',i)
    }
    console.log('loop end')
}

function blockingFunc2(max_loop=10){
    let counter = 0
    const timer = setInterval(()=>{
        if(counter++>max_loop) clearInterval(timer)
        console.log('loop2 num:',counter)
    },1)
}


blockingFunc()
blockingFunc()

blockingFunc2()
blockingFunc2()