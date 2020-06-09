import React from 'react';
import './styles/Trail.css';
import './styles/Story.css';

function Story({pageNumber, nextPage, previousPage}) {

    return (
      <div className="story-wrapper">
        { pageNumber == 1 ?
            <div id="intro">
              <h2>Welcome to the Crayke Village Trail.</h2>
              <p>Crayke (the name comes from the Celtic word ‘cerrag’, meaning crag or rock) has a long history, with archaeological evidence showing occupation since Neolithic times. It seems to have been a key staging point on an ancient trackway going north – south.</p>
              <p>There is strong evidence of a Saxon settlement, possibly a monastery, on the hill, indeed in 685, records show that Crayke and the land three miles around it, was given to Cuthbert, Bishop of Lindisfarne, as a resting place on journeys to York. Thus started Crayke’s long association with Durham. Finds include a polished stone axe, dated to 3000BC, Roman pottery – possibly associated with use in signal stations built as part of the Saxon Shore defences in the 4th century, a 7th century pendant, a 9th century fragment of a stone cross and a curious hastily constructed burial pit containing 16 skeletons, only one of them female, possibly monks or maybe victims of William the Conqueror’s Harrying of the North.</p> 
              <p>The Domesday Book (1086) shows Crayke’s value had halved since the time of Edward the Confessor, almost certainly the result of William’s actions.</p>
              <p>For more information on Crayke History visit our website: www.craykehistory.uk</p>
            </div>
        : null }
        
        { pageNumber == 2 ?

            <div id="one-two-three">
              <p>Start the trail at the top of the hill. On your left, as the road bends stands The Old Rectory (1), much altered in 1803-5 by the Bowman family, who held the living for many years, having reputedly bribed their way in to it. They added a third storey which had to be demolished in 1839, after high winds showed it had made the building very unstable.</p>
              <p>Turn back and keep going down the hill and on your right, set sideways to the road is Church Farm (2), once the village blacksmith’s forge.</p> 
              <p>Further down stands the incongruously named Crayke Cottage (3), thought to have been built in 1852 and the birthplace of William Inge, Dean of St Paul’s 1811-34.</p>
            </div>
        : null }

        { pageNumber == 3 ?

            <div id="four-five">
              <p>Turn right at the bottom of the hill and head down Westway. This street was known as School Street until relatively recently, as Churton Hall (4) (on your right) was the original school house. It was erected at the expense of the Reverend Edward Churton and other benefactors and opened in 1846 for the free education of boys. It was later enlarged when education became compulsory. Part of the bell tower fell down in 1971, after being struck by lightning, and in 1972 a new school was built on the site of the old Village Institute and the old school house became the village hall, named in memory of Edward Churton. It is now a private residence.</p>
              <p>Head further down the hill and cross the road to Easingwold. Behind the hedge on the small green in front of you at the corner you will find The Pinfold (5), this was where stray farm animals were kept, having been rounded up. This was not the first pinfold in the village, it was built in 1852, after the Reverend Churton became exasperated by the noise the animals made when held in the original one beside the church. Farmers had to pay a fine to the person whose land they had strayed on to and to the pound keeper, before the animals were released.</p>
            </div>
        : null }

        { pageNumber == 4 ?

            <div id="six-seven">
              <p>Now cross over towards Town End Farm and head back up Westway. Looking up the road, you will see that, as with much of the village, the original cobbles remaininplace. FirstyouwillcometoTudorCottage (6) with its original timber frame, thought to date from the early 17th Century.</p>
              <p>Further up, outside The Homestead (7), you will also see some staddle stones by the steps to the house, these were traditionally rodent proof footings for grain stores. It was built in 1872 by William Bayston, hence WB on the gable.</p>
            </div>
        : null }


        { pageNumber == 5 ?

            <div id="eight">
              <p>Head up past The Durham Ox (8), onto Brandsby Street. The Durham Ox is over 300 years old and is named after the famous Shorthorn ox of immense size and weight . It also references the fact that Crayke belonged to the See of Durham (and was part of the County of Durham until 1844). This status made the parish a favourite haunt for those poaching in the surrounding Forest of Galtres as they could escape prosecution. At one point Crayke had 3 or 4 public houses.</p>
            </div>
        : null }

        { pageNumber == 6 ?

            <div id="nine-ten-eleven-twelve">
              <p>Walk all the way down to the last house on Brandsby Street on your right (you will need to cross the road as there is no pavement). This is Ivy Farm (9), which was built in 1560. Go a few steps down the lane beside it to see its timber framing at the back. Now go back across the road and head back into the village.</p>
              <p>On your right you will see Rose Cottage (10). This was originally a Catholic chapel which was in use until 1827, run by the priests based at nearby Ampleforth. Historically, Crayke has been a multi-faith village with Anglican, Catholic, Methodist and Quaker buildings at one time or another.</p>
              <p>Next, you come to two cottages of significant age known as Priest Cottages (11).</p>
              <p>Go a little further and you come to The Old Bakery (12) which belonged to Charles Hogg Builders (Est c.1801and responsible for key village works such as enlarging Crayke Manor). It then became Bank’s Bakery.</p>
            </div>
        : null }

        { pageNumber == 7 ?
        
            <div id="thirteen-fourteen-fifteen">
              <p>Now head up Key Lane. This was originally known as Kiln Lane, a clue to early pottery works in the village. On your left you will see the original Methodist Chapel, now a house. It was replaced by the chapel on Church Hill. Turn left at the top and walk down to this chapel - Whistling Green (13). Now also a house, it dates from 1902.</p>
              <p>Looking back up the hill, you will see of the Village Green (14), where village bonfires were held to celebrate key events including Queen Victoria’s Golden Jubilee.</p>
              <p>On the green in front of you is The Well (15), Crayke has many natural springs and wells. This one was blocked up in 1933, when piped water came to the village. Crayke resident Mr Hogg, who was born in 1885, recalled a Mr Cooper, well sinker, being gassed in it, when he went down to save his son who had got into difficulties. His son survived.</p>
            </div>
        : null }

        { pageNumber == 8 ?
        
            <div id="sixteen-seventeen">
              <p>Next is Wellesley Cottage (16) with its unusual Flemish style brick work, with alternate headers and stretchers, it was previously one of Crayke’s pubs. Latterly ‘The Rose and Crown’ (or just “Crown’) but once called ‘The Greyhound’.</p>
              <p>At the top of the green you come to Crayke Hall (17). Built in 1747, for John Bowman, who had come from Beverley and bought up a large amount of land in Crayke. In 1767, John Bowman is reputed to have bribed the Bishop of Durham to appoint his brother, Thomas, as rector on the death of the incumbent Reverend Jephson. The housekeeper had also been bribed to give Bowman a head start in this plan, by placing a lighted candle in the window as soon as Jephson breathed his last.</p>
            </div>
        : null }

        { pageNumber == 9 ?

            <div id="eighteen">
              <p>At the top of the hill, stands St Cuthbert’s Church (18). Take a moment to sit on the bench to the right of the gate in the churchyard. On a good day, you can see the towers of York Minster to the south. Further off, the less edifying sight of several power stations. The church, dating from 1490, with perpendicular architecture and good early pews. Possibly on the site of an earlier monastic church, where St Cuthbert’s bones may have been stored for four months, when moved to avoid Viking attacks on Lindisfarne in 883AD. Cuthbert was said to have founded the monastery here in around 685AD. (If you enjoyed the view south then you might want to take a quick detour down Love Lane, the entrance to which is via a couple of steps out of the churchyard to the east. As you head down the lane you will pass a wild garden on your left. This was the site of the burial pit mentioned in the introduction. Just through the gate at the end of the lane you can sit and enjoy the view towards the White Horse.</p>
            </div>
        : null }

        { pageNumber == 10 ?

            <div id="nineteen">
              <p>Leave the churchyard by the side steps on your left and walk up to the gates of Crayke Castle (19). First built in the twelfth century, probably in timber, ruins of later stone construction can still be seen. The large imposing tower, ‘The Great Chamber’ dates from the mid fifteenth century. It is said to have hosted four Plantagenet kings. Possibly having been besieged in the Civil War, it was slighted and fell into ruin, but was restored soon after. The Great Chamber had electric lights installed in 1887, such was the excitement in the village, that the village children were invited up to see them.</p>
              <p>This concludes your trail, there is a pleasant viewpoint over the Vale of York a little further up the road on the left, complete with a bench. If you are in need of refreshments, there is The Durham Ox in the village for good pub food, or The Dutch House on the Brandsby Road about a mile outside the village for delicious Dutch pancakes, a look round its art gallery and delightful garden.</p>
            </div>

        : null }

        <hr className="divider" />

        <div id="story-buttons">

        { pageNumber != 1 ?
          <div id="previous">
            <p onClick={() => previousPage()}>Previous</p>
          </div>
        : null }

        { pageNumber != 10 ?
          <div id="next">
            <p onClick={() => nextPage()}>Next</p>
          </div>
        : null }
        </div>
      </div>
    );
  }

export default Story;
