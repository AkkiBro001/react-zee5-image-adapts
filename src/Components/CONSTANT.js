const DEFAULT_NOTI_SIZE = {width: 1024, height: 512};
const DEFAULT_CTA_SIZE = {width: null, height: 58};
const DEFAULT_CTA_POS = {x:0, y:353};
const DEFAULT_LIVE_CTA_POS = {x:0, y:353};
const DEFAULT_LIVE_CTA_SIZE = {width: 1024, height: 115};
export default class NOTIFICATION {
    constructor(type){
        
            
                this.size = type === '72x72' ? {width: 72, height: 72}
                : type === 'ZB' ? {width: 800, height: 600}
                : type === '3in1' ? {width: 640, height: 320}
                : DEFAULT_NOTI_SIZE
                ;
                this.cta = type === '72x72' ? null : "WatchLive";
                this.isLIVECTA = false;
                this.channel = false;
                this.ctaSize = type === '72x72' ? null : DEFAULT_CTA_SIZE;
                this.ctaPOS = type === '72x72' ? null : DEFAULT_CTA_POS;
                this.liveCtaPOS = type === '72x72' ? null : DEFAULT_LIVE_CTA_POS;
                this.liveCtaSize = type === '72x72' ? null : DEFAULT_LIVE_CTA_SIZE
            
        
    }


    
}

