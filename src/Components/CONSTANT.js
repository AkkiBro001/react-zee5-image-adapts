const DEFAULT_NOTI_SIZE = { width: 1024, height: 512 };
const DEFAULT_CTA = "Watch Live";
const DEFAULT_CTA_SIZE = { width: null, height: 58 };
const DEFAULT_CTA_POS = { x: 0, y: 353 };
const DEFAULT_LIVE_CTA_POS = { x: 0, y: 353 };
const DEFAULT_LIVE_CTA_SIZE = { width: 1024, height: 115 };

const NOTIFICATION = {
    /* General */
    resetAll: false,

    /* Preview Size */
    Preview: {
        guides: false,
        size: DEFAULT_NOTI_SIZE,
        isFloating: false,
        bgColor: '#000'
    },
    /* Import Section */
    Import: {
        importedImage: [],
        isCustomOn: false,
        isPreviewOn: false,
        customSize: { width: DEFAULT_NOTI_SIZE.width, height: DEFAULT_NOTI_SIZE.height },
        isSavedSize: false /* is Size saved in LocalStorage */
    },

    Transform: {
        image: "img1",
        transform: [{ x: 0, y: 0, scale: 50, quality: 50 }]
    },

    CTA_Channel: {
        /*CTA*/
        cta: DEFAULT_CTA.replace(/[\s-]/g, ""), //Default CTA "Watch Live"
        ctaSize: DEFAULT_CTA_SIZE,
        ctaPOS: DEFAULT_CTA_POS,
        isLIVECTA: false, /* Watch live With Strip is On */
        liveCtaSize: DEFAULT_LIVE_CTA_SIZE, /* Watch live With Strip Size */
        liveCtaPOS: DEFAULT_LIVE_CTA_POS, /* Watch live With Strip POS */
        /*Cutomize CTA*/
        isCTACustomOn: false, /*is customize CTA On */
        


        /*Channel*/
        isChannelOn: false,
        isChannelCustomOn: false,
        channel: {
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: 100,
                height: 100,
            }
        },
        gradient: {
            isActive: false,
            type: "dark",
            opacity: 50
        },
        setDefault: null

    },




}

export const TitleCase = (str) => {
    if (typeof str !== 'string') return str
    const strArr = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1))
    return strArr.join(" ")
}

export const Notification_Type = [
    "Normal (1024x512)",
    "3in1 (640x320)",
    "ZB (800x600)",
    "Mug (72x72)",
    "Custom",
]

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

export const ChannelPosition = [
    "Top Right",
    "Top Left",
    "Bottom Right",
    "Bottom Left",
    "On Watch Live Strip",
    "Custom"
]

export const DefaultCopyPosition = ["Bottom Right", ...ChannelPosition.filter(ele => ele === "On Watch Live Strip" ? false : ele === "Bottom Right" ? false : true)]

export const OutPutFormat = [
    "JPG",
    "PNG"
]

export const CTAPosition = [
    "Bottom Center",
    "Bottom Left",
    "Bottom Right",
    "Center Right ZB",
    "Center Center",
    "Custom"
]

export default NOTIFICATION;