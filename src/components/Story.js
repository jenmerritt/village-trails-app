import React from 'react';
import './styles/Trail.css';
import './styles/Story.css';
import './styles/MobileLayout.css'

function Story({pageNumber, nextPage, previousPage}) {

    return (
      <div className="story-wrapper">
        { pageNumber == 1 ?
            <div id="intro" className="text-content">
              <h2>Welcome to the Crayke Village Trail</h2>
              <p>Crayke (the name possibly comes from the Saxon word ‘Creca’, meaning crag or rock) has a long history, with archaeological evidence showing occupation since Neolithic times. It seems to have been a key staging point on an ancient trackway going north – south. </p>
              <p>There is strong evidence of a Saxon settlement, possibly a monastery, on the hill. Indeed records show that in 685 Crayke and the land three miles around it was given to Cuthbert, Bishop of Lindisfarne, as a resting place on journeys to York. Thus started Crayke’s long association with Durham. Local finds include a polished stone axe head, dated to 3000BC, Roman pottery – possibly associated with Crayke’s use as an inland signal station built as part of the Saxon Shore defences in the 4th century, a 7th century pendant, a fragment of a 9th century stone cross and a curious hastily constructed burial pit containing one female and fifteen male skeletons. Are they monks, plague victims or maybe victims of William the Conqueror’s Harrying of the North?</p> 
              <p>The Domesday Book (1086) shows Crayke’s value had halved since the time of Edward the Confessor, almost certainly the result of William’s actions.</p>
              <p>For more information on Crayke History visit our website: www.craykehistory.uk</p>
            </div>
        : null }
        
        { pageNumber == 2 ?

            <div id="one-two-three" className="text-content">
              <p>Start the trail at the top of the hill. On your left, as the road bends to the south stands The Old Rectory (1), much altered in 1803-5 by Rector Robert Gray, who began the addition of a third storey which had to be demolished in 1839, after high winds showed it had made the building very unstable.</p>
              <p>Turn back and keep going down the hill and on your right, set sideways to the road is Church Farm (2), once the village blacksmith’s forge.</p> 
              <p>Further down stands the incongruously named Crayke Cottage (3), thought to have been built in 1852 as the curate’s house and the birthplace of William Ralph Inge, who became Dean of St Paul’s Cathedral in London 1811-34.</p>
            </div>
        : null }

        { pageNumber == 3 ?

            <div id="four-five" className="text-content">
              <p>Turn right at the bottom of the hill and head down Westway. This street was known as School Street until relatively recently, as Churton Hall (4) (on your right) was the original school house. Opened in 1846 It was erected at the expense of the Reverend Edward Churton and other benefactors for the free education of boys, later enlarged to take girls. The rectors were hard taskmasters, records show a high turnover of schoolmasters in the 1870s with money, poor school attendance affecting standards and inability to play the organ being cited as problems. Part of the bell tower fell down in 1971, after being struck by lightning, and in 1972 a new school was built on the site of the old Village Institute. The old school, now a private house, became the village hall, named in memory of Edward Churton.</p>
              <p>Head further down the hill and cross the road to Easingwold. Behind the hedge on the small green in front of you at the corner you will find The Pinfold (5), where stray farm animals were kept, having been rounded up. This was not the first pinfold in the village. It was built in 1852, after the Reverend Churton became exasperated by the noise the animals made when held in the original one beside the church. Farmers had to pay a fine to the person whose land they had strayed on to and to the pound keeper before the animals were released.</p>
            </div>
        : null }

        { pageNumber == 4 ?

            <div id="six-seven" className="text-content">
              <p>Now cross over towards Town End Farm and head back up Westway. Looking up the road, you will see that, as with much of the village, the original cobbles remain in place. First you will come to Tudor Cottage (6) with its original timber frame, thought to date from the early 17th century. </p>
              <p>Further up, outside The Homestead (7), you will also see by the steps to the house some staddle stones, these were traditional rodent proof footings for grain stores. It was built in 1872 by William Bayston, hence WB on the gable.</p>
            </div>
        : null }


        { pageNumber == 5 ?

            <div id="eight" className="text-content">
              <p>Head up past The Durham Ox (8), onto Brandsby Street. The Durham Ox is over 300 years old and is named after the famous Shorthorn Ox of immense size and weight. It also references Crayke’s link to Durham, to which county it belonged until 1844. This status made the parish a favourite haunt for those poaching in the Forest of Galtres, as they could escape prosecution by York authorities. When Crayke had 3 or 4 public houses, names such as The Greyhound show no attempt to disguise poaching activities.</p>
            </div>
        : null }

        { pageNumber == 6 ?

            <div id="nine-ten-eleven-twelve" className="text-content">
              <p>Walk all the way down to the last house on Brandsby Street on your right (you will need to cross the road as there is no pavement). This is Ivy Farm (9), which was built in 1560. Go a few steps down the lane beside it to see its timber framing at the rear. Now go back across the road and head up into the village.</p>
              <p>On your right you will see several properties of significant age: Rose Cottage (10) and Priest Cottages (11) next door. Rose Cottage served as a Catholic chapel from 1794 to 1833 (Catholic worship being legal again in England in 1791). Historically, Crayke has been a multi-faith village with Anglican, Catholic, Methodist and Quaker buildings at one time or another.</p>
              <p>Go a little further and you come to The Old Bakery (12), originally belonging to Charles Hogg Builders. A long established business, it was responsible for key village works such as enlarging Crayke Manor in the 1890s for the Stephen Cliff, who had bought most of Crayke Estate and whose family still own it. The property then became Banks’ Bakery.</p>
            </div>
        : null }

        { pageNumber == 7 ?
        
            <div id="thirteen-fourteen-fifteen" className="text-content">
              <p>Now head up Key Lane. This was originally known as Kiln Lane, a clue to early pottery works in the village. On your left you will see the original Methodist Chapel, now a house. It was replaced by the chapel on Church Hill. Turn left at the top and walk down to this chapel, now a house named Whistling Green (13). It dates from 1902.</p>
              <p>Looking back up the hill, you will see the Village Green (14), where bonfires were held to celebrate key events including Queen Victoria’s Golden Jubilee. Picture postcards survive of children sledging down the hill in the snow.</p>
              <p>In front of you is The Well (15). Crayke has many natural springs and wells. It was blocked up in 1933, when piped water came to the village. Crayke resident Mr Hogg, who was born in 1885, recalled a Mr Cooper, well sinker, being gassed in it when he went down to save his son who had got into difficulties. Only the boy survived.</p>
            </div>
        : null }

        { pageNumber == 8 ?
        
            <div id="sixteen-seventeen" className="text-content">
              <p>Next is Wellesley Cottage (16) with its unusual Flemish style brick work, with alternate headers and stretchers, previously one of Crayke’s pubs, latterly ‘The Rose and Crown’ (or just “Crown’) but once called ‘The Greyhound’.</p>
              <p>At the top of the green you come to Crayke Hall (17), built in 1747, for John Bowman, who came from Beverley and bought much land in Crayke. In 1767, Bowman is reputed to have persuaded the Bishop of Durham to appoint his brother, Thomas, as rector on the death of the incumbent Reverend Jephson. The housekeeper had been bribed to give Bowman an advantage by placing a lighted candle in an upstairs window of the rectory as soon as Jephson breathed his last.</p>
            </div>
        : null }

        { pageNumber == 9 ?

            <div id="eighteen" className="text-content">
              <p>At the top of the hill stands St Cuthbert’s Church (18). Take a moment to sit on the bench to the right of the gate in the churchyard. On a good day, you can see the towers of York Minster to the south and further off the less edifying sight of several power stations. Cuthbert is said to have founded a monastery in Crayke around 685. Our church, dating from 1436, could be on the site of the earlier monastic church where Cuthbert’s bones were kept for four months in the face of Viking attacks on Lindisfarne and the north coast in 883. His body was said to be in tact 200 years after his death in 687. If you enjoyed the view south then you might want to take a quick detour down Love Lane, the entrance to which is via a couple of steps out of the churchyard to the east. As you head down the lane you will pass a wild garden on your left. This was the site of the burial pit mentioned in the introduction. Just through the gate at the end of the lane you can sit and enjoy the view towards the White Horse of Kilburn, near Sutton Bank.</p>
            </div>
        : null }

        { pageNumber == 10 ?

            <div id="nineteen" className="text-content">
              <p>Leave the churchyard by the side steps on your left and walk up to the gates of Crayke Castle (19). First built in the twelfth century, probably in timber, it is said to have played host to five Plantagenet kings. The large imposing building, ‘The Great Chamber’ dates from the mid fifteenth century. Ruins of another late fifteenth century construction can still be seen. Possibly having been besieged in the Civil War, the castle was slighted and fell into ruin, but was restored soon after. The Great Chamber had electric lights installed in 1887. Such was the excitement in the village, that the village children were invited up to see them.</p>
              <p>This concludes your trail. There is a pleasant viewpoint over the Vale of York a little further up the road on the left, complete with a bench. If you are in need of refreshments, there is The Durham Ox in the village for great pub food, or The Dutch House on the Brandsby Road about a mile outside the village. It offers delicious food, an art gallery, a delightful garden and a plant nursery.</p>
            </div>

        : null }

        <hr className="divider" />

        <div id="story-buttons">

        { pageNumber != 1 ?
          <div id="previous" className="text-content">
            <p onClick={() => previousPage()} className="link">Previous</p>
          </div>
        : null }

        { pageNumber != 10 ?
          <div id="next" className="text-content">
            <p onClick={() => nextPage()} className="link">Next</p>
          </div>
        : null }
        </div>
      </div>
    );
  }

export default Story;
