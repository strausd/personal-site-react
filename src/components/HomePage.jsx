import React from 'react';
import { connect } from 'react-redux'

import CounterController from './CounterController';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>counter: {this.props.counter}</p>
                <CounterController />
                <p>
                    Bacon ipsum dolor amet chicken tail pig, shank drumstick alcatra beef ribs fatback. Sausage porchetta ham hock, ground round pastrami jerky filet mignon turkey kevin tail. Short ribs beef ribs tri-tip salami turkey. Burgdoggen shoulder andouille, swine bacon doner rump kielbasa cupim corned beef.

                    Jowl pork loin boudin, kevin venison chuck sausage turducken bresaola ham. Tail burgdoggen brisket pork chop jerky. Sirloin sausage picanha hamburger. Sausage beef short loin t-bone flank, turducken pork belly bacon pancetta boudin. Ham hock cow andouille tail jowl. Pork belly beef ribs turkey, pork porchetta spare ribs pork chop.

                    Ball tip jowl ground round, short ribs chuck doner bresaola fatback kielbasa tri-tip biltong andouille tongue chicken shank. Bacon filet mignon andouille, pig ball tip venison rump brisket fatback tongue. Turducken pork loin pork chop, bacon tri-tip sausage boudin shoulder tail bresaola hamburger sirloin meatball pancetta. Chicken leberkas sausage chuck.

                    Bacon venison bresaola, short ribs beef ribs doner ham meatloaf shoulder swine ground round. Tri-tip burgdoggen spare ribs, strip steak leberkas swine boudin sausage hamburger ground round pancetta tongue. Flank bresaola ground round buffalo. Shankle brisket ground round kielbasa filet mignon.

                    Tri-tip ribeye pig alcatra. Sausage turkey pork belly tongue. Capicola burgdoggen andouille swine. Hamburger fatback salami, rump ball tip porchetta beef.

                    Beef frankfurter jowl kevin ball tip, picanha brisket. Salami ham hock andouille, buffalo pastrami pancetta frankfurter. Doner pork chop turkey burgdoggen buffalo bresaola, ribeye biltong landjaeger. Landjaeger jowl sirloin brisket cupim biltong filet mignon salami pork belly pancetta ball tip short ribs kevin shoulder.

                    Brisket ground round ribeye drumstick jowl bresaola, short ribs filet mignon doner prosciutto shank landjaeger andouille. Ham hock capicola bresaola landjaeger tongue turducken sausage. Swine jowl short ribs, bacon ground round cow tongue turducken. Ball tip fatback buffalo alcatra pancetta pork. Boudin t-bone pork loin filet mignon spare ribs. Jerky fatback swine porchetta burgdoggen chicken tenderloin ball tip. Boudin jowl venison, beef tenderloin sausage bresaola leberkas hamburger chicken pig biltong.

                    Flank beef pork loin turducken tenderloin meatloaf shoulder beef ribs. Porchetta shankle venison beef andouille pancetta turkey capicola. Flank pig capicola, meatloaf venison tenderloin ground round ham hock. Frankfurter corned beef andouille rump cupim buffalo drumstick beef ribs pork belly venison tri-tip kielbasa pastrami salami turkey. Beef ball tip pork belly tenderloin, prosciutto venison t-bone ham ground round turducken buffalo alcatra swine filet mignon. Filet mignon bresaola beef kevin pork loin frankfurter ham hamburger jowl jerky pork doner ribeye alcatra.

                    Strip steak chicken turkey, shoulder ham hock bacon burgdoggen sirloin pork porchetta cow spare ribs beef ribs leberkas. Pancetta pork chop hamburger jowl landjaeger. Chuck short ribs ribeye, doner corned beef swine pork chop. Pig filet mignon chicken pork pork chop ground round, rump frankfurter chuck tri-tip burgdoggen beef meatloaf short loin.

                    Leberkas hamburger burgdoggen, landjaeger cupim tongue sirloin shankle beef ribs. Cupim bacon short ribs bresaola, ham pork loin meatball burgdoggen filet mignon landjaeger beef ribs pancetta. Shoulder landjaeger doner pork, cow pork chop prosciutto beef buffalo salami. Spare ribs filet mignon pig prosciutto cupim, frankfurter shank bacon shankle corned beef.

                    Capicola ham picanha, buffalo cow flank tenderloin short loin spare ribs beef alcatra. Landjaeger capicola sausage, jowl pork belly brisket swine ham hock fatback prosciutto kielbasa pork chop tail leberkas. Sirloin spare ribs alcatra, short loin bacon frankfurter landjaeger doner hamburger venison beef ribs kielbasa. Filet mignon shankle venison tenderloin tail, beef ribs short loin flank short ribs pastrami.

                    T-bone doner prosciutto tongue cupim. Cow pork loin kevin, cupim meatball alcatra pork belly. Cow hamburger boudin flank, porchetta tail kielbasa pork belly. Bacon porchetta drumstick fatback, frankfurter meatball turkey picanha pork loin.

                    Brisket venison cupim, salami capicola pork belly chuck frankfurter burgdoggen flank boudin jerky chicken tongue fatback. Burgdoggen jowl landjaeger salami beef ribs spare ribs brisket, alcatra picanha ham hock bresaola pork chop turkey. Meatball flank shank bacon rump chicken pancetta ground round prosciutto shoulder turkey pastrami. Bacon jerky prosciutto pancetta kevin tri-tip capicola burgdoggen short ribs bresaola filet mignon pastrami corned beef porchetta short loin. Pork belly ground round filet mignon salami picanha biltong capicola drumstick hamburger rump t-bone jerky alcatra frankfurter short ribs. Flank fatback jerky short ribs alcatra. Picanha porchetta tri-tip ham hock, shoulder kevin hamburger fatback ribeye drumstick.

                    Ham hock pork cow meatball kielbasa shankle ham turducken frankfurter. Prosciutto ground round swine, shankle landjaeger flank pork. Porchetta chicken cupim pancetta tongue, pastrami pork loin swine pork short ribs ham hock meatloaf shankle beef ribs jerky. Biltong jowl tail, turkey cow swine picanha short ribs. Ground round kevin fatback picanha.

                    Meatloaf beef shoulder, swine landjaeger salami brisket meatball chicken flank ribeye chuck buffalo spare ribs. Ground round beef ribs ribeye biltong tri-tip. Ground round picanha capicola prosciutto corned beef biltong ribeye spare ribs beef salami rump beef ribs pork meatloaf. Flank ham jowl frankfurter brisket capicola ball tip meatloaf cupim picanha alcatra biltong shank.
                </p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps)(HomePage);