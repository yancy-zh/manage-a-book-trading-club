import React from "react";
import TradeCard from "../components/TradeCard";
function Trades() {
   const data = [
     {
       user: "yao",
       bookGive: "quidem molestiae enim",
       bookTake: "sunt qui excepturi placeat culpa",
     },
     {
       user: "spencer",
       bookGive: "omnis laborum odio",
       bookTake: "eaque aut omnis a",
     },
     {
       user: "jimi",
       bookGive: "qui fuga est a eum",
       bookTake: "The Lost World",
     },
   ];
   return (
     <div className="ls-box">
       <div className="ls_title">
         <h3>Trades</h3>
       </div>
       <div className="ls_body">
         <ul>
           {data.map((it) => (
             <TradeCard it={it} />
           ))}
         </ul>
       </div>
     </div>
   );
}

export default Trades;
