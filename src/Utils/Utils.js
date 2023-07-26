export async function getImage(url){
        if(url.length === 4){
            const p1 = await fetchImage(url[0]);
            const p2 = await fetchImage(url[1]);
            const p3 = await fetchImage(url[2]);
            const p4 = await fetchImage(url[3]);

            return Promise.all([p1,p2,p3,p4])
        }else if(url.length === 3){
            const p1 = await fetchImage(url[0]);
            const p2 = await fetchImage(url[1]);
            const p3 = await fetchImage(url[2]);
            

            return Promise.all([p1,p2,p3])
        }else if(url.length === 2){
            const p1 = await fetchImage(url[0]);
            const p2 = await fetchImage(url[1]);
            
            

            return Promise.all([p1,p2])
        }else{
            const p1 = await fetchImage(url[0]);
            return Promise.all([p1])
        }

        
}

export function fetchURL(file){
    return new Promise((reslove, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener(
            "load",
            () => {

                const img = new Image()
                img.src = reader.result;
                img.onload = function(){
                    reslove({url: reader.result, ...scaleToFill(this)})
                }
              
              
              
            },
            false,
          );
    })
}


export function fetchImage(file){
    return new Promise((reslove, reject) => {
        

                const img = new Image()
                img.src = file;
                img.onload = function(){
                    reslove(this)
                }
              
              
              
          
    })
}


export function scaleToFill(img){
    
    const {notiSize, noOfImg} = JSON.parse(localStorage.getItem('activeNotiSize'))
    

    const canvasWidth =  notiSize.w / noOfImg;
    const canvasHeight =  notiSize.h;
    // get the scale
    const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
    // get the top left position of the image
    const x = Number(((canvasWidth / 2) - (img.width / 2) * scale).toFixed(2));
    const y = Number(((canvasHeight / 2) - (img.height / 2) * scale).toFixed(2));
    const width = Number((img.width * scale).toFixed(2));
    const height = Number((img.height * scale).toFixed(2));

    return {x, y, width, height, quality: 50}
  }

