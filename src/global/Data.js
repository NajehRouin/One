
export const filterProduct=[
  {name:"costume" ,image:require('../images/Costume.jpg'),id:"0"},
  {name:"veste" ,image:require('../images/veste.jpg'),id:"1"},
  {name:"survettement" ,image:require('../images/survettement.jpg'),id:"2"},
  {name:"espadrille" ,image:require('../images/espadrille.jpg'),id:"3"},
  {name:"pull" ,image:require('../images/Pull.jpg'),id:"4"},
  {name:"jeans" ,image:require('../images/jeans.jpg'),id:"5"},
  {name:"gilet" ,image:require('../images/gilet.jpg'),id:"6"},
  {name:"Pantalon",image:require('../images/pantalon-femme.jpg'),id:"7"},
  {name:"Robe",image:require('../images/robe.jpg'),id:"8"}

];

export const filterProduct2=[
  {name:"pyjama" ,image:require('../images/pyjama.jpg'),id:"0"},
  {name:"capuche" ,image:require('../images/capuche.png'),id:"1"},
  {name:"capuche-coton" ,image:require('../images/capuche_coton.jpg'),id:"2"},
  {name:"Ensemble sport" ,image:require('../images/vettement_sport.png'),id:"3"},
  {name:"Chaussure Sport" ,image:require('../images/chaussure-sport.jpg'),id:"4"},
  {name:"jeans" ,image:require('../images/jeans.jpg'),id:"5"},
  {name:"gilet" ,image:require('../images/gilet.jpg'),id:"6"},
  {name:"Pantalon",image:require('../images/pantalon-femme.jpg'),id:"7"},
  {name:"Robe",image:require('../images/robe.jpg'),id:"8"}

];



export const productData=[
  {name:"pyjama" ,price:50,image:require('../images/pyjama.jpg'),id:0},
  {name:"capuche" ,price:45,image:require('../images/capuche.png'),id:1},
  {name:"capuche-coton" ,price:45,image:require('../images/capuche_coton.jpg'),id:2},
  {name:"Ensemble sport" ,price:120,image:require('../images/vettement_sport.png'),id:3},
  {name:"Chaussure Sport" ,price:180,image:require('../images/chaussure-sport.jpg'),id:4},
  {name:"jeans" ,price:75,image:require('../images/jeans.jpg'),id:5},
  {name:"gilet" ,price:50,image:require('../images/gilet.jpg'),id:6},
  {name:"Pantalon",price:50,image:require('../images/pantalon-femme.jpg'),id:7},
  {name:"Robe",price:65,image:require('../images/robe.jpg'),id:8}

];


export const productData2=[
  {name:"pyjama" ,price:50,image:require('../images/pyjama.jpg'),id:0},
  {name:"capuche" ,price:45,image:require('../images/capuche.png'),id:1},
  {name:"capuche-coton",price:45,image:require('../images/capuche_coton.jpg'),id:2},
  {name:"Ensemble sport",price:120,image:require('../images/vettement_sport.png'),id:3},
  {name:"Chaussure Sport",price:180,image:require('../images/chaussure-sport.jpg'),id:4},
  {name:"jeans",price:75,image:require('../images/jeans.jpg'),id:5},
  {name:"gilet",price:50 ,image:require('../images/gilet.jpg'),id:6},
  {name:"Pantalon",price:50,image:require('../images/pantalon-femme.jpg'),id:7},
  {name:"Robe",price:65,image:require('../images/robe.jpg'),id:8}

];

export const specialData=[
  {title:"Women",key:0},
  {title:"Man",key:1},
  {title:"Children",key:2},
  {title:"Baby",key:3},
]
export const menu=[

  {key:'first',title:"produit"},
  {key:'second',title:"Info"},
  {key:'third',title:"REVIEWS"},
  {key:'fourth',title:"GALLERY"}
]






export const filterData=[{name:"Women",image:require('../images/cat-femme.jpg'),id:"0"},

                    {name:"man",image:require('../images/cat_homme.jpg'),id:"1"},
                    {name:"Children",image:require('../images/cat-enfant.jpg'),id:"2"},
                    {name:"baby",image:require('../images/cat-bébé.jpg'),id:"3"}
    ];

    export const BoutiqueData=[

       { boutiqueName:"Exist",farAway:"2",businessAddress:"rue tayeb mhiri,Monsatir",images:require('../images/exsit.jpg'),
         cordinates:{lat:35.77217504459635,lng:10.825137191368206},discount:15,deliveryTime:3,numberofReview:20,averageReview:900,
         productData:[{name:"Chemise",categorie:"Homme",price:45,image:require('../images/chemise.jpg')},
                    {name:"Pantalon",categorie:"Homme",price:65,image:require('../images/pantalon.jpg')},
                    {name:"Blouson",categorie:"Homme",price:150,image:require('../images/Blouson.jpg')},
                ],
                id:0},

        { boutiqueName:"Zen",farAway:"2.5",businessAddress:"Centre-ville de Monastir",images:require('../images/zen.jpg'),
        cordinates:{lat:35.7715874,lng:10.8266372},discount:10,deliveryTime:2,numberofReview:40,averageReview:800,
        productData:[{name:"Pantalon",categorie:"Femme",price:55,image:require('../images/pantalon-femme.jpg')},
                   {name:"GILET",categorie:"Femme",price:60,image:require('../images/gilet.jpg')},
                   {name:"Robe",categorie:"Femme",price:65,image:require('../images/robe.jpg')},
               ],
               id:1
       
       },

       
       { boutiqueName:"Hamadi Abid",farAway:"3",businessAddress:" Monastir",images:require('../images/hamadi_abid.jpg'),
       cordinates:{lat:35.772835903439265,lng:10.80146050504472},discount:30,deliveryTime:5,numberofReview:30,averageReview:500,
       productData:[{name:"Pantalon",categorie:"Femme",price:55,image:require('../images/pantalon-femme.jpg')},
       {name:"pyjama" ,price:50,image:require('../images/pyjama.jpg')},
       {name:"capuche" ,price:45,image:require('../images/capuche.png')},
       {name:"capuche-coton" ,price:45,image:require('../images/capuche_coton.jpg')},
       {name:"Ensemble sport" ,price:120,image:require('../images/vettement_sport.png')},
       {name:"Chaussure Sport" ,price:180,image:require('../images/chaussure-sport.jpg')},
              ],
              id:2
      
      },



    ]