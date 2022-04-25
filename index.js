const dotenv=require('dotenv');
const express=require('express');
const cors=require('cors');
const app=express();

dotenv.config({path:'./.env'})

app.use(cors());
app.use(express.json())

const watches=[
    {
        id:1,
        name:'Reflex Vox Digital Silicone Red Strap Watch',
        price:"65.32",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/38072AP04_1.jpg?pView=pdp',
        desc:"astrack Reflex Vox is the First smartwatch from the brand Fastrack . It comes in 4 unique colors - Carbon Black, Flaming Red, Champagne Pink & Blazing Blue. Fastrack Reflex Vox comes with a 1.69... Large Display Screen, Built in Alexa, 100+Watch Face & 10+Sports Mode. Reflex Vox has got a large range of features such as menstrual tracker, Stress Monitor, SPO2 tracker, Sleep Tracker, 24*7 Heart Rate Monitor & 5ATM Water resistant. All these features can be enjoyed with a super lasting battery of 10 days. Reflex Vox comes with an exciting option of interchangeable straps to give a new look every day.",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Reflex Vox'},
            {Warranty:'12 Months on the date of purchase'},
            {Movement:'Smart'},
            {strapMaterial:'Silicone'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:2,
        name:'Stunners 3.0 Black Dial Metal Strap Watch',
        price:"33.93",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3277NM01_1.jpg?pView=pdp',
        desc:"not available",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Stunners 3.0'},
            {Warranty:'This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Metal'},
            {lockMechanism:'Push Button Clasp'},
            {gender:'Girl'},
        ]
    },
    {
        id:3,
        name:'After Dark Green Dial Leather Strap Watch',
        price:"62.70",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3270NL01_1.jpg?pView=pdp',
        desc:"Own the hustle with the new Afterdark collection. A bold new statement of indulgence to flaunt at every occasion with Case dimension: 38.00*45.50*11.30, 5 ATM/ 50 m Water resistance. Leather, Strap. Stainless steel back cover. High precision quartz analogue movement. 2 years warranty period.",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'After Dark'},
            {Warranty:'This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Leather'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:4,
        name:'After Dark Black Dial Leather Strap Watch for Guys',
        price:"53.55",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3272NL01_1.jpg?pView=pdp',
        desc:"Own the hustle with the new Afterdark collection. A bold new statement of indulgence to flaunt at every occasion. Case dimension: 40.00*44.00*10.20. 5 ATM/ 50 m Water resistance. Leather Strap with Stainless steel back cover. High precision quartz analogue movement with 2 years warranty period.",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'After Dark'},
            {Warranty:'This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Leather'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:5,
        name:'Batman Blue Dial Leather Strap Watch',
        price:"33.93",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3210NL03_1.jpg?pView=pdp',
        desc:"For the Batman fan in you, flaunt the perfect fashion accessory with Case dimension: 44.80x50.40x10.20, Water resistance: 5 ATM/50 m | Leather Strap | Stainless steel back cover | High precision quartz analogue movement | 2 years warranty period",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Batman'},
            {Warranty:'This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Leather'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:6,
        name:'Batman Black Dial Stainless Steel Strap Watch',
        price:"62.70",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3269KM01_1.jpg?pView=pdp',
        desc:"For the Batman fan in you, flaunt the perfect fashion accessory with Case dimension: 44.80x50.40x10.20, Water resistance: 5 ATM/50 m | Leather Strap | Stainless steel back cover | High precision quartz analogue movement | 2 years warranty period",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Batman'},
            {Warranty:'This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Stainless Steel'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:7,
        name:'Batman Black Dial Leather Strap Watch',
        price:"41.78",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3269NL01_1.jpg?pView=pdp',
        desc:"For the Batman fan in you, flaunt the perfect fashion accessory with Case dimension: 44.80x50.40x10.20, Water resistance: 5 ATM/50 m | Leather Strap | Stainless steel back cover | High precision quartz analogue movement | 2 years warranty period",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Batman'},
            {Warranty:'This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'leather'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:8,
        name:'Urban Bounce Red Dial Red Strap Watch',
        price:"54.85",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3268NP01_1.jpg?pView=pdp',
        desc:"no description available",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Urban Bounce'},
            {Warranty:'12 months warranty on the movement from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Silicone'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:9,
        name:'Urban Bounce Red Dial Red Strap Watch',
        price:"54.85",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/3268NP01_1.jpg?pView=pdp',
        desc:"no description available",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Urban Bounce'},
            {Warranty:'12 months warranty on the movement from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Silicone'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:10,
        name:'Wonder Woman Black Dial Leather Strap Watch',
        price:"49.51",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/6240KM01_1.jpg?pView=pdp',
        desc:"For the Wonder woman fan in you, flaunt the perfect fashion accessory. Case dimension: 28.78X34.29X8.00, Water resistance: 3 ATM/30 m | Metal Strap | Stainless steel back cover | High precision quartz analogue movement | 2 years warranty period.",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Wondar Woman'},
            {Warranty:'12 months warranty on the movement from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Leather'},
            {lockMechanism:'Buckle'},
            {gender:'Girls'},
        ]
    },
    {
        id:11,
        name:'Hulk from Avengers - End game',
        price:"10.37",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/9915PP87_1.jpg?pView=pdp',
        desc:"No-one smashes better than the incredible Hulk! Inspired by the power-packed world of superheroes and featured proudly in Fastrack's End game collection, this black and green dial analog watch is everything the Avenger in you was dreaming of. Enclosed stylishly in a round plastic case is the modish dial paired amazingly with the black and green silicone strap having buckle lock for the ideal fit. Make it a part of your trendy collection or save it for occasions, this watch smashes your dull times just like the Hulk destroys the evil ones.",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Avengers End game'},
            {Warranty:'6 months on the Movement and 12 months warranty on the Battery of the watch from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Silicone'},
            {lockMechanism:'Buckle'},
            {gender:'Guys'},
        ]
    },
    {
        id:12,
        name:'Coca-Cola Edition by Fastrack Silver Dial Red Nylon Strap Watch',
        price:"25.37",
        image:'https://staticimg.titan.co.in/Fastrack/Catalog/6256SP01_1.jpg?pView=pdp',
        desc:"no description available",
        quantity:1,
        techSpecs:[
            {brand:'fastrack'},
            {waterResistant:'5ATM'},
            {Collection:'Coca Cola Edition by Fastrack'},
            {Warranty:'This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.'},
            {Movement:'Quartz'},
            {strapMaterial:'Nylon'},
            {lockMechanism:'Buckle'},
            {gender:'Women'},
        ]
    },
]


app.get('/watches',(req,res)=>{
    res.status(200).json(watches)
})


const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})