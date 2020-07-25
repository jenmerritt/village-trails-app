import React, {useState} from 'react';
import './styles/Trail.css';
import './styles/Story.css';
import './styles/MobileLayout.css'

function Story() {

    const [showIntro, setShowIntro] = useState(false);

    return (
      <div className="story-wrapper">
            <div className="text-content">
              <a id="top" className="no-dec-link"><h2>Crayke Village Trail</h2></a>
              <hr className="divider" />
              { showIntro ?
              <>
                <div className="accordion-wrap"  onClick={() => setShowIntro(false)}>
                  <div className="accordion-left"><h3 className="cursor-effect">Introduction</h3></div>
                  <div className="accordion-right"><img className="minus-sign-image" src="../minus-sign.png"  alt="minus-sign" /></div>
                </div>
                  <section>
                    <p>Crayke (the name possibly comes from the Saxon word ‘Creca’, meaning crag or rock) has a long history, with archaeological evidence showing occupation since Neolithic times. It seems to have been a key staging point on an ancient trackway going north – south. </p>
                    <p>There is strong evidence of a Saxon settlement, possibly a monastery, on the hill. Indeed records show that in 685 Crayke and the land three miles around it was given to Cuthbert, Bishop of Lindisfarne, as a resting place on journeys to York. Thus started Crayke’s long association with Durham. Local finds include a polished stone axe head, dated to 3000BC, Roman pottery – possibly associated with Crayke’s use as an inland signal station built as part of the Saxon Shore defences in the 4th century, a 7th century pendant, a fragment of a 9th century stone cross and a curious hastily constructed burial pit containing one female and fifteen male skeletons. Are they monks, plague victims or maybe victims of William the Conqueror’s Harrying of the North?</p> 
                    <p>The Domesday Book (1086) shows Crayke’s value had halved since the time of Edward the Confessor, almost certainly the result of William’s actions.</p>
                    <p>For more information on Crayke History visit our website: <a href="http://www.craykehistory.uk" target="_blank" rel="noopener noreferrer">www.craykehistory.uk</a></p>
                  </section>
              </>
              :
              <div className="accordion-wrap" onClick={() => setShowIntro(true)}>
                <div className="accordion-left">
                  <h3 className="cursor-effect">Introduction</h3>
                </div>
                  <div className="accordion-right"><img className="plus-sign-image" src="../plus-sign.png"  alt="plus-sign" /></div>
              </div>
              } 
              <hr className="divider" />
              <section>
                <h3><img alt="1" className="marker" src="../markers/1.png"/> The Old Rectory</h3>
                <p>Start the trail at the top of the hill. Go past the church and on your left, as the road bends to the south is <span className="bold">The Old Rectory</span>, much altered in 1803-5 by Rector Robert Gray, who began the addition of a third storey which had to be demolished in 1839, after high winds showed it had made the building very unstable.</p>
                <a href="https://craykehistory.files.wordpress.com/2019/11/cropped-img_6034-copy-2.jpg" target="_blank" rel="noopener noreferrer" ><img src="https://craykehistory.files.wordpress.com/2019/11/cropped-img_6034-copy-2.jpg" className="story-image" /></a>
                <p className="image-caption">Click image to view full size (opens in new tab)</p>
              </section>
              <section>
                <h3><img alt="2" className="marker" src="../markers/2.png"/> Church Farm</h3>
                <p>Turn back and go down the hill. On your right, set sideways to the road is <span className="bold">Church Farm</span>, once the village blacksmith’s forge.</p> 
              </section>
              <section>
                <h3><img alt="3" className="marker" src="../markers/3.png"/> Crayke Cottage</h3>
                <p>Further down stands the modestly named <span className="bold">Crayke Cottage</span>, thought to have been built in 1852 as the curate’s house and the birthplace of William Ralph Inge, who was Dean of St Paul’s Cathedral in London from 1911-34.</p>
              </section>
              <section>
                <h3><img alt="4" className="marker" src="../markers/4.png"/> Churton Hall</h3>
                <p>Turn right at the bottom of the hill and head down Westway. This street was known as School Street until relatively recently, as <span className="bold">Churton Hall</span> (on your right) was the original school house. Opened in 1846, it was erected at the expense of the Reverend Edward Churton and other benefactors for the free education of boys, later enlarged to take girls. The rectors were hard taskmasters, records show a high turnover of schoolmasters in the 1870s with money, poor school attendance, low standards and inability to play the organ being cited as problems. Part of the bell tower fell down in 1971, after being struck by lightning, and in 1972 a new school was built on the site of the old Village Institute. The old school, now a private house, became the village hall, named in memory of Edward Churton.</p>
              </section>
              <section>
                <h3><img alt="5" className="marker" src="../markers/5.png"/> The Pinfold</h3>
                <p>Head further down the hill and cross Easingwold road. Behind the hedge on the small green in front of you at the corner you will find <span className="bold">The Pinfold</span>, where straying farm animals were kept after being rounded up. This was not the first pinfold in the village. It was built in 1852, after the Reverend Churton became exasperated by the noise the animals made when held in the original one beside the church. Farmers had to pay a fine to both the person whose land they had strayed on to, and to the pound keeper before the animals were released.</p>
              </section>
              <section>
                <h3><img alt="6" className="marker" src="../markers/6.png"/> Tudor Cottage</h3>
                <p>Now cross over towards Town End Farm and head back up Westway. Looking up the road, you will see that, as with much of the village, the original cobbles remain in place. First you will come to <span className="bold">Tudor Cottage</span> with its original timber frame, thought to date from the early 17th century. </p>
              </section>
              <section>
                <h3><img alt="7" className="marker" src="../markers/7.png"/> The Homestead</h3>
                <p>Further up, outside <span className="bold">The Homestead</span>, you will also see by the steps to the house some staddle stones, these were traditional rodent proof footings for grain stores. It was built in 1872 by William Bayston, hence WB on the gable.</p>
              </section>
              <section>
                <h3><img alt="8" className="marker" src="../markers/8.png"/> The Durham Ox</h3>
                <p>Head up past <span className="bold">The Durham Ox</span>, onto Brandsby Street. The Durham Ox is over 300 years old and is named after the famous Shorthorn Ox of immense size and weight. It also references Crayke’s link to Durham, to which county it belonged until 1844. This status made the parish a favourite haunt for those poaching in the Forest of Galtres, as they could escape prosecution by York authorities. When Crayke had 3 or 4 public houses, names such as The Greyhound show no attempt to disguise poaching activities.</p>
              </section>
              <section>
                <h3><img alt="9" className="marker" src="../markers/9.png"/> Ivy Farm House</h3>
                <p>Walk all the way down to the last house on Brandsby Street on your right (you will need to cross the road as there is no pavement). <span className="bold">This is Ivy Farm House</span>, which was built in 1560 (although the plaque on the house dates from Stephen Cliff’s time). Go a few steps down the lane beside it to see its timber framing at the rear. Now go back across the road and head up into the village.</p>
              </section>
              <section>
                <h3><img alt="10 and 11" className="marker" src="../markers/10.png"/><img className="marker" src="../markers/11.png"/> Rose Cottage and Priest Cottages</h3>
                <p>On your right you will see several properties of significant age: <span className="bold">Rose Cottage and Priest Cottages</span> next door. Rose Cottage served as a Catholic chapel from 1794 to 1833 (Catholic worship being legal again in England in 1791). Historically, Crayke has been a multi-faith village with Anglican, Catholic, Methodist and Quaker buildings at one time or another.</p>
              </section>
              <section>
                <h3><img alt="12" className="marker" src="../markers/12.png"/> The Old Bakery</h3>
                <p>Go a little further and you come to <span className="bold">The Old Bakery</span>, originally belonging to Charles Hogg Builders. A long established business, it was responsible for key village works such as enlarging Crayke Manor in the 1890s for Stephen Cliff, who had bought most of Crayke Estate and whose family still own much of it. The property then became Banks’ Bakery.</p>
              </section>
              <section>
                <h3><img alt="13" className="marker" src="../markers/13.png"/> Whistling Green</h3>
                <p>Now head up Key Lane. This was originally known as Kiln Lane, a clue to early pottery works in the village. On your left you will see the original Methodist Chapel, now a house. It was replaced by the chapel on Church Hill. Turn left at the top and walk down to this chapel, now also a house named <span className="bold">Whistling Green</span>. It dates from 1902.</p>
              </section>
              <section>
                <h3><img alt="14" className="marker" src="../markers/14.png"/> Village Green</h3>
                <p>Looking back up the hill, you will see the <span className="bold">Village Green</span>, where bonfires were held to celebrate key events including Queen Victoria’s Golden Jubilee. Picture postcards survive of children sledging down the hill in the snow.</p>
              </section>
              <section>
                <h3><img alt="15" className="marker" src="../markers/15.png"/> The Well</h3>
                <p>In front of you is <span className="bold">The Well</span>. Crayke has many natural springs and wells. It was blocked up in 1933, when piped water came to the village. Crayke resident Mr Hogg, who was born in 1885, recalled a Mr Cooper, well sinker, being gassed in it when he went down to save his son who had got into difficulties. Only the boy survived.</p>
              </section>
              <section>
                <h3><img alt="16" className="marker" src="../markers/16.png"/> Wellesley Cottage</h3>
                <p>Next is <span className="bold">Wellesley Cottage</span> with its unusual Flemish style brick work, with alternate headers and stretchers, previously one of Crayke’s pubs, latterly ‘The Rose and Crown’ (or just “Crown’) but once called ‘The Greyhound’.</p>
              </section>
              <section>
                <h3><img alt="17" className="marker" src="../markers/17.png"/> Crayke Hall</h3>
                <p>At the top of the green you come to <span className="bold">Crayke Hall</span>, built in 1747, for John Bowman, who came from Beverley and bought much land in Crayke. In 1767, Bowman is reputed to have persuaded the Bishop of Durham to appoint his brother, Thomas, as rector on the death of the incumbent Reverend Jephson. The housekeeper had been bribed to give Bowman an advantage by placing a lighted candle in an upstairs window of the rectory as soon as Jephson breathed his last.</p>
              </section>
              <section>
                <h3><img alt="18" className="marker" src="../markers/18.png"/> St Cuthbert's Church</h3>
                <p>At the top of the hill stands <span className="bold">St Cuthbert’s Church</span>. Take a moment to sit on the bench to the right of the gate in the churchyard. On a good day, you can see the towers of York Minster to the south and further off the less edifying sight of several power stations. Cuthbert is said to have founded a monastery in Crayke around 685. Our church, dating from 1436, could be on the site of the earlier monastic church where Cuthbert’s remains were kept for four months in the face of Viking attacks on Lindisfarne and the north coast in 883. His body was said to be intact 200 years after his death in 687. If you enjoyed the view south then you might want to take a quick detour down Love Lane, the entrance to which is via a couple of steps out of the churchyard to the east. As you head down the lane you will pass a wild garden on your left. This was the site of the burial pit mentioned in the introduction. Just through the gate at the end of the lane you can sit and enjoy the view towards the White Horse of Kilburn, near Sutton Bank.</p>
              </section>
              <section>
                <h3><img alt="19" className="marker" src="../markers/19.png"/> Crayke Castle</h3>
                <p>Leave the churchyard by the side steps on your left and walk up to the gates of <span className="bold">Crayke Castle</span>. First built in the twelfth century, probably in timber, it is said to have played host to five Plantagenet kings. The large imposing building, ‘The Great Chamber’ dates from the mid fifteenth century. Ruins of another late fifteenth century construction can still be seen. Possibly having been besieged in the Civil War, the castle was slighted and fell into ruin, but was restored soon after. The Great Chamber had electric lights installed in 1887. Such was the excitement in the village, that the village children were invited up to see them.</p>
              </section>
              <hr className="divider" />
              <section>
                <p>This concludes your trail. There is a pleasant viewpoint over the Vale of York a little further up the road on the left, complete with a bench. If you are in need of refreshments, there is The Durham Ox in the village for great pub food, or The Dutch House on the Brandsby Road about a mile outside the village. It offers delicious food, an art gallery, a delightful garden and a plant nursery.</p>
              </section>
            </div>
            <a href="#top"><p className="to-top">Back to top</p></a>
      </div>
    );
  }

export default Story;
