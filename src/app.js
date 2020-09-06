const express=require('express');
const path=require('path');
const geocode=require('./utils/geocode')
const hbs=require('hbs');
const publicDirectoryPath=path.join(__dirname,'../public');
const vitw=path.join(__dirname,'/templates/views');
const port=process.env.PORT||3000
const partialsPath=path.join(__dirname,'/templates/partials');
hbs.registerPartials(partialsPath);
const app=express();
app.set('views',vitw);
console.log("popop");
console.log(vitw);

console.log("hello brother");
//console.log(publicDirectoryPath);
app.set('view engine','hbs');
app.use(express.static(publicDirectoryPath));



app.get('/',(req,res)=>{

    res.render('index',{
        title:'Weather',
        name:"abdaal"
    });
});

app.get("/weather",(req,res)=>{

   const addr= req.query.address;
    geocode(addr,(error,{latitude,longitude,location})=>{

        
      res.send({

        latitude:latitude,
        longitude:longitude,
        location:location
      })
    })

})

app.get('/help',(req,res)=>{

   res.render('help',{
       msg:'This is your help page '
   })
})
/*

const product={
 label:"This is my label pack",
 price:34,
 stock:"pinaapple",
 salesPrice:"Ponnok",
 rating:5.6
}
console.log(product);
*/
app.listen(port,()=>{
    console.log('Server is up on the port :3000');
})