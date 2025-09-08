export const music = [  
 {  
  artist: "Britney Spears",  
  id: "5923287001",  
  genre: "Pop",  
  similar: ["Ariana Grande", "Selena Gomez", "Avril Lavigne", "Taylor Swift", "Adele", "Rihanna", "Daya", "Lady GaGa", "Demi Lovato", "Paramore", "Pink", "Katy Perry", "Flume"],  
  albums: [  
   {  
    album: "..Baby One More Time",  
    songs: [  
     {  
      id: "5000101",  
      title: "...Baby One More Time",  
      downloadPath: "https://koders.cloud/global/content/songs/babyonemoretime.mp3",   
      duration: "3:30",  
     },  
       // Other songs  
    ],  
   },  
   // Other albums  
  ],  
 }, 
// Other Artists
];



/**************

PLEASE USE THE EXACT METHOD OF METADATA FORMATTING THAT I HAVE USED IN THE EXAMPLE ABOVE;  Meaning (but definitely not limited to), the lowercasing of the audio file's name in the URL ( downloadPath );   
FOR EXAMPLE:
[ "..../songs/babyonemoretime.mp3" ]


The ID Numbers can be determined EASIEST by assigning a RANDOM number each and every time FOR THE ARTIST ID NUNBER ONLY.  For the Song ID Numbers, the same can be done for the very first song of the Album, then it would be nice for you to number the rest of the Album Songs in order from that number;
FOR EXAMPLE:
[ 61872001, 61872002, 61872003, 61872004, AND SO ON;  And if you are generating multiple Albums or all of them for an Artist, then you can even continue on to the next Album and continue the numbering with THOSE Songs, and so on, whatever you prefer is actually the best thing to ultimately do.  Thank you very much!!!! ]

**************/
