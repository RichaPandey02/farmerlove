  
import React from "react";
import Abt from "../styles/Abt.css"
import Carousel from "../layout/Carousel";
import Card from "./Card";
const About = () => {
  return (
    <div>
      <Card/>
      <br/>
      <div className="wrapper">
        <div>
        <i className="material-icons brand-icon" data-testid="testcase" >agriculture</i> 
          <h1>Agriculture</h1>
          <p>
            Agriculture is the science, art and practice of cultivating plants
            and livestock.Agriculture was the key development in the rise of
            sedentary human civilization, whereby farming of domesticated
            species created food surpluses that enabled people to live in
            cities. The history of agriculture began thousands of years ago.
            After gathering wild grains beginning at least 105,000 years ago,
            nascent farmers began to plant them around 11,500 years ago. Pigs,
            sheep, and cattle were domesticated over 10,000 years ago. Plants
            were independently cultivated in at least 11 regions of the world.
            Industrial agriculture based on large-scale monoculture in the
            twentieth century came to dominate agricultural output, though about
            2 billion people still depended on subsistence agriculture. Modern
            agronomy, plant breeding, agrochemicals such as pesticides and
            fertilizers , and technological developments have sharply increased
            crop yields, while causing widespread ecological and environmental
            damage. Selective breeding and modern practices in animal husbandry
            have similarly increased the output of meat, but have raised
            concerns about animal welfare and environmental damage.
            Environmental issues include contributions to global warming,
            depletion of aquifers, deforestation, antibiotic resistance, and
            growth hormones in industrial meat production. Agriculture is also
            very sensitive to environmental degradation, such as biodiversity
            loss, desertification, soil degradation and global warming, which
            cause decrease in crop yield.Genetically modified organisms are
            widely used, although some are banned in certain countries.
          </p>
          <img src="https://image.shutterstock.com/image-photo/kolkata-india-march-18-2017-600w-611691938.jpg"  style={{height:300,width:420}}/>
        </div>
        <div>
        <i className="material-icons brand-icon"  data-testid="history">history_toggle_off</i> 
          <h1>History</h1>
          <p data-testid="testcase-1">
            The development of agriculture enabled the human population to grow
            many times larger than could be sustained by hunting and gathering.
            Agriculture began independently in different parts of the globe, and
            included a diverse range of taxa, in at least 11 separate centres of
            origin. Wild grains were collected and eaten from at least 105,000
            years ago.From around 11,500 years ago, the eight Neolithic founder
            crops, emmer and einkorn wheat, hulled barley, peas, lentils, bitter
            vetch, chick peas and flax were cultivated in the Levant. Rice was
            domesticated in China between 11,500 and 6,200 BC with the earliest
            known cultivation from 5,700 BC, followed by mung, soy and azuki
            beans. Sheep were domesticated in Mesopotamia between 13,000 and
            11,000 years ago. Cattle were domesticated from the wild aurochs in
            the areas of modern Turkey and Pakistan some 10,500 years ago.Pig
            production emerged in Eurasia, including Europe, East Asia and
            Southwest Asia, where wild boar were first domesticated about 10,500
            years ago.In the Andes of South America, the potato was domesticated
            between 10,000 and 7,000 years ago, along with beans, coca, llamas,
            alpacas, and guinea pigs. Sugarcane and some root vegetables were
            domesticated in New Guinea around 9,000 years ago. Sorghum was
            domesticated in the Sahel region of Africa by 7,000 years ago.
            Cotton was domesticated in Peru by 5,600 years ago,and was
            independently domesticated in Eurasia. In Mesoamerica, wild teosinte
            was bred into maize by 6,000 years ago. Scholars have offered
            multiple hypotheses to explain the historical origins of
            agriculture. Studies of the transition from hunter-gatherer to
            agricultural societies indicate an initial period of intensification
            and increasing sedentism; examples are the Natufian culture in the
            Levant, and the Early Chinese Neolithic in China. Then, wild stands
            that had previously been harvested started to be planted, and
            gradually came to be domesticated.
            <img src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2013/05/02/indianfarmer.jpg"  style={{height:300,width:420}}/>
          </p>
        </div>
        <div>
        <i className="material-icons brand-icon" >people_alt</i> 
          <h1>WorkForce</h1>
          <p>
            Agriculture is the science, art and practice of cultivating plants
            and livestock.Agriculture was the key development in the rise of
            sedentary human civilization, whereby farming of domesticated
            species created food surpluses that enabled people to live in
            cities. The history of agriculture began thousands of years ago.
            After gathering wild grains beginning at least 105,000 years ago,
            nascent farmers began to plant them around 11,500 years ago. Pigs,
            sheep, and cattle were domesticated over 10,000 years ago. Plants
            were independently cultivated in at least 11 regions of the world.
            Industrial agriculture based on large-scale monoculture in the
            twentieth century came to dominate agricultural output, though about
            2 billion people still depended on subsistence agriculture. Modern
            agronomy, plant breeding, agrochemicals such as pesticides and
            fertilizers, and technological developments have sharply increased
            crop yields, while causing widespread ecological and environmental
            damage. Selective breeding and modern practices in animal husbandry
            have similarly increased the output of meat, but have raised
            concerns about animal welfare and environmental damage.
            Environmental issues include contributions to global warming,
            depletion of aquifers, deforestation, antibiotic resistance, and
            growth hormones in industrial meat production. Agriculture is also
            very sensitive to environmental degradation, such as biodiversity
            loss, desertification, soil degradation and global warming, which
            cause decrease in crop yield.Genetically modified organisms are
            widely used, although some are banned in certain countries.
          </p>
          <img src="https://image.shutterstock.com/image-vector/stock-vector-silhouette-farmer-plowing-600w-1285562311.jpg"  style={{height:300,width:200}}/>
          <img src="https://image.shutterstock.com/image-vector/stock-vector-silhouette-farmer-plowing-600w-1285562311.jpg"  style={{height:300,width:200}}/>
        </div>
      </div>
    </div>
  );
};
export default About;