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

export const CTAs = [
"Avail Now",
"Bengali",
"Buy Now",
"Coming Soon",
"Gujarati",
"Hindi",
"Kannada",
"LiveNow",
"Malayalam",
"Marathi",
"Play Button",
"Play Now",
"Punjabi",
"Read Now",
"Start Watching",
"Subscribe Now",
"Tamil",
"Telugu",
"No CTA",
"Watch Live Strip",
"Watch Live News Updates",
"Watch Live Strip With Shadow",
"Watch Now",
"Watch Live"
].reverse()

export const Channels = [
"No Channel",
"Aaj-Tak",
"10-TV",
"ABN-Telugu",
"ABP-Ananda",
"ABP-Asmita",
"ABP-Ganga",
"ABP-Majha",
"ABP-Nadu",
"ABP-News",
"ABP-Sanjha",
"ANI",
"Asianet-News-Bangla",
"Asianet-News-Hindi",
"Asianet-News-Tamil",
"Asianet-News-Telugu",
"Asianet-News",
"Asianet-Newsable",
"BBC-World-News",
"BTV",
"CVR-News",
"E24",
"Editorji",
"ESPN-Cricinfo",
"Euro-News",
"GNT",
"India-News-Gujarat",
"India-News-Punjab-Himachal",
"India-News-UP-UK",
"India-News",
"India-Today",
"INDIA-TV",
"Kairali-News",
"Latestly",
"Living-India-News",
"Media-News-Malayalam",
"News-24",
"News-9",
"News-First-Kannada",
"News-J",
"News-Nation",
"News-State-MP-CH",
"News-State-UP-UK",
"NewsX",
"NTV-Telugu",
"PinkVilla",
"Polimer-Tamil",
"Prag-News",
"Puthiya-Thalaimurai-Tamil",
"R-bangla",
"Republic-Bharat",
"Republic-TV",
"Saam-TV",
"Sports-Flashes",
"Suvarna-News",
"TEZ",
"Times-Now-Navbharat",
"TV5-News",
"TV5-Telugu",
"TV9-Bangla",
"TV9-Bharatvarsh",
"TV9-Gujarati",
"TV9-Kannada",
"TV9-Marathi",
"TV9-Telugu",
"V6-Telugu",
"Vendhar-TV",
"Wion",
"Zee-24-Ghanta",
"Zee-24-Kalak",
"Zee-24-Taas",
"Zee-Business",
"Zee-Hindustan",
"Zee-News",
"Zee-Punjab-Himachal",
]

export const COPYTEXT = [
    "NO COPY",
    "IPL COURTASY",
    "BCCI COURTASY",
    "ICC COURTASY",
    "FILE IMAGE",
    "CUSTOM COPY",
]

export const DefaultChannelPosition = [
    "Top Right",
    "Top Left",
    "Bottom Right",
    "Bottom Left",
    "On Watch Live Strip",
    "Custom"
]

export const DefaultCopyPosition = ["Bottom Right", ...DefaultChannelPosition.filter(ele => ele === "On Watch Live Strip" ? false : ele === "Bottom Right" ? false : true)]

export const OutPutFormat = [
    "JPG",
    "PNG"
]